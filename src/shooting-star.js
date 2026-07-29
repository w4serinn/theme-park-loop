// P7(docs/ARG-DESIGN.md 4-1節)の謎解き到達先ページ。記録帳(final-entry.html)
// に書き足された座標(星座番号-文字数)を、P3(starmap-fragments.html)の
// 魔導88星座と突き合わせて解読すると読み「ながれぼし」になり、そこから
// 連想される単語「流れ星」を検索窓に入力して初めてこのページへたどり着ける
// (prereqによるゲーティング・exactMatchによる完全一致判定、
// src/search-data.js参照)。訪問記録(「学院の秘密」)はsrc/codex-progress.jsの
// data-page-path経由で自動記録されるが、断片(F2「記帳の断片」)の獲得はこの
// ページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F2', 'glossary/shooting-star.html');
}());
