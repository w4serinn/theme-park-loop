(function () {
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  var statusEl = document.getElementById('search-status');
  var root = document.querySelector('.search-content');
  if (!input || !resultsEl || !statusEl || !root || !window.SEARCH_INDEX) { return; }

  var base = root.getAttribute('data-base') || '';

  function filterIndex(query, index) {
    var q = (query || '').trim().toLowerCase();
    if (!q) { return []; }
    return index.filter(function (entry) {
      var keywords = entry.keywords || [];
      var haystack = (entry.title + ' ' + entry.category + ' ' + keywords.join(' ')).toLowerCase();
      return haystack.indexOf(q) !== -1;
    });
  }

  // 検索ゲーティング(docs/ARG-DESIGN.md 2-3節): entry.prereqが設定されている場合、
  // 「学院の秘密」(訪問済み隠しページ)にそのうちどれか1つでも含まれていない限り、
  // 単語が一致していても検索結果には出さない。CodexProgressが読み込まれていない
  // ページでは、ゲーティングせず常に表示する(通常ページ側のフォールバック)。
  function isUnlocked(entry) {
    if (!entry.prereq) { return true; }
    if (!window.CodexProgress) { return true; }
    var secrets = window.CodexProgress.load().secrets;
    return entry.prereq.some(function (p) { return secrets.indexOf(p) !== -1; });
  }

  function render(query) {
    var results = filterIndex(query, window.SEARCH_INDEX).filter(isUnlocked);
    resultsEl.innerHTML = '';

    if (!query.trim()) {
      statusEl.textContent = '';
      return;
    }

    if (results.length === 0) {
      statusEl.textContent = '「' + query + '」に一致するページが見つかりませんでした。';
      return;
    }

    statusEl.textContent = results.length + '件のページが見つかりました。';

    results.forEach(function (entry) {
      var li = document.createElement('li');
      li.className = 'search-result';

      var a = document.createElement('a');
      a.className = 'search-result__link';
      a.href = base + entry.path;

      var category = document.createElement('span');
      category.className = 'search-result__category';
      category.textContent = entry.category;

      var title = document.createElement('span');
      title.className = 'search-result__title';
      title.textContent = entry.title;

      a.appendChild(category);
      a.appendChild(title);

      if (entry.hidden) {
        var badge = document.createElement('span');
        badge.className = 'search-result__badge';
        badge.textContent = '✦ 発見';
        a.appendChild(badge);
      }

      li.appendChild(a);
      resultsEl.appendChild(li);
    });
  }

  input.addEventListener('input', function () {
    render(input.value);
  });
}());
