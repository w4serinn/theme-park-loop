// GitHub Actions専用スクリプト。
//
// 現在のブランチの docs/ROADMAP.md と、origin/main の docs/ROADMAP.md を比較し、
// 新たに [status: 完了] になったページ、または新たに解消されたバグがあるかを判定する。
// 結果は GITHUB_OUTPUT に `should_merge=true` または `should_merge=false` として書き出す。
//
// 見出し行のフォーマット(evolve/SKILL.mdおよびROADMAP.mdの取り決めに準拠):
//   ### <番号>. <ページ名> [status: <状態>]
// 「0. 共通パーツ」のようなページに紐づかないタスクも同じ見出し形式なので、
// 特別扱いせず同じロジックで検出できる。
//
// パース処理そのものは scripts/roadmap-utils.js に集約し、
// scripts/update-news.js と実装を共有する(判定基準がずれないようにするため)。

import { appendFileSync } from "node:fs";
import { getNewlyCompletedPages, getBugfixResolutionNews } from "./roadmap-utils.js";

const newlyCompletedPages = getNewlyCompletedPages();
const bugfixNews = getBugfixResolutionNews();

const shouldMerge = newlyCompletedPages.length > 0 || bugfixNews !== null;

const messages = [];
if (newlyCompletedPages.length > 0) {
  messages.push(`新たに完了したページ: ${newlyCompletedPages.map((p) => p.number).join(", ")}`);
}
if (bugfixNews) {
  messages.push(`新たに解消されたバグ: ${bugfixNews.resolvedItems.length}件`);
}
console.log(messages.length > 0 ? messages.join(" / ") : "マージ対象の変化はありません(マージ不要)");

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `should_merge=${shouldMerge}\n`);
}
