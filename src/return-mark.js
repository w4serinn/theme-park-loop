// P7(docs/ARG-DESIGN.md 4-1節)の謎解き到達先ページ。記録帳(final-entry.html)
// の余白に書き足された符牒を解読し、検索窓に「もどりば」と入力して初めて
// このページへたどり着ける(prereqによるゲーティング、src/search-data.js参照)。
// 訪問記録(「学院の秘密」)はsrc/codex-progress.jsのdata-page-path経由で自動
// 記録されるが、断片(F2「記帳の断片」)の獲得はこのページ固有のアクションとして
// 別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F2', 'glossary/return-mark.html');
}());
