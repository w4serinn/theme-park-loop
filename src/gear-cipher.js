// P5(docs/ARG-DESIGN.md 4-1節)の謎解き到達先ページ。手記(apprentice-notes.html)
// に刻まれた符丁を解読し、検索窓に「はぐるま」と入力して初めてこのページへ
// たどり着ける(prereqによるゲーティング、src/search-data.js参照)。訪問記録
// (「学院の秘密」)はsrc/codex-progress.jsのdata-page-path経由で自動記録されるが、
// 断片(F1「刻の断片」)の獲得はこのページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F1', 'glossary/gear-cipher.html');
}());
