// pages/*.html のソースで、内部リンク・スタイルシート・画像などに
// "/"から始まる絶対パスが使われていないかを検証するテスト。
//
// GitHub Pagesのプロジェクトサイトはサブパス配下(例: /theme-park-loop/)で公開されるため、
// 絶対パス(例: href="/index.html")を使うとリンクが壊れる。
// 代わりに "{{BASE}}" プレースホルダーを前置した相対パスを使うこと
// (evolve/SKILL.md参照、scripts/build.js が変換する)。

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

describe("内部パスは絶対パスではなく{{BASE}}付きの相対パスを使う", () => {
  const files = listHtmlFiles(PAGES_DIR);

  if (files.length === 0) {
    it("pages/ がまだ空なので検証をスキップする", () => {
      expect(true).toBe(true);
    });
  } else {
    it.each(files)("%s に href=\"/...\" や src=\"/...\" の絶対パスが無い", (file) => {
      const html = readFileSync(file, "utf-8");
      // href="/..." や src="/..." (先頭が/、プロトコル相対の//ではないもの)を検出する
      expect(html).not.toMatch(/(href|src)="\/(?!\/)/);
    });
  }
});
