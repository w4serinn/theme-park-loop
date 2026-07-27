import { describe, it, expect } from "vitest";
import { newsEntryLabel, renderNewsListHtml } from "../scripts/news-render.js";

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

describe("renderNewsListHtml", () => {
  it("newsが空ならお知らせ無しの文言を返す", () => {
    expect(renderNewsListHtml([])).toBe('<p class="news-empty">まだ更新履歴はありません。</p>');
  });

  it("件数の上限を設けず全件をliに出力する(10件超でも切り捨てない)", () => {
    const news = Array.from({ length: 15 }, (_, i) => ({
      date: `2026-01-${String(i + 1).padStart(2, "0")}`,
      title: `お知らせ${i + 1}`,
      note: `本文${i + 1}`
    }));
    const html = renderNewsListHtml(news);
    const liCount = (html.match(/<li>/g) || []).length;
    expect(liCount).toBe(15);
  });

  it("スクロール可能なコンテナでulを包む", () => {
    const html = renderNewsListHtml([{ date: "2026-01-01", title: "テスト", note: "本文" }]);
    expect(html).toContain('class="news-list-scroll"');
    expect(html).toContain('<ul class="news-list">');
  });

  it("日付の新しい順に並び替える", () => {
    const news = [
      { date: "2026-01-01", title: "古い", note: "古い本文" },
      { date: "2026-03-01", title: "新しい", note: "新しい本文" }
    ];
    const html = renderNewsListHtml(news);
    expect(html.indexOf("新しい本文")).toBeLessThan(html.indexOf("古い本文"));
  });
});
