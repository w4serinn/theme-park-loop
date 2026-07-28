// P7(docs/ARG-DESIGN.md 4-1節)の到達先ページ。訪問記録(「学院の秘密」)は
// src/codex-progress.js のdata-page-path経由で自動記録されるが、断片
// (F2「記帳の断片」、中間断片としてP21で使用)の獲得はこのページ固有の
// アクションとして別途記録する。
(function () {
  if (!window.CodexProgress) { return; }
  window.CodexProgress.addFragment('F2', 'glossary/final-entry.html');
}());
