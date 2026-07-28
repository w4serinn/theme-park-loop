// scripts/arg-design-utils.js
//
// docs/ARG-DESIGN.md の4節(ページ接続図)の表をパースし、
// - 実装済みとして記載された実ファイルパスが実在するか
// - 「たどり着き方」「必要な断片」等で参照されるP番号/断片IDが、表に実在するか
// - 断片の依存関係(必要な断片を産出する行が先に実装済みか)
// を機械的に検証するための共通ロジック。tests/arg-design-consistency.test.js から使う。
//
// 表のセルの書き方の約束(docs/ARG-DESIGN.md 3節・4-5節と揃えること):
// - 1列目(先頭セル)がそのページ自身のID(P1、PGATE等)
// - 「→」で繋がれたID列(例: P54 → P55)は4-5節のチェーン表記で、
//   列挙されている全IDをその場で新たに定義しているとみなす
// - 「,」で区切られたID列(例: P20, P9)は複数の親への参照(4節「たどり着き方」)
//   であり、新たな定義とはみなさない(既にどこかの行で定義されている前提)

import { readFileSync, existsSync } from "node:fs";

const ID_TOKEN_PATTERN = /P\d+|PGATE|PFINAL/g;
const FRAGMENT_TOKEN_PATTERN = /F\d+/g;
const IMPLEMENTED_PATH_PATTERN = /実装済み\(`([^`]+)`\)/g;

function isTableRow(line) {
  return /^\|.+\|$/.test(line.trim());
}

function splitCells(line) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function isSeparatorRow(cells) {
  return cells.every((c) => /^:?-+:?$/.test(c));
}

function isHeaderRow(cells) {
  // ヘッダー行(列名)にはP番号パターンが出現しないので、
  // 実質「1列目にID相当のトークンが無い」ことで data 行と区別できる。
  return !ID_TOKEN_PATTERN.test(cells[0] || "") && !/^[FP]\d+$|^PGATE$|^PFINAL$/.test((cells[0] || "").trim());
}

/**
 * 4節の全テーブル行から、定義されているID(1列目、または「→」チェーン列挙)の集合と、
 * どこかのセルで参照されているID(カンマ区切りの複数親、必要な断片欄の(P◯◯産出)等)を、
 * それぞれ集合として返す。
 * @returns {{ definedIds: Set<string>, referencedIds: Set<string> }}
 */
export function extractIdGraph(markdown) {
  const lines = markdown.split(/\r?\n/);
  const definedIds = new Set();
  const referencedIds = new Set();

  for (const line of lines) {
    if (!isTableRow(line)) continue;
    const cells = splitCells(line);
    if (cells.length === 0 || isSeparatorRow(cells)) continue;
    if (isHeaderRow(cells)) continue;

    // 1列目は常にそのページ自身のID定義
    const firstCell = cells[0].trim();
    if (/^P\d+$|^PGATE$|^PFINAL$/.test(firstCell)) {
      definedIds.add(firstCell);
    }

    // 4-5節「root ID | 連なる flavor ID(たどり着く順) | status」は3列固定の
    // 専用フォーマット。2列目(cells[1])はIDトークンのみ(「→」で複数連結、
    // または単発なら矢印無し)で構成され、単発の子ページでも新規定義とみなす。
    const isChainTableRow = cells.length === 3;

    for (const [cellIndex, cell] of cells.entries()) {
      const tokens = cell.match(ID_TOKEN_PATTERN) || [];
      if (tokens.length === 0) continue;

      if (isChainTableRow && cellIndex === 1) {
        const strippedOfTokensAndArrows = cell.replace(ID_TOKEN_PATTERN, "").replace(/→/g, "").trim();
        if (strippedOfTokensAndArrows === "") {
          for (const t of tokens) definedIds.add(t);
          continue;
        }
      }

      for (const t of tokens) referencedIds.add(t);
    }
  }

  return { definedIds, referencedIds };
}

/**
 * status列に `実装済み(\`path\`)` と書かれている全ての実ファイルパスを、
 * それが書かれていた行の先頭ID付きで返す。
 * @returns {{ path: string, rowId: string }[]}
 */
export function extractImplementedPaths(markdown) {
  const lines = markdown.split(/\r?\n/);
  const results = [];

  for (const line of lines) {
    if (!isTableRow(line)) continue;
    const cells = splitCells(line);
    if (cells.length === 0 || isSeparatorRow(cells) || isHeaderRow(cells)) continue;
    const rowId = cells[0].trim();

    for (const cell of cells) {
      let match;
      IMPLEMENTED_PATH_PATTERN.lastIndex = 0;
      while ((match = IMPLEMENTED_PATH_PATTERN.exec(cell))) {
        results.push({ path: match[1], rowId });
      }
    }
  }

  return results;
}

/**
 * 「産出する断片」列から 断片ID -> 産出する行ID のMapを作る。
 * 「必要な断片」列から 行ID -> 必要な断片IDの配列のMapを作る。
 * @returns {{ producedBy: Map<string, string>, requiredBy: Map<string, string[]>, statusByRow: Map<string, string> }}
 */
export function extractFragmentDependencies(markdown) {
  const lines = markdown.split(/\r?\n/);
  const producedBy = new Map();
  const requiredBy = new Map();
  const statusByRow = new Map();

  for (const line of lines) {
    if (!isTableRow(line)) continue;
    const cells = splitCells(line);
    if (cells.length < 5 || isSeparatorRow(cells) || isHeaderRow(cells)) continue;

    const rowId = cells[0].trim();
    // 4-1〜4-4b: | ID | 種別 | たどり着き方 | 産出する断片 | 必要な断片 | status |
    // 4-6:        | ID | 種別 | たどり着き方 | 必要な断片 | status |
    const hasProducedColumn = cells.length >= 6;
    const producedCell = hasProducedColumn ? cells[3] : "";
    const requiredCell = hasProducedColumn ? cells[4] : cells[3];
    const statusCell = cells[cells.length - 1];

    statusByRow.set(rowId, statusCell);

    const producedTokens = producedCell.match(FRAGMENT_TOKEN_PATTERN) || [];
    for (const f of producedTokens) producedBy.set(f, rowId);

    const requiredTokens = requiredCell.match(FRAGMENT_TOKEN_PATTERN) || [];
    if (requiredTokens.length > 0) requiredBy.set(rowId, requiredTokens);
  }

  return { producedBy, requiredBy, statusByRow };
}

export function getArgDesign() {
  return readFileSync("docs/ARG-DESIGN.md", "utf-8");
}

export function fileExists(path) {
  return existsSync(path);
}
