import { describe, it, expect } from "vitest";
import { extractPages, extractBugfixSection, sameItemSet } from "../scripts/roadmap-utils.js";

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

describe("sameItemSet", () => {
  it("同じ要素でも並び順が違えば等しいと判定する", () => {
    expect(sameItemSet(["A", "B"], ["B", "A"])).toBe(true);
  });

  it("要素数が違えば等しくないと判定する", () => {
    expect(sameItemSet(["A", "B"], ["A"])).toBe(false);
  });

  it("要素の内容が違えば等しくないと判定する", () => {
    expect(sameItemSet(["A", "B"], ["A", "C"])).toBe(false);
  });

  it("空配列どうしは等しいと判定する", () => {
    expect(sameItemSet([], [])).toBe(true);
  });
});
