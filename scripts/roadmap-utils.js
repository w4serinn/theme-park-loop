// scripts/roadmap-utils.js
//
// docs/ROADMAP.md のページ見出しをパースし、origin/main と比較して
// 新たに完了したページを検出するための共通ロジック。
// scripts/check-roadmap-completion.js と scripts/update-news.js の両方から使う。

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const HEADING_PATTERN = /^###\s*(\d+)\.\s*(.+?)\s*\[status:\s*([^\]]+)\]/;
const INTRO_PATTERN = /^>\s*紹介文[:：]\s*(.+)$/;

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
