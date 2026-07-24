// scripts/build.js
//
// pages/ 以下の各HTML(<!-- HEADER --> / <!-- FOOTER --> のプレースホルダーを含む)に
// partials/header.html と partials/footer.html を合体させ、
// dist/ に完成品HTMLを出力するビルドスクリプト。
//
// 使い方: npm run build

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PAGES_DIR = join(ROOT, "pages");
const PARTIALS_DIR = join(ROOT, "partials");
const DIST_DIR = join(ROOT, "dist");

const header = readFileSync(join(PARTIALS_DIR, "header.html"), "utf-8");
const footer = readFileSync(join(PARTIALS_DIR, "footer.html"), "utf-8");

function buildFile(absPath) {
  const relPath = relative(PAGES_DIR, absPath);
  const src = readFileSync(absPath, "utf-8");

  if (!src.includes("<!-- HEADER -->") || !src.includes("<!-- FOOTER -->")) {
    throw new Error(
      `${relPath}: <!-- HEADER --> または <!-- FOOTER --> のプレースホルダーが見つかりません`
    );
  }

  const merged = src.replace("<!-- HEADER -->", header).replace("<!-- FOOTER -->", footer);

  const outPath = join(DIST_DIR, relPath);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, merged, "utf-8");
  console.log(`built: ${relPath}`);
}

function walk(currentDir) {
  for (const entry of readdirSync(currentDir)) {
    const fullPath = join(currentDir, entry);
    if (statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (entry.endsWith(".html")) {
      buildFile(fullPath);
    }
  }
}

mkdirSync(DIST_DIR, { recursive: true });
walk(PAGES_DIR);
console.log("ビルド完了 → dist/");
