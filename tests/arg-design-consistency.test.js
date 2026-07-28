// docs/ARG-DESIGN.md(隠しページ群の接続図)の整合性を機械的に検証するテスト。
//
// 1. status列に「実装済み(`path`)」と書かれた実ファイルパスが、実際にディスク上に
//    存在すること(パスの記載ミス・削除の見落としを検出する)。
// 2. 表のどこかのセルで参照されているP番号/PGATE/PFINALが、表のどこかの行として
//    実在すること(タイプミスや存在しない番号への参照を検出する)。
// 3. 「必要な断片」欄に断片IDが書かれている行がstatus「実装済み」になっている場合、
//    その断片を「産出する断片」欄に持つ行もstatus「実装済み」であること
//    (依存関係を無視した実装順序を検出する。docs/ARG-DESIGN.md 5節「実装順序」参照)。

import { describe, it, expect } from "vitest";
import {
  getArgDesign,
  extractIdGraph,
  extractImplementedPaths,
  extractFragmentDependencies,
  fileExists
} from "../scripts/arg-design-utils.js";

const markdown = getArgDesign();

describe("ARG-DESIGN.md の整合性", () => {
  describe("実装済みファイルパスの実在確認", () => {
    const paths = extractImplementedPaths(markdown);

    it("実装済みとして記載されたパスが1件以上ある", () => {
      expect(paths.length).toBeGreaterThan(0);
    });

    for (const { path, rowId } of paths) {
      it(`${rowId}: ${path} が実在する`, () => {
        expect(fileExists(path)).toBe(true);
      });
    }
  });

  describe("P番号の参照整合性", () => {
    const { definedIds, referencedIds } = extractIdGraph(markdown);

    it("定義されているIDが1件以上ある", () => {
      expect(definedIds.size).toBeGreaterThan(0);
    });

    it("参照されているP番号は、すべてどこかの行として定義されている", () => {
      const missing = [...referencedIds].filter((id) => !definedIds.has(id));
      expect(missing).toEqual([]);
    });
  });

  describe("断片の依存順序", () => {
    const { producedBy, requiredBy, statusByRow } = extractFragmentDependencies(markdown);

    function isImplemented(status) {
      return typeof status === "string" && status.startsWith("実装済み");
    }

    for (const [rowId, requiredFragments] of requiredBy) {
      for (const fragmentId of requiredFragments) {
        const producerRow = producedBy.get(fragmentId);

        it(`${rowId}が必要とする${fragmentId}の産出元(${producerRow ?? "不明"})が先に実装されている`, () => {
          expect(producerRow, `${fragmentId}を産出する行が見つからない`).toBeDefined();
          if (isImplemented(statusByRow.get(rowId))) {
            expect(isImplemented(statusByRow.get(producerRow))).toBe(true);
          }
        });
      }
    }
  });
});
