// ヒントの手引きページ(docs/ROADMAP.md「### 13」謎解きヒント専用ページ参照)。
// window.HINT_DATAのうち、requiresPageを「学院の秘密」(訪問済み隠しページ)に
// 持っているものだけを表示する。ロジックはsrc/logic.jsのfilterUnlockedHintsと
// 同じ(DOM操作と混在させない方針のため、ここでは同じ判定をインラインで持つ)。
(function () {
  var listEl = document.getElementById('hint-book-list');
  var emptyEl = document.getElementById('hint-book-empty');
  var root = document.querySelector('.hint-book');
  if (!listEl || !emptyEl || !root || !window.HINT_DATA || !window.CodexProgress) { return; }

  function filterUnlockedHints(hintData, visitedPaths) {
    return hintData.filter(function (entry) {
      return visitedPaths.indexOf(entry.requiresPage) !== -1;
    });
  }

  function render() {
    var visitedPaths = window.CodexProgress.load().secrets;
    var unlocked = filterUnlockedHints(window.HINT_DATA, visitedPaths);
    var names = window.FRAGMENT_NAMES || {};

    listEl.innerHTML = '';
    emptyEl.hidden = unlocked.length > 0;

    unlocked.forEach(function (entry) {
      var li = document.createElement('li');
      li.className = 'hint-book__entry';

      var label = document.createElement('p');
      label.className = 'hint-book__entry-label';
      label.textContent = names[entry.id] || entry.id;

      var text = document.createElement('p');
      text.className = 'hint-book__entry-text';
      text.textContent = entry.hint;

      li.appendChild(label);
      li.appendChild(text);
      listEl.appendChild(li);
    });
  }

  render();

  // bfcache復元後も最新の進捗を反映する(docs/roadmap-done.mdの既知パターンに合わせる)。
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) { render(); }
  });
}());
