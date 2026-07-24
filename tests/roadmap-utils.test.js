import { describe, it, expect } from "vitest";
import { extractPages } from "../scripts/roadmap-utils.js";

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
