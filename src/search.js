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

  // クエリが「の」のような助詞1文字だと大量ヒットしてしまうため、この文字数
  // 未満のクエリは一致なしとして扱う(src/logic.jsのMIN_SEARCH_QUERY_LENGTHと
  // 同じ値。2026-07-29 ユーザー指摘)。
  var MIN_SEARCH_QUERY_LENGTH = 2;

  // entry.exactMatchがtrueの場合、部分一致ではなくtitle/category/keywordsの
  // いずれかとの完全一致を要求する(謎解きの合言葉対策。src/logic.jsと同じロジック)。
  function filterIndex(query, index) {
    var q = (query || '').trim().toLowerCase();
    if (!q || q.length < MIN_SEARCH_QUERY_LENGTH) { return []; }
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

  // 「学院の秘密」欄のツリー表示用(2026-07-29 ユーザー指摘、src/logic.jsの
  // buildSecretsTreeと同じロジック)。訪問済みページのみを対象にし、複数の
  // 親候補が訪問済みの場合は最も後に訪問された方を親として採用する(網状構造で
  // 未訪問の親候補を推測させないため)。
  function buildSecretsTree(hiddenEntries, visitedPaths) {
    var byPath = {};
    hiddenEntries.forEach(function (e) { byPath[e.path] = e; });

    var nodes = {};
    visitedPaths.forEach(function (path) {
      var entry = byPath[path];
      if (!entry) { return; }
      nodes[path] = { path: entry.path, title: entry.title, children: [] };
    });

    var roots = [];
    visitedPaths.forEach(function (path) {
      var node = nodes[path];
      if (!node) { return; }
      var entry = byPath[path];
      var prereq = entry.prereq || [];
      var candidates = prereq.filter(function (p) { return nodes[p]; });
      var parentPath = candidates.length > 0
        ? candidates.reduce(function (latest, p) {
          return visitedPaths.indexOf(p) > visitedPaths.indexOf(latest) ? p : latest;
        })
        : null;
      if (parentPath) {
        nodes[parentPath].children.push(node);
      } else {
        roots.push(node);
      }
    });

    return roots;
  }

  // ツリーノードの配列を<ul>の中に再帰的に描画する。子を持つノードは
  // <details>で折りたためるようにし(2026-07-29 ユーザー指摘)、リンクは
  // <summary>の外に置いて「クリックで遷移」と「クリックで開閉」が
  // 競合しないようにする。
  function renderSecretsTree(nodes, container) {
    nodes.forEach(function (node) {
      var li = document.createElement('li');
      li.className = 'codex-memory__tree-node';

      var a = document.createElement('a');
      a.href = base + node.path;
      a.textContent = node.title;
      li.appendChild(a);

      if (node.children.length > 0) {
        var details = document.createElement('details');
        details.className = 'codex-memory__tree-toggle';
        details.open = true;

        var summary = document.createElement('summary');
        summary.textContent = 'つながり(' + node.children.length + ')';
        details.appendChild(summary);

        var childUl = document.createElement('ul');
        childUl.className = 'codex-memory__tree';
        renderSecretsTree(node.children, childUl);
        details.appendChild(childUl);

        li.appendChild(details);
      }

      container.appendChild(li);
    });
  }

  // 「手にした断片」欄の表示用データを組み立てる(src/logic.jsの
  // buildFragmentDisplayListと同じロジック。2026-07-29 ユーザー指摘)。
  function buildFragmentDisplayList(fragments, names, hiddenEntries) {
    var byPath = {};
    hiddenEntries.forEach(function (e) { byPath[e.path] = e; });

    return fragments.map(function (f) {
      var source = byPath[f.foundAt];
      return {
        id: f.id,
        name: names[f.id] || f.id,
        used: f.used,
        sourcePath: source ? source.path : null,
        sourceTitle: source ? source.title : null
      };
    });
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
      var tree = buildSecretsTree(hiddenEntries, progress.secrets);
      renderSecretsTree(tree, memorySecretsList);
    }

    if (memoryFragmentsList) {
      memoryFragmentsList.innerHTML = '';
      var names = window.FRAGMENT_NAMES || {};
      var fragmentList = buildFragmentDisplayList(progress.fragments, names, hiddenEntries);
      fragmentList.forEach(function (fragment) {
        var li = document.createElement('li');
        li.className = 'codex-memory__fragment-item' + (fragment.used ? ' codex-memory__fragment--used' : '');

        var label = document.createElement('span');
        label.textContent = fragment.name;
        li.appendChild(label);

        if (fragment.sourcePath) {
          var sourceLink = document.createElement('a');
          sourceLink.className = 'codex-memory__fragment-source';
          sourceLink.href = base + fragment.sourcePath;
          sourceLink.textContent = fragment.sourceTitle;
          li.appendChild(sourceLink);
        }

        memoryFragmentsList.appendChild(li);
      });
    }
  }

  function render(query) {
    var trimmed = query.trim();
    if (!trimmed) {
      statusEl.textContent = '';
      resultsEl.innerHTML = '';
      return;
    }

    var selfReference = isCodexSelfReference(query);

    // 自己言及トリガー(「私」1文字等)は文字数の制限対象外にする。
    if (!selfReference && trimmed.length < MIN_SEARCH_QUERY_LENGTH) {
      resultsEl.innerHTML = '';
      statusEl.textContent = 'もう少し詳しく入力してください。';
      return;
    }

    var results = selfReference
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
