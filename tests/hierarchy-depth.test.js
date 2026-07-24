// 2階層ルール(一覧ページ→エリア/カテゴリページ まで)を機械的に検証するテスト。
//
// pages/ 直下からの相対パスで、ディレクトリの深さが1(= カテゴリフォルダ1段のみ)を
// 超えるHTMLファイルが存在しないことを確認する。
//
// 許容される例:
//   pages/index.html                    (深さ0、トップページ)
//   pages/exploration/index.html        (深さ1、一覧ページ)
//   pages/exploration/alchemy-tower.html(深さ1、エリアページ。indexと同階層)
//
// 許容されない例(3階層目):
//   pages/exploration/alchemy-tower/detail.html (深さ2、NG)
//
// evolve/local-reviewのプロンプト指示だけに頼らず、この違反は必ずテスト失敗として
// 機械的に検出されるようにする。

import { describe, it, expect } from "vitest";
import { readdirSync, statSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";

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

function depthFromPagesRoot(absPath) {
  const rel = relative(PAGES_DIR, dirname(absPath));
  if (rel === "") return 0;
  return rel.split(sep).length;
}

describe("2階層ルール(3階層目のページを新設しない)", () => {
  const files = listHtmlFiles(PAGES_DIR);

  if (files.length === 0) {
    it("pages/ がまだ空なので検証をスキップする", () => {
      expect(true).toBe(true);
    });
  } else {
    it.each(files)("%s はpages/から見て深さ1以内である", (file) => {
      const depth = depthFromPagesRoot(file);
      expect(depth).toBeLessThanOrEqual(1);
    });
  }
});
