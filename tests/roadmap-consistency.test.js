// docs/ROADMAP.md の運用ルールを機械的に検証するテスト。
//
// evolve/SKILL.md には以下の2つの運用ルールがあるが、プロンプト指示だけに頼ると
// 実際に守られているか分からなくなる(過去に何サイクルも見落とされていた実績あり)。
// このテストで、コミット前に確実に検出できるようにする。
//
// 1. サブタスクを [x] にした時点で、その行は docs/roadmap-done.md へ退避する運用
//    のため、docs/ROADMAP.md の番号付きページセクション内に [x] 行が残っていては
//    ならない(バグ修正セクションは対象外。バグ解消の検出・お知らせ生成に
//    [x] 行そのものを使うため、あえてその場に残す設計になっている)。
// 2. status は「そのページに未完了([ ])サブタスクが無いか」と一致していること。
//    - status: 完了 なのに [ ] が残っている → 完了ラベルが不正確
//    - status: 進行中 なのに [ ] が1つも無い → 進行中のまま放置されている
//      (本来は完了に戻すべきタイミングを見落としている)

import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { extractPageSubtaskCounts } from "../scripts/roadmap-utils.js";

const roadmap = readFileSync("docs/ROADMAP.md", "utf-8");
const pages = extractPageSubtaskCounts(roadmap);

describe("ROADMAP.md の完了サブタスク退避・status整合性", () => {
  it("ROADMAP.mdには番号付きページが1つ以上ある", () => {
    expect(pages.size).toBeGreaterThan(0);
  });

  for (const [number, page] of pages) {
    describe(`${number}. ${page.title}`, () => {
      it("完了済み([x])サブタスクが docs/roadmap-done.md へ退避されている(残っていない)", () => {
        expect(page.checkedCount).toBe(0);
      });

      if (page.status === "完了") {
        it("status: 完了 なら未完了([ ])サブタスクが残っていない", () => {
          expect(page.uncheckedCount).toBe(0);
        });
      }

      if (page.status === "進行中") {
        it("status: 進行中 なら未完了([ ])サブタスクが1件以上ある", () => {
          expect(page.uncheckedCount).toBeGreaterThan(0);
        });
      }
    });
  }
});
