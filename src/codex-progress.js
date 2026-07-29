// ノスティオン(物知りの魔導書、pages/search.html)の記録機能が使う localStorage の
// 読み書き。docs/ARG-DESIGN.md 2-2節参照。DOM操作のみのスクリプトなので、
// 実際の状態更新ロジック(重複追加の防止など)は src/logic.js の
// addSecretToProgress / addFragmentToProgress / markFragmentUsed と同じ内容を
// ここに複製している(file:// でも動くよう ES module import を使わない設計、
// src/search.js と src/search-data.js の関係と同じ)。
//
// 隠しページ(pages/glossary/*.html)側は、以下のように自分のpathを
// data-page-path で宣言してこのスクリプトを読み込むと、訪問時に自動で
// 「学院の秘密」へ記録される:
//   <script src="{{BASE}}src/codex-progress.js" defer
//           data-page-path="glossary/mythical-creatures.html"></script>
(function () {
  var STORAGE_KEY = 'codex-memory';

  function load() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      return {
        secrets: (parsed && parsed.secrets) || [],
        fragments: (parsed && parsed.fragments) || []
      };
    } catch {
      return { secrets: [], fragments: [] };
    }
  }

  function save(progress) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // localStorageが使えない環境(プライベートブラウジング等)では静かに諦める
    }
  }

  function addSecret(path) {
    var progress = load();
    if (progress.secrets.indexOf(path) !== -1) { return progress; }
    progress.secrets = progress.secrets.concat([path]);
    save(progress);
    return progress;
  }

  function addFragment(id, foundAt) {
    var progress = load();
    if (progress.fragments.some(function (f) { return f.id === id; })) { return progress; }
    progress.fragments = progress.fragments.concat([{ id: id, foundAt: foundAt, used: false }]);
    save(progress);
    return progress;
  }

  function markFragmentUsed(id) {
    var progress = load();
    progress.fragments = progress.fragments.map(function (f) {
      return f.id === id ? { id: f.id, foundAt: f.foundAt, used: true } : f;
    });
    save(progress);
    return progress;
  }

  // 開発用デバッグコマンド(2026-07-29 ユーザー提案、src/search.jsの
  // isDebugResetQueryから呼ばれる)。発見履歴を初期状態に戻す。
  function reset() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // localStorageが使えない環境では静かに諦める
    }
  }

  window.CodexProgress = {
    load: load,
    addSecret: addSecret,
    addFragment: addFragment,
    markFragmentUsed: markFragmentUsed,
    reset: reset
  };

  // data-page-path が指定されているscriptタグから読み込まれた場合、
  // 自動でそのページを「学院の秘密」に記録する(隠しページの訪問記録)。
  var currentScript = document.currentScript;
  var pagePath = currentScript && currentScript.getAttribute('data-page-path');
  if (pagePath) {
    addSecret(pagePath);
  }
}());
