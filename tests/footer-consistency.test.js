// 「フッターがページごとにズレる」事故を防ぐための構造テスト。
// 各ページが共通パーツ(partials/header.html, partials/footer.html)経由で
// ヘッダー・フッターを表示しているか(独自にheader/footerタグを書いていないか)を確認する。

import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const PAGES_DIR = join(ROOT, "pages");

function listHtmlFiles(dir) {
  let results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results = results.concat(listHtmlFiles(full));
    } else if (entry.endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

describe("ヘッダー/フッターの共通化ルール", () => {
  // pages/ はまだ空(プロジェクト初期状態)の場合がある。
  // evolveサイクルがページを追加するたびに、このテストが自動的に対象を増やしていく。
  const files = listHtmlFiles(PAGES_DIR);

  if (files.length === 0) {
    it("pages/ がまだ空なので検証をスキップする", () => {
      expect(true).toBe(true);
    });
  } else {
    it.each(files)(
      "%s は共通ヘッダー/フッターのプレースホルダーを使い、独自のheader/footerタグを持たない",
      (file) => {
        const html = readFileSync(file, "utf-8");
        expect(html).toContain("<!-- HEADER -->");
        expect(html).toContain("<!-- FOOTER -->");
        expect(html).not.toMatch(/<header[\s>]/);
        expect(html).not.toMatch(/<footer[\s>]/);
      }
    );
  }
});
