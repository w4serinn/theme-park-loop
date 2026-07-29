// P91(docs/ARG-DESIGN.md 4-3節)の謎解き到達先ページ。nostion-memory.htmlの
// 3つの候補名(はじまりの書/みちしるべ/よりしろ)のうち、本文中の矛盾から
// 2つを消去し、残った「よりしろ」を検索窓に入力して初めてこのページへ
// たどり着ける(prereqによるゲーティング・exactMatchによる完全一致判定、
// src/search-data.js参照)。訪問記録(「学院の秘密」)はsrc/codex-progress.jsの
// data-page-path経由で自動記録されるが、断片(F13「本心の断片」)の獲得はこの
// ページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F13', 'glossary/yorishiro-echo.html');
}());
