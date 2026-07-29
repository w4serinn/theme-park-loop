// ヒントの手引きページ(docs/ROADMAP.md「### 13」謎解きヒント専用ページ参照)。
// window.HINT_DATAのうち、requiresPageを「学院の秘密」(訪問済み隠しページ)に
// 持っているものだけを表示する。ロジックはsrc/logic.jsのfilterUnlockedHintsと
// 同じ(DOM操作と混在させない方針のため、ここでは同じ判定をインラインで持つ)。
(function () {
  var listEl = document.getElementById('hint-book-list');
  var emptyEl = document.getElementById('hint-book-empty');
  var root = document.querySelector('.hint-book');
  if (!listEl || !emptyEl || !root || !window.HINT_DATA || !window.CodexProgress) { return; }

  // P91(docs/ARG-DESIGN.md 4-3節)の自己言及ページはSEARCH_INDEXには登録されて
  // いない(src/search.jsのSELF_REFERENCE_ENTRYと同じ理由)。ヒントの見出しで
  // このページを参照する場合のために、ここでも同じタイトルを複製しておく。
  var SELF_REFERENCE_ENTRY = { path: 'glossary/nostion-memory.html', title: '最初の記憶' };

  // requiresPageは文字列またはstring[](OR判定。2026-07-29 ヒント対象拡大、
  // src/logic.jsのfilterUnlockedHintsと同じロジック)。
  function filterUnlockedHints(hintData, visitedPaths) {
    return hintData.filter(function (entry) {
      var required = Array.isArray(entry.requiresPage) ? entry.requiresPage : [entry.requiresPage];
      return required.some(function (p) { return visitedPaths.indexOf(p) !== -1; });
    });
  }

  // ヒントの見出しを、断片の個別名(先読みでネタバレになる)ではなく、手がかりが
  // あるページ自体のタイトルにする(2026-07-29 ユーザー指摘。src/logic.jsの
  // resolveHintPageTitleと同じロジック)。pathが配列の場合は両方のタイトルを
  // 「 / 」でつなぐ。
  function findPageTitle(path) {
    var all = (window.SEARCH_INDEX || []).concat([SELF_REFERENCE_ENTRY]);
    var paths = Array.isArray(path) ? path : [path];
    var titles = paths.map(function (p) {
      var match = all.filter(function (e) { return e.path === p; })[0];
      return match ? match.title : p;
    });
    return titles.join(' / ');
  }

  function render() {
    var visitedPaths = window.CodexProgress.load().secrets;
    var unlocked = filterUnlockedHints(window.HINT_DATA, visitedPaths);

    listEl.innerHTML = '';
    emptyEl.hidden = unlocked.length > 0;

    unlocked.forEach(function (entry) {
      var li = document.createElement('li');
      li.className = 'hint-book__entry';

      var details = document.createElement('details');
      details.className = 'hint-book__entry-toggle';

      var summary = document.createElement('summary');
      summary.className = 'hint-book__entry-label';
      summary.textContent = findPageTitle(entry.requiresPage);

      var text = document.createElement('p');
      text.className = 'hint-book__entry-text';
      text.textContent = entry.hint;

      details.appendChild(summary);
      details.appendChild(text);
      li.appendChild(details);
      listEl.appendChild(li);
    });
  }

  render();

  // bfcache復元後も最新の進捗を反映する(docs/roadmap-done.mdの既知パターンに合わせる)。
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) { render(); }
  });
}());
