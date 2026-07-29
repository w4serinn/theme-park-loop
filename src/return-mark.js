// P7(docs/ARG-DESIGN.md 4-1節)の謎解き到達先ページ。記録帳(final-entry.html)
// の余白に書き足された印を、P6(first-astronomer.html)の観測日誌の書き出し4行と
// 突き合わせて解読し、検索窓に「もどりば」と入力して初めてこのページへ
// たどり着ける(prereqによるゲーティング・exactMatchによる完全一致判定、
// src/search-data.js参照)。訪問記録(「学院の秘密」)はsrc/codex-progress.jsの
// data-page-path経由で自動記録されるが、断片(F2「記帳の断片」)の獲得はこの
// ページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F2', 'glossary/return-mark.html');
}());
