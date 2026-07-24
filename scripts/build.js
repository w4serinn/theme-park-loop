// scripts/build.js
//
// pages/ 以下の各HTML(<!-- HEADER --> / <!-- FOOTER --> のプレースホルダーを含む)に
// partials/header.html と partials/footer.html を合体させ、
// dist/ に完成品HTMLを出力するビルドスクリプト。
// styles/ と assets/ も dist/ にコピーする(デプロイ先はdist/単体で配信されるため)。
//
// {{BASE}} プレースホルダーについて:
// ページ内のスタイルシート・内部リンク・画像パスなどは、先頭が "/" の絶対パスではなく
// "{{BASE}}" を前置した相対パスで書くこと(例: <link href="{{BASE}}styles/tokens.css">)。
// このビルドスクリプトが、そのページの pages/ からの深さに応じて {{BASE}} を
// 適切な相対パス("" または "../" など)に変換する。これにより、ローカルでdist/を直接
// 開く場合と、GitHub Pagesのようにサブパス配下で公開される場合の両方で、
// リンク・画像・スタイルシートが正しく解決される。
//
// 使い方: npm run build

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  statSync,
  cpSync,
  existsSync
} from "node:fs";
import { join, dirname, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { newsEntryLabel } from "./news-render.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PAGES_DIR = join(ROOT, "pages");
const PARTIALS_DIR = join(ROOT, "partials");
const DIST_DIR = join(ROOT, "dist");
const STYLES_DIR = join(ROOT, "styles");
const ASSETS_DIR = join(ROOT, "assets");
const NEWS_PATH = join(ROOT, "data", "news.json");

const header = readFileSync(join(PARTIALS_DIR, "header.html"), "utf-8");
const footer = readFileSync(join(PARTIALS_DIR, "footer.html"), "utf-8");

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function loadNews() {
  if (!existsSync(NEWS_PATH)) return [];
  try {
    const parsed = JSON.parse(readFileSync(NEWS_PATH, "utf-8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function renderNewsHtml() {
  const news = loadNews();
  if (news.length === 0) {
    return '<p class="news-empty">まだ更新履歴はありません。</p>';
  }
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const items = sorted
    .slice(0, 10)
    .map((entry) => {
      const label = escapeHtml(newsEntryLabel(entry));
      return `  <li><span class="news-date">${escapeHtml(entry.date)}</span> ${label}</li>`;
    })
    .join("\n");
  return `<ul class="news-list">\n${items}\n</ul>`;
}

function depthFromPagesRoot(absPath) {
  const rel = relative(PAGES_DIR, dirname(absPath));
  if (rel === "") return 0;
  return rel.split(sep).length;
}

function buildFile(absPath) {
  const relPath = relative(PAGES_DIR, absPath);
  const src = readFileSync(absPath, "utf-8");

  if (!src.includes("<!-- HEADER -->") || !src.includes("<!-- FOOTER -->")) {
    throw new Error(
      `${relPath}: <!-- HEADER --> または <!-- FOOTER --> のプレースホルダーが見つかりません`
    );
  }

  let merged = src.replace("<!-- HEADER -->", header).replace("<!-- FOOTER -->", footer);

  // <!-- NEWS --> があれば、data/news.json の内容をHTMLに変換して差し込む。
  // プレースホルダーが無いページ(トップページ以外の大半)には何も影響しない。
  if (merged.includes("<!-- NEWS -->")) {
    merged = merged.replace("<!-- NEWS -->", renderNewsHtml());
  }

  // {{BASE}} を、このページの深さに応じた相対パスの接頭辞に変換する。
  // 深さ0(pages/index.html) -> ""
  // 深さ1(pages/exploration/index.html) -> "../"
  const depth = depthFromPagesRoot(absPath);
  const basePrefix = "../".repeat(depth);
  merged = merged.split("{{BASE}}").join(basePrefix);

  const outPath = join(DIST_DIR, relPath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, merged, "utf-8");
  console.log(`built: ${relPath}`);
}

function walkPages(currentDir) {
  for (const entry of readdirSync(currentDir)) {
    const fullPath = join(currentDir, entry);
    if (statSync(fullPath).isDirectory()) {
      walkPages(fullPath);
    } else if (entry.endsWith(".html")) {
      buildFile(fullPath);
    }
  }
}

mkdirSync(DIST_DIR, { recursive: true });
walkPages(PAGES_DIR);

// styles/ と assets/ を dist/ にコピーする(存在する場合のみ)。
// dist/ は単体でデプロイされるため、参照される静的ファイルも一緒に含める必要がある。
for (const [srcDir, name] of [
  [STYLES_DIR, "styles"],
  [ASSETS_DIR, "assets"]
]) {
  if (existsSync(srcDir)) {
    cpSync(srcDir, join(DIST_DIR, name), { recursive: true });
    console.log(`copied: ${name}/`);
  }
}

console.log("ビルド完了 → dist/");
