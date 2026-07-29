(function () {
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');
  var statusEl = document.getElementById('search-status');
  var root = document.querySelector('.search-content');
  if (!input || !resultsEl || !statusEl || !root || !window.SEARCH_INDEX) { return; }

  var base = root.getAttribute('data-base') || '';

  // P91(docs/ARG-DESIGN.md 4-3節): ノスティオン自身への自己言及の誘導に対する
  // 検索結果。通常の検索結果と同じクリック可能なカードとして表示し、専用の
  // 隠しページ(F13「本心の断片」の獲得もそのページ側で行う)へ遷移させる
  // (2026-07-28 ユーザー指摘によりインライン応答から変更)。
  var SELF_REFERENCE_PAGE_PATH = 'glossary/nostion-memory.html';
  var SELF_REFERENCE_ENTRY = {
    title: '最初の記憶',
    category: '物知りの魔導書',
    path: SELF_REFERENCE_PAGE_PATH,
    hidden: true
  };

  var memorySection = document.getElementById('codex-memory-section');
  var memorySecretsLabel = document.getElementById('codex-memory-secrets-label');
  var memorySecretsList = document.getElementById('codex-memory-secrets-list');
  var memoryFragmentsList = document.getElementById('codex-memory-fragments-list');

  // entry.exactMatchがtrueの場合、部分一致ではなくtitle/category/keywordsの
  // いずれかとの完全一致を要求する(謎解きの合言葉対策。src/logic.jsと同じロジック)。
  function filterIndex(query, index) {
    var q = (query || '').trim().toLowerCase();
    if (!q) { return []; }
    return index.filter(function (entry) {
      var keywords = entry.keywords || [];
      if (entry.exactMatch) {
        var candidates = [entry.title, entry.category].concat(keywords);
        return candidates.some(function (c) { return c.toLowerCase() === q; });
      }
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
  //
  // hiddenEntriesは、window.SEARCH_INDEXのhiddenエントリに加え、SELF_REFERENCE_ENTRY
  // (SEARCH_INDEXには未登録)も合流させたもの(src/logic.jsのbuildHiddenEntryListと
  // 同じロジック)。SEARCH_INDEXだけを見ていると、nostion-memory.htmlを訪問しても
  // 「学院の秘密」欄・進捗の分母に出てこないバグがあったため(2026-07-29 ユーザー報告)。
  function renderMemorySection() {
    if (!memorySection || !window.CodexProgress) { return; }
    var progress = window.CodexProgress.load();
    var achieved = progress.secrets.indexOf(SELF_REFERENCE_PAGE_PATH) !== -1;
    memorySection.hidden = !achieved;
    if (!achieved) { return; }

    var hiddenEntries = window.SEARCH_INDEX.filter(function (e) { return e.hidden; }).concat([SELF_REFERENCE_ENTRY]);
    var hiddenTotal = hiddenEntries.length;
    var foundHiddenCount = progress.secrets.filter(function (s) {
      return hiddenEntries.some(function (e) { return e.path === s; });
    }).length;
    if (memorySecretsLabel) {
      memorySecretsLabel.textContent = '学院の秘密(' + foundHiddenCount + '/' + hiddenTotal + ')';
    }

    if (memorySecretsList) {
      memorySecretsList.innerHTML = '';
      progress.secrets.forEach(function (path) {
        var entry = hiddenEntries.filter(function (e) { return e.path === path; })[0];
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

  function render(query) {
    if (!query.trim()) {
      statusEl.textContent = '';
      resultsEl.innerHTML = '';
      return;
    }

    var results = isCodexSelfReference(query)
      ? [SELF_REFERENCE_ENTRY]
      : filterIndex(query, window.SEARCH_INDEX).filter(isUnlocked);
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

  // ブラウザの戻る/進む操作でbfcache(back/forward cache)からページが復元された
  // 場合、スクリプトは再実行されずDOMも離脱時点のまま保持される。そのため、
  // 他ページで新たに獲得した「学院の秘密」「断片」が記録欄に反映されないまま
  // 表示され続けてしまう(2026-07-28 ユーザー報告のバグ)。pageshowイベントの
  // event.persistedでbfcache復元を検知し、記録欄を最新のlocalStorageの内容で
  // 再描画する。
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      renderMemorySection();
    }
  });

  renderMemorySection();
}());
