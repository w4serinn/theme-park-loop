(function () {
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  var statusEl = document.getElementById('search-status');
  var root = document.querySelector('.search-content');
  if (!input || !resultsEl || !statusEl || !root || !window.SEARCH_INDEX) { return; }

  var base = root.getAttribute('data-base') || '';

  // P91(docs/ARG-DESIGN.md 4-3節): ノスティオン自身への自己言及の達成マーカーと、
  // それによって獲得する断片。「学院の秘密」の配列は本来は隠しページのpathを
  // 保持するためのものだが、この達成も同じ配列に文字列マーカーとして記録し、
  // 「これまでの記録」セクション(下記)の表示解禁条件として流用する。
  var SELF_REFERENCE_SECRET = 'codex-self-reference';
  var SELF_REFERENCE_FRAGMENT_ID = 'F13';

  var memorySection = document.getElementById('codex-memory-section');
  var memorySecretsLabel = document.getElementById('codex-memory-secrets-label');
  var memorySecretsList = document.getElementById('codex-memory-secrets-list');
  var memoryFragmentsList = document.getElementById('codex-memory-fragments-list');

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

  function isCodexSelfReference(query) {
    var q = (query || '').trim();
    if (!q) { return false; }
    return q.indexOf('私') !== -1 || q.indexOf('ノスティオン') !== -1;
  }

  // 「これまでの記録」セクションの表示・内容を、現在のlocalStorageの状態から作る。
  // P91未達成の間は非表示のまま(docs/ARG-DESIGN.md 4-7節)。
  function renderMemorySection() {
    if (!memorySection || !window.CodexProgress) { return; }
    var progress = window.CodexProgress.load();
    var achieved = progress.secrets.indexOf(SELF_REFERENCE_SECRET) !== -1;
    memorySection.hidden = !achieved;
    if (!achieved) { return; }

    var hiddenTotal = window.SEARCH_INDEX.filter(function (e) { return e.hidden; }).length;
    var foundHiddenCount = progress.secrets.filter(function (s) {
      return window.SEARCH_INDEX.some(function (e) { return e.hidden && e.path === s; });
    }).length;
    if (memorySecretsLabel) {
      memorySecretsLabel.textContent = '学院の秘密(' + foundHiddenCount + '/' + hiddenTotal + ')';
    }

    if (memorySecretsList) {
      memorySecretsList.innerHTML = '';
      progress.secrets.forEach(function (path) {
        var entry = window.SEARCH_INDEX.filter(function (e) { return e.hidden && e.path === path; })[0];
        if (!entry) { return; }
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = base + entry.path;
        a.textContent = entry.title;
        li.appendChild(a);
        memorySecretsList.appendChild(li);
      });
    }

    if (memoryFragmentsList) {
      memoryFragmentsList.innerHTML = '';
      var names = window.FRAGMENT_NAMES || {};
      progress.fragments.forEach(function (fragment) {
        var li = document.createElement('li');
        li.textContent = names[fragment.id] || fragment.id;
        if (fragment.used) { li.className = 'codex-memory__fragment--used'; }
        memoryFragmentsList.appendChild(li);
      });
    }
  }

  function renderSelfReferenceResponse() {
    resultsEl.innerHTML = '';
    statusEl.textContent = '';

    var li = document.createElement('li');
    li.className = 'search-result search-result--codex';
    var p = document.createElement('p');
    p.className = 'codex-response';
    p.textContent = '「……ふふ、私のことが気になりますか。私は昔からこの学院にいる、物覚えの良い一冊です。詳しい素性はまだ明かせませんが……これは、少し特別な贈り物です。」';
    li.appendChild(p);
    resultsEl.appendChild(li);

    if (window.CodexProgress) {
      window.CodexProgress.addSecret(SELF_REFERENCE_SECRET);
      window.CodexProgress.addFragment(SELF_REFERENCE_FRAGMENT_ID, 'search.html');
    }
    renderMemorySection();
  }

  function render(query) {
    if (!query.trim()) {
      statusEl.textContent = '';
      resultsEl.innerHTML = '';
      return;
    }

    if (isCodexSelfReference(query)) {
      renderSelfReferenceResponse();
      return;
    }

    var results = filterIndex(query, window.SEARCH_INDEX).filter(isUnlocked);
    resultsEl.innerHTML = '';

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

  renderMemorySection();
}());
