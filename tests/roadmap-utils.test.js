import { describe, it, expect } from "vitest";
import {
  extractPages,
  extractBugfixSection,
  extractPageSubtaskCounts,
  isPageAlreadyRecorded,
  upsertBugfixNewsEntry
} from "../scripts/roadmap-utils.js";

describe("extractPages の紹介文(introText)検出", () => {
  it("見出し直後に紹介文があれば取得する", () => {
    const md = [
      "### 2. 学院内探索 [status: 完了]",
      "> 紹介文: 錬金術研究棟が開放されました。",
      "- [x] (S) 一覧ページの骨格"
    ].join("\n");

    const pages = extractPages(md);
    expect(pages.get("2").introText).toBe("錬金術研究棟が開放されました。");
  });

  it("紹介文が無ければ null になる", () => {
    const md = ["### 1. トップページ [status: 完了]", "- [x] (S) HTML骨格"].join("\n");

    const pages = extractPages(md);
    expect(pages.get("1").introText).toBeNull();
  });

  it("空行を挟んでも紹介文を見つけられる", () => {
    const md = [
      "### 3. 学院祭・行事 [status: 完了]",
      "",
      "> 紹介文: 秋の収穫祭が始まりました。",
      "- [x] (S) イベントカレンダー"
    ].join("\n");

    const pages = extractPages(md);
    expect(pages.get("3").introText).toBe("秋の収穫祭が始まりました。");
  });

  it("2行以上に折り返された紹介文を1つに連結する(継続行に`>`が無い場合)", () => {
    const md = [
      "### 0. 共通パーツ(ヘッダー/フッター) [status: 完了]",
      "",
      "> 紹介文: ヘッダーの「入学願書」ナビリンクが、どのページからでも一目でわかる",
      "強調ボタンになりました。気になったときにすぐ入学願書ページへ進めます。",
      "",
      "(現在、追加のサブタスクなし)"
    ].join("\n");

    const pages = extractPages(md);
    expect(pages.get("0").introText).toBe(
      "ヘッダーの「入学願書」ナビリンクが、どのページからでも一目でわかる強調ボタンになりました。気になったときにすぐ入学願書ページへ進めます。"
    );
  });

  it("継続行の空行・見出し・箇条書きで連結を打ち切る", () => {
    const md = [
      "### 1. トップページ [status: 完了]",
      "> 紹介文: 一行目です",
      "",
      "- [x] (S) この行は紹介文に含まれない"
    ].join("\n");

    const pages = extractPages(md);
    expect(pages.get("1").introText).toBe("一行目です");
  });
});

describe("extractBugfixSection", () => {
  it("見出しが無ければ空を返す", () => {
    const md = ["### 1. トップページ [status: 完了]", "- [x] (S) HTML骨格"].join("\n");
    expect(extractBugfixSection(md)).toEqual({ resolved: [], unresolvedCount: 0, note: null });
  });

  it("(現在なし)のプレースホルダーのみなら空を返す", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "(現在なし)",
      "",
      "## 新規ページ提案(承認待ち)"
    ].join("\n");
    expect(extractBugfixSection(md)).toEqual({ resolved: [], unresolvedCount: 0, note: null });
  });

  it("解消済み・未解消の件数と解消済み項目名を正しく取得する", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "- [x] (S) 学食: 詳細ボタンが反応しない",
      "      原因: スクリプト未読込。",
      "- [ ] (M) 全ページ共通: ヒーロー画像が見切れる",
      "- [x] (S) 学院祭: 季節フィルターが効かない",
      "",
      "## 新規ページ提案(承認待ち)",
      "- [ ] (S) この行はバグ修正セクション外なのでカウントされない"
    ].join("\n");

    const result = extractBugfixSection(md);
    expect(result.unresolvedCount).toBe(1);
    expect(result.resolved).toEqual([
      "学食: 詳細ボタンが反応しない",
      "学院祭: 季節フィルターが効かない"
    ]);
  });

  it("見出し直後の`> お知らせ:`行を取得する", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "> お知らせ: 館内点検により見つかった不具合を、無事に修繕いたしました。",
      "- [x] (S) 学食: 詳細ボタンが反応しない"
    ].join("\n");

    const result = extractBugfixSection(md);
    expect(result.note).toBe("館内点検により見つかった不具合を、無事に修繕いたしました。");
  });

  it("`> お知らせ:`行が無ければ note は null になる", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "- [x] (S) 学食: 詳細ボタンが反応しない"
    ].join("\n");

    const result = extractBugfixSection(md);
    expect(result.note).toBeNull();
  });

  it("2行以上に折り返された`> お知らせ:`を1つに連結する(継続行に`>`がある場合)", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "> お知らせ: ヒントの手引きの見出しが、実際の手がかりの在り処と食い違って",
      "> しまう不具合が見つかり、修繕いたしました。",
      "",
      "- [x] (S) 学食: 詳細ボタンが反応しない"
    ].join("\n");

    const result = extractBugfixSection(md);
    expect(result.note).toBe(
      "ヒントの手引きの見出しが、実際の手がかりの在り処と食い違ってしまう不具合が見つかり、修繕いたしました。"
    );
  });

  it("バグ修正項目の説明文は複数行あっても1行目だけを識別子として使う", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "- [x] (S) 学食: 詳細ボタンが反応しない",
      "      原因: スクリプト未読込。修正済み。",
      "      あわせてテストも追加した。"
    ].join("\n");

    const result = extractBugfixSection(md);
    expect(result.resolved).toEqual(["学食: 詳細ボタンが反応しない"]);
  });
});

describe("upsertBugfixNewsEntry", () => {
  it("同じ日付のバグ修正エントリが無ければ新規追加する", () => {
    const news = [];
    const bugfixNews = { title: "不具合修正", note: "館内の一部に不具合が見つかりました。", resolvedItems: ["A"] };
    const changed = upsertBugfixNewsEntry(news, bugfixNews, "2026-07-29");

    expect(changed).toBe(true);
    expect(news).toEqual([
      { date: "2026-07-29", number: "bugfix-2026-07-29", title: "不具合修正", note: "館内の一部に不具合が見つかりました。", type: "bugfix", items: ["A"] }
    ]);
  });

  it("同じ日付のエントリがあれば未記録のitemsだけ追記し、noteも最新に更新する", () => {
    const news = [
      { date: "2026-07-29", number: "bugfix-2026-07-29", title: "不具合修正", note: "古いお知らせ文", type: "bugfix", items: ["A"] }
    ];
    const bugfixNews = { title: "不具合修正", note: "新しいお知らせ文", resolvedItems: ["A", "B"] };
    const changed = upsertBugfixNewsEntry(news, bugfixNews, "2026-07-29");

    expect(changed).toBe(true);
    expect(news[0].items).toEqual(["A", "B"]);
    expect(news[0].note).toBe("新しいお知らせ文");
  });

  it("新しいitemsが無ければ何も変更しない(noteも据え置き)", () => {
    const news = [
      { date: "2026-07-29", number: "bugfix-2026-07-29", title: "不具合修正", note: "既存のお知らせ文", type: "bugfix", items: ["A"] }
    ];
    const bugfixNews = { title: "不具合修正", note: "再実行時の文言", resolvedItems: ["A"] };
    const changed = upsertBugfixNewsEntry(news, bugfixNews, "2026-07-29");

    expect(changed).toBe(false);
    expect(news[0].note).toBe("既存のお知らせ文");
    expect(news[0].items).toEqual(["A"]);
  });

  it("日付が異なれば別エントリとして新規追加する", () => {
    const news = [
      { date: "2026-07-28", number: "bugfix-2026-07-28", title: "不具合修正", note: "前日分", type: "bugfix", items: ["A"] }
    ];
    const bugfixNews = { title: "不具合修正", note: "本日分", resolvedItems: ["B"] };
    const changed = upsertBugfixNewsEntry(news, bugfixNews, "2026-07-29");

    expect(changed).toBe(true);
    expect(news).toHaveLength(2);
    expect(news[1]).toEqual(
      { date: "2026-07-29", number: "bugfix-2026-07-29", title: "不具合修正", note: "本日分", type: "bugfix", items: ["B"] }
    );
  });
});

describe("isPageAlreadyRecorded", () => {
  it("番号と紹介文が両方一致すれば記録済みと判定する", () => {
    const news = [{ number: "4", title: "購買部", note: "購買部が全面開店しました。" }];
    const page = { number: "4", title: "購買部", introText: "購買部が全面開店しました。" };
    expect(isPageAlreadyRecorded(news, page)).toBe(true);
  });

  it("番号が同じでも紹介文が変われば未記録と判定する(再完了)", () => {
    const news = [{ number: "4", title: "購買部", note: "購買部が全面開店しました。" }];
    const page = { number: "4", title: "購買部", introText: "購買部が刷新されました。" };
    expect(isPageAlreadyRecorded(news, page)).toBe(false);
  });

  it("番号が違えば未記録と判定する", () => {
    const news = [{ number: "4", title: "購買部", note: "購買部が全面開店しました。" }];
    const page = { number: "5", title: "学食・喫茶室", introText: "購買部が全面開店しました。" };
    expect(isPageAlreadyRecorded(news, page)).toBe(false);
  });

  it("紹介文が無い(null)場合も一致すれば記録済みと判定する", () => {
    const news = [{ number: "1", title: "トップページ", note: null }];
    const page = { number: "1", title: "トップページ", introText: null };
    expect(isPageAlreadyRecorded(news, page)).toBe(true);
  });
});

describe("extractPageSubtaskCounts", () => {
  it("ページごとに完了・未完了サブタスクの件数を数える", () => {
    const md = [
      "### 1. トップページ [status: 完了]",
      "> 紹介文: ...",
      "- [x] (S) 完了済みA",
      "- [x] (S) 完了済みB",
      "",
      "### 2. 学院内探索 [status: 進行中]",
      "- [x] (S) 完了済みC",
      "- [ ] (M) 未完了D"
    ].join("\n");

    const result = extractPageSubtaskCounts(md);
    expect(result.get("1")).toEqual({
      title: "トップページ",
      status: "完了",
      checkedCount: 2,
      uncheckedCount: 0
    });
    expect(result.get("2")).toEqual({
      title: "学院内探索",
      status: "進行中",
      checkedCount: 1,
      uncheckedCount: 1
    });
  });

  it("バグ修正セクション(## 見出し)の項目はページ集計に含めない", () => {
    const md = [
      "## バグ修正(最優先)",
      "- [x] (S) 何かのバグ",
      "- [ ] (S) 別のバグ",
      "",
      "### 1. トップページ [status: 完了]",
      "- [x] (S) 完了済みA"
    ].join("\n");

    const result = extractPageSubtaskCounts(md);
    expect(result.get("1")).toEqual({
      title: "トップページ",
      status: "完了",
      checkedCount: 1,
      uncheckedCount: 0
    });
  });

  it("継続行(インデントされた説明)は件数に影響しない", () => {
    const md = [
      "### 1. トップページ [status: 進行中]",
      "- [ ] (M) タイトル行",
      "      継続行その1",
      "      継続行その2"
    ].join("\n");

    const result = extractPageSubtaskCounts(md);
    expect(result.get("1").uncheckedCount).toBe(1);
  });
});
