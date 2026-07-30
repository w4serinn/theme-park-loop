// pages/debug/search-graph.html用(2026-07-30、検索ページのデバッグコマンド
// 「!all」の遷移先、docs/ROADMAP.md「### 10」タスク)。
//
// SEARCH_INDEX(src/search-data.js)のhiddenエントリと、そこへ向かう
// HINT_DATA(src/hint-data.js)のヒントのつながりを一覧表示する開発者向けの
// 確認用スクリプト。プレイヤー向けのARG体験には一切関与しない
// (CodexProgress・localStorageへの読み書きは行わない)。
//
// 以下の3関数はsrc/logic.jsのbuildDebugGraphNodes/buildDebugGraphTree/
// findDebugGraphIssuesと同じロジックを複製している(file://でも動くよう
// ES module importを使わない設計、src/search.jsと同じ理由)。
(function () {
  var issuesEmptyEl = document.getElementById('debug-graph-issues-empty');
  var issuesListEl = document.getElementById('debug-graph-issues-list');
  var countEl = document.getElementById('debug-graph-count');
  var treeEl = document.getElementById('debug-graph-tree');
  if (!issuesListEl || !treeEl || !window.SEARCH_INDEX || !window.HINT_DATA) { return; }

  function buildDebugGraphNodes(searchIndex, hintData) {
    var hidden = (searchIndex || []).filter(function (e) { return e.hidden; });
    return hidden.map(function (entry) {
      var incomingHints = (hintData || [])
        .filter(function (h) { return h.leadsTo === entry.path; })
        .map(function (h) {
          return {
            sources: Array.isArray(h.hintFor) ? h.hintFor : [h.hintFor],
            hint: h.hint
          };
        });
      return {
        path: entry.path,
        title: entry.title,
        category: entry.category,
        keywords: entry.keywords || [],
        exactMatch: !!entry.exactMatch,
        prereq: entry.prereq || [],
        incomingHints: incomingHints
      };
    });
  }

  function buildDebugGraphTree(nodes) {
    var list = nodes || [];
    var withChildren = list.map(function (n) {
      return {
        path: n.path,
        title: n.title,
        category: n.category,
        keywords: n.keywords,
        exactMatch: n.exactMatch,
        prereq: n.prereq,
        incomingHints: n.incomingHints,
        children: []
      };
    });
    // childrenはwithChildren自身から探す(src/logic.jsのbuildDebugGraphTreeと
    // 同じバグ修正。生のlistを参照するとchildrenプロパティを持たないノードが
    // 混入し、3段以上のflavorチェーンで再帰描画がTypeErrorになる)。
    withChildren.forEach(function (n) {
      n.children = withChildren.filter(function (other) { return other.prereq.indexOf(n.path) !== -1; });
    });
    return withChildren.filter(function (n) { return n.prereq.length === 0; });
  }

  // P91(SELF_REFERENCE_ENTRY、glossary/nostion-memory.html)はプレイヤー向け
  // 通常検索対象外にするため意図的にSEARCH_INDEXへ登録していない特別ページ。
  // これをprereqとするエントリ(P91→yorishiro-echo.html)は正当な参照なので、
  // dangling-prereq検出の既知の例外として除外する(src/logic.jsの
  // findDebugGraphIssuesと同じ理由)。
  var KNOWN_SPECIAL_PREREQ_PATHS = ['glossary/nostion-memory.html'];

  function findDebugGraphIssues(nodes) {
    var list = nodes || [];
    var byPath = {};
    list.forEach(function (n) { byPath[n.path] = true; });
    var issues = [];
    list.forEach(function (n) {
      if (n.incomingHints.length === 0) {
        issues.push({ path: n.path, title: n.title, type: 'no-hint' });
      }
      n.prereq.forEach(function (p) {
        if (!byPath[p] && KNOWN_SPECIAL_PREREQ_PATHS.indexOf(p) === -1) {
          issues.push({ path: n.path, title: n.title, type: 'dangling-prereq', detail: p });
        }
      });
    });
    return issues;
  }

  function issueMessage(issue) {
    if (issue.type === 'no-hint') {
      return 'このページへ導くヒント(HINT_DATA)が見つかりません。';
    }
    return 'prereq「' + issue.detail + '」がSEARCH_INDEXに存在しません。';
  }

  function renderIssues(issues) {
    if (issues.length === 0) {
      issuesEmptyEl.hidden = false;
      return;
    }
    issuesEmptyEl.hidden = true;
    issues.forEach(function (issue) {
      var li = document.createElement('li');
      li.className = 'debug-graph__issue debug-graph__issue--' + issue.type;

      var title = document.createElement('span');
      title.className = 'debug-graph__issue-title';
      title.textContent = issue.title + '(' + issue.path + ')';
      li.appendChild(title);

      var message = document.createElement('span');
      message.className = 'debug-graph__issue-message';
      message.textContent = issueMessage(issue);
      li.appendChild(message);

      issuesListEl.appendChild(li);
    });
  }

  function renderKeywordChips(keywords) {
    var wrap = document.createElement('span');
    wrap.className = 'debug-graph__chips';
    keywords.forEach(function (keyword) {
      var chip = document.createElement('span');
      chip.className = 'debug-graph__chip';
      chip.textContent = keyword;
      wrap.appendChild(chip);
    });
    return wrap;
  }

  function renderHints(incomingHints) {
    var ul = document.createElement('ul');
    ul.className = 'debug-graph__hints';
    incomingHints.forEach(function (h) {
      var li = document.createElement('li');
      li.className = 'debug-graph__hint';

      var sources = document.createElement('span');
      sources.className = 'debug-graph__hint-sources';
      sources.textContent = h.sources.join(' / ');
      li.appendChild(sources);

      var text = document.createElement('span');
      text.className = 'debug-graph__hint-text';
      text.textContent = h.hint;
      li.appendChild(text);

      ul.appendChild(li);
    });
    return ul;
  }

  function renderNode(node) {
    var li = document.createElement('li');
    li.className = 'debug-graph__node';

    var header = document.createElement('div');
    header.className = 'debug-graph__node-header';

    var title = document.createElement('span');
    title.className = 'debug-graph__node-title';
    title.textContent = node.title;
    header.appendChild(title);

    var path = document.createElement('span');
    path.className = 'debug-graph__node-path';
    path.textContent = node.path;
    header.appendChild(path);

    if (node.exactMatch) {
      var badge = document.createElement('span');
      badge.className = 'debug-graph__node-badge';
      badge.textContent = 'exactMatch';
      header.appendChild(badge);
    }

    li.appendChild(header);

    if (node.keywords.length > 0) {
      var keywordsRow = document.createElement('div');
      keywordsRow.className = 'debug-graph__node-row';
      var keywordsLabel = document.createElement('span');
      keywordsLabel.className = 'debug-graph__node-label';
      keywordsLabel.textContent = 'keywords';
      keywordsRow.appendChild(keywordsLabel);
      keywordsRow.appendChild(renderKeywordChips(node.keywords));
      li.appendChild(keywordsRow);
    }

    if (node.incomingHints.length > 0) {
      var hintsRow = document.createElement('div');
      hintsRow.className = 'debug-graph__node-row';
      var hintsLabel = document.createElement('span');
      hintsLabel.className = 'debug-graph__node-label';
      hintsLabel.textContent = 'hints';
      hintsRow.appendChild(hintsLabel);
      hintsRow.appendChild(renderHints(node.incomingHints));
      li.appendChild(hintsRow);
    }

    if (node.children.length > 0) {
      var details = document.createElement('details');
      details.className = 'debug-graph__toggle';
      details.open = true;

      var summary = document.createElement('summary');
      summary.textContent = 'flavor(' + node.children.length + ')';
      details.appendChild(summary);

      var childUl = document.createElement('ul');
      childUl.className = 'debug-graph__tree';
      node.children.forEach(function (child) {
        childUl.appendChild(renderNode(child));
      });
      details.appendChild(childUl);

      li.appendChild(details);
    }

    return li;
  }

  var nodes = buildDebugGraphNodes(window.SEARCH_INDEX, window.HINT_DATA);
  var issues = findDebugGraphIssues(nodes);
  var tree = buildDebugGraphTree(nodes);

  renderIssues(issues);

  if (countEl) {
    countEl.textContent = '隠しページ ' + nodes.length + '件(root ' + tree.length + '件)';
  }

  tree.forEach(function (node) {
    treeEl.appendChild(renderNode(node));
  });
}());
