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
    note: `サイトの不具合を修正しました(${newlyResolved.length}件)。`,
    resolvedItems: branch.resolved
  };
}
