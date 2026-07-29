// P5(docs/ARG-DESIGN.md 4-1節)の謎解き到達先ページ。手記(apprentice-notes.html)
// に刻まれた記号をP2(perpetual-motion.html)の記譜法(1記号=1アルファベット)で
// 解読すると読み「haguruma」になり、そこから連想される単語「歯車」を検索窓に
// 入力して初めてこのページへたどり着ける(prereqによるゲーティング・exactMatch
// による完全一致判定、src/search-data.js参照)。訪問記録
// (「学院の秘密」)はsrc/codex-progress.jsのdata-page-path経由で自動記録されるが、
// 断片(F1「刻の断片」)の獲得はこのページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F1', 'glossary/gear-cipher.html');
}());
