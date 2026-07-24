// GitHub Actions専用スクリプト。
//
// 現在のブランチの docs/ROADMAP.md と、origin/main の docs/ROADMAP.md を比較し、
// 新たに [status: 完了] になったページがあるかを判定する。
// 結果は GITHUB_OUTPUT に `should_merge=true` または `should_merge=false` として書き出す。
//
// 見出し行のフォーマット(evolve/SKILL.mdおよびROADMAP.mdの取り決めに準拠):
//   ### <番号>. <ページ名> [status: <状態>]
// 「0. 共通パーツ」のようなページに紐づかないタスクも同じ見出し形式なので、
// 特別扱いせず同じロジックで検出できる。

import { execSync } from "node:child_process";
import { readFileSync, appendFileSync } from "node:fs";

function extractStatuses(markdown) {
  const pattern = /^###\s*(\d+)\..*\[status:\s*([^\]]+)\]/gm;
  const statuses = new Map();
  let match;
  while ((match = pattern.exec(markdown)) !== null) {
    const [, number, status] = match;
    statuses.set(number, status.trim());
  }
  return statuses;
}

function getMainRoadmap() {
  try {
    return execSync("git show origin/main:docs/ROADMAP.md", { encoding: "utf-8" });
  } catch {
    // origin/mainにまだROADMAP.mdが無い場合(初回セットアップ直後など)は空として扱う
    return "";
  }
}

const branchRoadmap = readFileSync("docs/ROADMAP.md", "utf-8");
const mainRoadmap = getMainRoadmap();

const branchStatuses = extractStatuses(branchRoadmap);
const mainStatuses = extractStatuses(mainRoadmap);

const newlyCompleted = [];
for (const [number, status] of branchStatuses) {
  if (status === "完了" && mainStatuses.get(number) !== "完了") {
    newlyCompleted.push(number);
  }
}

const shouldMerge = newlyCompleted.length > 0;

console.log(
  shouldMerge
    ? `新たに完了したページ: ${newlyCompleted.join(", ")}`
    : "新たに完了したページはありません(マージ不要)"
);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `should_merge=${shouldMerge}\n`);
}
