import { describe, it, expect } from "vitest";
import { newsEntryLabel } from "../scripts/news-render.js";

describe("newsEntryLabel", () => {
  it("noteがあればそのまま使う", () => {
    const entry = { title: "学院内探索", note: "錬金術研究棟が開放されました。" };
    expect(newsEntryLabel(entry)).toBe("錬金術研究棟が開放されました。");
  });

  it("noteが無ければ機械的な一文にフォールバックする", () => {
    const entry = { title: "トップページ", note: null };
    expect(newsEntryLabel(entry)).toBe("トップページを公開しました");
  });

  it("noteが空文字の場合もフォールバックする", () => {
    const entry = { title: "学食・喫茶室", note: "" };
    expect(newsEntryLabel(entry)).toBe("学食・喫茶室を公開しました");
  });
});
