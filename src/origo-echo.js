// P91(docs/ARG-DESIGN.md 4-3節)の謎解き到達先ページ。nostion-memory.htmlの
// 3つの候補名(MEMORIA/VERITAS/ORIGO)のうち、本文中の矛盾から2つを消去し、
// 残った「ORIGO」を検索窓に入力して初めてこのページへたどり着ける
// (prereqによるゲーティング・exactMatchによる完全一致判定、src/search-data.js
// 参照)。訪問記録(「学院の秘密」)はsrc/codex-progress.jsのdata-page-path経由で
// 自動記録されるが、断片(F13「本心の断片」)の獲得はこのページ固有のアクション
// として別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F13', 'glossary/origo-echo.html');
}());
