// scripts/roadmap-utils.js
//
// docs/ROADMAP.md のページ見出しおよびバグ修正セクションをパースし、origin/main と
// 比較して新たに完了したページ・解消されたバグを検出するための共通ロジック。
// scripts/check-roadmap-completion.js と scripts/update-news.js の両方から使う。

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const HEADING_PATTERN = /^###\s*(\d+)\.\s*(.+?)\s*\[status:\s*([^\]]+)\]/;
const INTRO_PATTERN = /^>\s*紹介文[:：]\s*(.+)$/;
const BUGFIX_SECTION_HEADING = /^##\s*バグ修正/;
const SECTION_HEADING = /^##\s/;
const CHECKED_ITEM_PATTERN = /^-\s*\[x\]\s*\([SML]\)\s*(.+)$/i;
const UNCHECKED_ITEM_PATTERN = /^-\s*\[ \]\s*\([SML]\)\s*(.+)$/i;

/**
 * ROADMAP.mdをパースし、ページ番号 -> {title, status, introText} のMapを返す。
 * introText は見出し直後(空行を挟んでもよい)に
 * `> 紹介文: ...` という行があればその本文、無ければ null になる。
 */
export function extractPages(markdown) {
  const lines = markdown.split(/\r?\n/);
  const pages = new Map();

  for (let i = 0; i < lines.length; i++) {
    const headingMatch = HEADING_PATTERN.exec(lines[i]);
    if (!headingMatch) continue;

    const [, number, title, status] = headingMatch;
    let introText = null;

    for (let j = i + 1; j < lines.length && j <= i + 5; j++) {
      const trimmed = lines[j].trim();
      if (trimmed === "") continue;
      const introMatch = INTRO_PATTERN.exec(trimmed);
      if (introMatch) introText = introMatch[1].trim();
      break; // 空行以外の最初の行だけを見る(サブタスク行なら紹介文は無い)
    }

    pages.set(number, { title: title.trim(), status: status.trim(), introText });
  }
  return pages;
}

/**
 * 番号付きページ(`### N. ページ名 [status: ...]`)ごとに、セクション内の
 * 完了済み(`- [x]`)・未完了(`- [ ]`)サブタスク行数を数える。
 * `docs/ROADMAP.md` が「完了サブタスクは都度 docs/roadmap-done.md へ退避し、
 * statusは未完了タスクの有無と一致させる」運用を守れているかを機械的に
 * 検証するために使う(tests/roadmap-consistency.test.js 参照)。
 * @returns {Map<string, { title: string, status: string, checkedCount: number, uncheckedCount: number }>}
 */
export function extractPageSubtaskCounts(markdown) {
  const lines = markdown.split(/\r?\n/);
  const result = new Map();

  const headingIndexes = [];
  for (let i = 0; i < lines.length; i++) {
    const m = HEADING_PATTERN.exec(lines[i]);
    if (m) headingIndexes.push({ index: i, number: m[1], title: m[2].trim(), status: m[3].trim() });
  }

  for (let h = 0; h < headingIndexes.length; h++) {
    const { index, number, title, status } = headingIndexes[h];
    let end = lines.length;
    for (let j = index + 1; j < lines.length; j++) {
      if (SECTION_HEADING.test(lines[j]) || HEADING_PATTERN.test(lines[j])) {
        end = j;
        break;
      }
    }

    let checkedCount = 0;
    let uncheckedCount = 0;
    for (let i = index + 1; i < end; i++) {
      if (CHECKED_ITEM_PATTERN.test(lines[i])) checkedCount++;
      else if (UNCHECKED_ITEM_PATTERN.test(lines[i])) uncheckedCount++;
    }

    result.set(number, { title, status, checkedCount, uncheckedCount });
  }

  return result;
}

export function getBranchRoadmap() {
  return readFileSync("docs/ROADMAP.md", "utf-8");
}

export function getMainRoadmap() {
  try {
    return execSync("git show origin/main:docs/ROADMAP.md", { encoding: "utf-8" });
  } catch {
    // origin/mainにまだROADMAP.mdが無い場合(初回セットアップ直後など)は空として扱う
    return "";
  }
}

/**
 * ブランチのROADMAP.mdで完了しているが、origin/mainではまだ完了していないページを返す。
 * @returns {{number: string, title: string, introText: string|null}[]}
 */
export function getNewlyCompletedPages() {
  const branchPages = extractPages(getBranchRoadmap());
  const mainPages = extractPages(getMainRoadmap());

  const newlyCompleted = [];
  for (const [number, page] of branchPages) {
    if (page.status === "完了" && mainPages.get(number)?.status !== "完了") {
      newlyCompleted.push({ number, title: page.title, introText: page.introText });
    }
  }
  return newlyCompleted;
}

/**
 * `## バグ修正` セクションを解析し、解消済み(`- [x]`)項目の一覧と
 * 未解消(`- [ ]`)項目の件数を返す。項目は複数行に渡ってよいが、
 * 識別には各項目の1行目(チェックボックス直後の説明文)だけを使う。
 * @returns {{ resolved: string[], unresolvedCount: number }}
 */
export function extractBugfixSection(markdown) {
  const lines = markdown.split(/\r?\n/);

  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (BUGFIX_SECTION_HEADING.test(lines[i])) {
      start = i + 1;
      break;
    }
  }
  if (start === -1) return { resolved: [], unresolvedCount: 0 };

  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (SECTION_HEADING.test(lines[i])) {
      end = i;
      break;
    }
  }

  const resolved = [];
  let unresolvedCount = 0;
  for (let i = start; i < end; i++) {
    const checkedMatch = CHECKED_ITEM_PATTERN.exec(lines[i]);
    if (checkedMatch) {
      resolved.push(checkedMatch[1].trim());
      continue;
    }
    if (UNCHECKED_ITEM_PATTERN.test(lines[i])) {
      unresolvedCount++;
    }
  }
  return { resolved, unresolvedCount };
}

/**
 * バグ修正セクションについて、ブランチ側で未解消項目が0件になっており、かつ
 * origin/mainにはまだ記録されていない解消済み項目がある場合、お知らせ用の
 * 情報を返す。該当しなければ null。
 * @returns {{ title: string, note: string, resolvedItems: string[] } | null}
 */
export function getBugfixResolutionNews() {
  const branch = extractBugfixSection(getBranchRoadmap());
  if (branch.unresolvedCount > 0 || branch.resolved.length === 0) return null;

  const main = extractBugfixSection(getMainRoadmap());
  const mainResolvedSet = new Set(main.resolved);
  const newlyResolved = branch.resolved.filter((item) => !mainResolvedSet.has(item));
  if (newlyResolved.length === 0) return null;

  return {
    title: "不具合修正",
    note: "学院内の一部設備に不具合が見つかり、修繕いたしました。",
    resolvedItems: branch.resolved
  };
}

/**
 * 指定したページ完了イベントが、既に news (data/news.json の内容) に
 * 記録済みかどうかを判定する。ページ番号だけでなく紹介文(note)も一致する
 * 場合のみ「記録済み」とみなす。これにより、一度完了したページが再オープン
 * されて別の紹介文で再完了した場合には、新しいお知らせとして追記できる
 * (同じ番号でも紹介文が変われば別イベント扱い)。
 * @param {any[]} news
 * @param {{number: string, introText: string|null}} page
 */
export function isPageAlreadyRecorded(news, page) {
  const note = page.introText || null;
  return news.some((entry) => String(entry.number) === String(page.number) && entry.note === note);
}

/**
 * 2つの文字列配列を「集合として」比較する(要素の並び順に依存しない)。
 * バグ解消項目リストのように、抽出順序が保証されないデータどうしの
 * 重複判定(同じ内容が二重に記録されるのを防ぐ)に使う。
 */
export function sameItemSet(a, b) {
  if (a.length !== b.length) return false;
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();
  return sortedA.every((item, i) => item === sortedB[i]);
}
