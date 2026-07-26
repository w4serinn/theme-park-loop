// scripts/update-news.js
//
// GitHub Actions専用スクリプト。
// origin/main と比較して新たに完了したページ・新たに解消されたバグを検出し、
// data/news.json に追記する。
//
// 重要: data/news.json はこのスクリプト(CI)が自動更新するファイルであり、
// evolveループが直接編集してはならない(evolve/SKILL.md参照)。
// 冪等性のため、既に記録済みの内容(ページ番号+紹介文、またはバグ解消内容)は
// 重複して追記しない(ワークフローが同じ内容で再実行されても安全)。
// ただしページ番号が同じでも紹介文が変わっていれば「再完了」による新しい
// お知らせとして追記する(ページが再オープンされ、別の内容で再完了した場合)。
// バグ解消は同じ日付に複数回検出されても、1日1エントリに統合する
// (同じ文言のお知らせが日付違いの番号で何件も並ぶのを防ぐため)。

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { getNewlyCompletedPages, getBugfixResolutionNews, isPageAlreadyRecorded } from "./roadmap-utils.js";

const NEWS_PATH = "data/news.json";

function loadNews() {
  if (!existsSync(NEWS_PATH)) return [];
  try {
    const parsed = JSON.parse(readFileSync(NEWS_PATH, "utf-8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

const newlyCompleted = getNewlyCompletedPages();
const news = loadNews();
const toAdd = newlyCompleted.filter((page) => !isPageAlreadyRecorded(news, page));

const date = todayISO();
for (const { number, title, introText } of toAdd) {
  news.push({ date, number, title, note: introText || null });
}

const bugfixNews = getBugfixResolutionNews();
let bugfixChanged = false;
if (bugfixNews) {
  const todayBugfixEntry = news.find((entry) => entry.type === "bugfix" && entry.number === `bugfix-${date}`);
  if (todayBugfixEntry) {
    const existingItems = new Set(todayBugfixEntry.items || []);
    const newItems = bugfixNews.resolvedItems.filter((item) => !existingItems.has(item));
    if (newItems.length > 0) {
      todayBugfixEntry.items = [...(todayBugfixEntry.items || []), ...newItems];
      bugfixChanged = true;
    }
  } else {
    news.push({
      date,
      number: `bugfix-${date}`,
      title: bugfixNews.title,
      note: bugfixNews.note,
      type: "bugfix",
      items: bugfixNews.resolvedItems
    });
    bugfixChanged = true;
  }
}

if (toAdd.length === 0 && !bugfixChanged) {
  console.log("追記対象はありません(対象なし、または既に記録済み)");
  process.exit(0);
}

writeFileSync(NEWS_PATH, JSON.stringify(news, null, 2) + "\n", "utf-8");
const addedLabels = [...toAdd.map((p) => p.title), ...(bugfixChanged ? [bugfixNews.title] : [])];
console.log(`data/news.json に${addedLabels.length}件追記しました: ${addedLabels.join(", ")}`);
