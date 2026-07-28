// P91(docs/ARG-DESIGN.md 4-3節)の到達先ページ。訪問記録(「学院の秘密」)は
// src/codex-progress.js のdata-page-path経由で自動記録されるが、断片
// (F13「本心の断片」)の獲得はこのページ固有のアクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F13', 'glossary/nostion-memory.html');
}());
