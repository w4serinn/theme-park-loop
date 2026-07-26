import { describe, it, expect } from "vitest";
import {
  extractPages,
  extractBugfixSection,
  extractPageSubtaskCounts,
  isPageAlreadyRecorded
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
});

describe("extractBugfixSection", () => {
  it("見出しが無ければ空を返す", () => {
    const md = ["### 1. トップページ [status: 完了]", "- [x] (S) HTML骨格"].join("\n");
    expect(extractBugfixSection(md)).toEqual({ resolved: [], unresolvedCount: 0 });
  });

  it("(現在なし)のプレースホルダーのみなら空を返す", () => {
    const md = [
      "## バグ修正(最優先 — 通常機能より先に上から順に着手する)",
      "",
      "(現在なし)",
      "",
      "## 新規ページ提案(承認待ち)"
    ].join("\n");
    expect(extractBugfixSection(md)).toEqual({ resolved: [], unresolvedCount: 0 });
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
