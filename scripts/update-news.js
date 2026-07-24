// scripts/update-news.js
//
// GitHub Actions専用スクリプト。
// origin/main と比較して新たに完了したページを検出し、data/news.json に追記する。
//
// 重要: data/news.json はこのスクリプト(CI)が自動更新するファイルであり、
// evolveループが直接編集してはならない(evolve/SKILL.md参照)。
// 冪等性のため、既に記録済みのページ番号は重複して追記しない
// (ワークフローが同じ内容で再実行されても安全)。

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { getNewlyCompletedPages } from "./roadmap-utils.js";

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
const existingNumbers = new Set(news.map((entry) => String(entry.number)));
const toAdd = newlyCompleted.filter((page) => !existingNumbers.has(String(page.number)));

if (toAdd.length === 0) {
  console.log("追記対象のページはありません(対象なし、または既に記録済み)");
  process.exit(0);
}

const date = todayISO();
for (const { number, title, introText } of toAdd) {
  news.push({ date, number, title, note: introText || null });
}

writeFileSync(NEWS_PATH, JSON.stringify(news, null, 2) + "\n", "utf-8");
console.log(`data/news.json に${toAdd.length}件追記しました: ${toAdd.map((p) => p.title).join(", ")}`);
