// scripts/roadmap-utils.js
//
// docs/ROADMAP.md のページ見出しおよびバグ修正セクションをパースし、origin/main と
// 比較して新たに完了したページ・解消されたバグを検出するための共通ロジック。
// scripts/check-roadmap-completion.js と scripts/update-news.js の両方から使う。

import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";

const HEADING_PATTERN = /^###\s*(\d+)\.\s*(.+?)\s*\[status:\s*([^\]]+)\]/;
const INTRO_PATTERN = /^>\s*紹介文[:：]\s*(.+)$/;
const BUGFIX_NOTE_PATTERN = /^>\s*お知らせ[:：]\s*(.+)$/;
const BUGFIX_SECTION_HEADING = /^##\s*バグ修正/;
const SECTION_HEADING = /^##\s/;
const CHECKED_ITEM_PATTERN = /^-\s*\[x\]\s*\([SML]\)\s*(.+)$/i;
const UNCHECKED_ITEM_PATTERN = /^-\s*\[ \]\s*\([SML]\)\s*(.+)$/i;
const NEW_BLOCK_PATTERN = /^-\s*\[[ x]\]/i;

/**
 * `> 紹介文: ...` / `> お知らせ: ...` のように、evolveループが2行以上に
 * 折り返して書く一文を1つに連結する(2026-07-29 ユーザー報告の不具合修正:
 * 従来は最初の1行しか読み取っておらず、2行目以降が黙って切り捨てられ、
 * data/news.json のnoteが文の途中で途切れていた)。継続行は次の行が
 * 空行・見出し(`#`)・新しい箇条書き項目(`- [ ]`/`- [x]`)のいずれかに
 * 当たるまで読み進める。継続行の先頭に`>`が付いていても付いていなくても
 * (このリポジトリでは両方の書き方が混在する)対応できるよう、連結時に
 * 先頭の`>`があれば取り除く。
 * 注意: バグ修正項目(`- [x] (S) ...`)の説明文には適用しない。あちらは
 * 1行目だけを識別子として使う設計であり(origin/mainとの重複判定に使う
 * 安定したキーが必要)、複数行を連結すると些細な文言の揺れで
 * 「新たに解消された」と誤検出しかねないため、意図的に1行目のみを見る。
 * @returns {{ text: string, nextIndex: number }}
 */
function collectWrappedLine(lines, firstLineIndex, endIndex, firstLineText) {
  let text = firstLineText;
  let next = firstLineIndex + 1;
  while (next < endIndex) {
    const trimmed = lines[next].trim();
    if (trimmed === "") break;
    if (SECTION_HEADING.test(trimmed) || HEADING_PATTERN.test(trimmed)) break;
    if (NEW_BLOCK_PATTERN.test(trimmed)) break;
    text += trimmed.replace(/^>\s*/, "");
    next++;
  }
  return { text, nextIndex: next };
}

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
      if (introMatch) {
        introText = collectWrappedLine(lines, j, lines.length, introMatch[1].trim()).text;
      }
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
 * `## バグ修正` セクションを解析し、解消済み(`- [x]`)項目の一覧・
 * 未解消(`- [ ]`)項目の件数・お知らせ文(あれば)を返す。項目は複数行に
 * 渡ってよいが、識別には各項目の1行目(チェックボックス直後の説明文)だけを使う。
 * お知らせ文は見出し直後(空行を挟んでもよい)に `> お知らせ: ...` という行が
 * あればその本文で、evolveループがバグを解消しきったサイクルで世界観に沿って
 * 書く(docs/ROADMAP.mdのページ紹介文と同じ仕組み)。無ければ null になる。
 * @returns {{ resolved: string[], unresolvedCount: number, note: string|null }}
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
  if (start === -1) return { resolved: [], unresolvedCount: 0, note: null };

  let end = lines.length;
  for (let i = start; i < lines.length; i++) {
    if (SECTION_HEADING.test(lines[i])) {
      end = i;
      break;
    }
  }

  let note = null;
  for (let j = start; j < end; j++) {
    const trimmed = lines[j].trim();
    if (trimmed === "") continue;
    const noteMatch = BUGFIX_NOTE_PATTERN.exec(trimmed);
    if (noteMatch) {
      note = collectWrappedLine(lines, j, end, noteMatch[1].trim()).text;
    }
    break; // 空行以外の最初の行だけを見る(サブタスク行ならお知らせ文は無い)
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
  return { resolved, unresolvedCount, note };
}

/**
 * バグ修正セクションについて、ブランチ側で未解消項目が0件になっており、かつ
 * origin/mainにはまだ記録されていない解消済み項目がある場合、お知らせ用の
 * 情報を返す。該当しなければ null。
 * note は `docs/ROADMAP.md` の `> お知らせ: ...` 行から取る(evolveループが
 * その都度、世界観に沿って書く)。書き忘れられていた場合のみ機械的な
 * 一文にフォールバックする(ページ紹介文の仕組みと同様)。
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
    note: branch.note || "学院内の一部設備に不具合が見つかり、修繕いたしました。",
    resolvedItems: newlyResolved
  };
}

/**
 * data/news.json の配列(news、破壊的に更新する)へ、バグ解消のお知らせを
 * 追記または更新する。同じ日付の`bugfix-YYYY-MM-DD`エントリが既にあれば、
 * 未記録のitemsだけを追記し、noteも常に最新の文言で上書きする(2026-07-29
 * ユーザー報告の不具合修正: 従来はnoteを追記時に更新しておらず、同じ日に
 * 複数回バグ解消が検出されると、その日最初の解消時点のお知らせ文が
 * 固定表示され続けていた)。エントリが無ければ新規追加する。
 * @param {any[]} news 破壊的に更新される
 * @param {{ title: string, note: string, resolvedItems: string[] }} bugfixNews
 * @param {string} date YYYY-MM-DD
 * @returns {boolean} newsを変更したか
 */
export function upsertBugfixNewsEntry(news, bugfixNews, date) {
  const todayBugfixEntry = news.find((entry) => entry.type === "bugfix" && entry.number === `bugfix-${date}`);
  if (todayBugfixEntry) {
    const existingItems = new Set(todayBugfixEntry.items || []);
    const newItems = bugfixNews.resolvedItems.filter((item) => !existingItems.has(item));
    if (newItems.length === 0) return false;
    todayBugfixEntry.items = [...(todayBugfixEntry.items || []), ...newItems];
    todayBugfixEntry.note = bugfixNews.note;
    return true;
  }
  news.push({
    date,
    number: `bugfix-${date}`,
    title: bugfixNews.title,
    note: bugfixNews.note,
    type: "bugfix",
    items: bugfixNews.resolvedItems
  });
  return true;
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

