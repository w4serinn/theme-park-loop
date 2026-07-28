// P5(docs/ARG-DESIGN.md 4-1節)の到達先ページ。訪問記録(「学院の秘密」)は
// src/codex-progress.js のdata-page-path経由で自動記録されるが、断片
// (F1「刻の断片」)の獲得はこのページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F1', 'glossary/apprentice-notes.html');
}());
