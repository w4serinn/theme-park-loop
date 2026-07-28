// src/search-data.js の整合性を機械的に検証するテスト。
//
// src/search-data.js は file:// 環境でも動くよう window.SEARCH_INDEX へのグローバル
// 代入という素のスクリプト形式で書かれており(ES moduleではない)、ここではNodeの
// vmモジュールでその代入を再現して読み込む。
//
// 検証内容: 同じキーワード文字列(title/keywordsのいずれか)を複数の異なるエントリが
// 持っていないこと(docs/ARG-DESIGN.md 2-1節「多対1はOK、1対多はNG」)。
// category は複数ページで共有される前提のグループラベルのため対象外
// (例: 「学食・喫茶室」は8ページが共通して持つ)。

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import vm from "node:vm";

function loadSearchIndex() {
  const code = readFileSync("src/search-data.js", "utf-8");
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window.SEARCH_INDEX;
}

const index = loadSearchIndex();

describe("src/search-data.js の整合性", () => {
  it("SEARCH_INDEXが1件以上ある", () => {
    expect(index.length).toBeGreaterThan(0);
  });

  it("同じキーワード文字列(title/keywords)を複数の異なるエントリが持っていない", () => {
    const owners = new Map(); // 文字列 -> それを持つエントリpathの配列

    for (const entry of index) {
      const strings = [entry.title, ...(entry.keywords || [])];
      for (const s of strings) {
        if (!owners.has(s)) owners.set(s, []);
        const paths = owners.get(s);
        if (!paths.includes(entry.path)) paths.push(entry.path);
      }
    }

    const duplicated = [...owners.entries()].filter(([, paths]) => paths.length > 1);
    expect(duplicated, `重複しているキーワード: ${JSON.stringify(duplicated)}`).toEqual([]);
  });
});
