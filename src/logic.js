export var TICKET_PRICES = {
  adult: 2800,
  student: 1800,
  child: 900,
  infant: 0,
  family: 7200    // 大人2名+小人2名セット
};

export function calcTicketTotal(adults, students, children, infants) {
  if (adults < 0 || students < 0 || children < 0 || infants < 0) {
    throw new Error('人数は0以上を指定してください');
  }
  return (
    adults * TICKET_PRICES.adult +
    students * TICKET_PRICES.student +
    children * TICKET_PRICES.child +
    infants * TICKET_PRICES.infant
  );
}

// 家族券(大人2名+小人2名 ¥7,200)を適用した最適料金を返す
export function calcOptimalPrice(adults, students, children, infants) {
  if (adults < 0 || students < 0 || children < 0 || infants < 0) {
    throw new Error('人数は0以上を指定してください');
  }
  var regularTotal = calcTicketTotal(adults, students, children, infants);
  var familySetCount = Math.min(Math.floor(adults / 2), Math.floor(children / 2));
  if (familySetCount === 0) {
    return { total: regularTotal, familySets: 0, savings: 0 };
  }
  var remAdults = adults - familySetCount * 2;
  var remChildren = children - familySetCount * 2;
  var withFamily = (
    familySetCount * TICKET_PRICES.family +
    remAdults * TICKET_PRICES.adult +
    students * TICKET_PRICES.student +
    remChildren * TICKET_PRICES.child
  );
  if (withFamily < regularTotal) {
    return { total: withFamily, familySets: familySetCount, savings: regularTotal - withFamily };
  }
  return { total: regularTotal, familySets: 0, savings: 0 };
}

// P27(docs/ARG-DESIGN.md 4-3節、既存ギミック「料金シミュレーター」)。
// 合計人数がちょうど137名(学院内137個の魔法時計[P12「刻の書」]と同じ数)の
// ときだけ、通常の見積もり結果に加えて特別な一文を表示する
// (src/ticket-sim.jsの同名ロジックと同じ)。
export var SPECIAL_TICKET_TOTAL = 137;

export function isSpecialTicketCombo(adults, students, children, infants) {
  return (adults + students + children + infants) === SPECIAL_TICKET_TOTAL;
}

// P90(docs/ARG-DESIGN.md 4-3節、既存ギミック「学院祭・行事の季節×エリア
// 絞り込み」)。冬(winter)×大図書館(library)の組み合わせは、公式行事の
// 該当が1件も無い(大図書館で行われる行事は無い)。この特定の組み合わせを
// 選んだ時だけ、通常の絞り込み結果に加えて特別な一文を表示する
// (src/season-filter.jsの同名ロジックと同じ)。
export var SECRET_EVENT_SEASON = 'winter';
export var SECRET_EVENT_AREA = 'library';

export function isSecretEventCombo(season, area) {
  return season === SECRET_EVENT_SEASON && area === SECRET_EVENT_AREA;
}

// カルーセルの次/前インデックスを計算する(0始まり、範囲外は循環)
export function carouselNextIndex(current, total) {
  if (total <= 0) { return 0; }
  return (current + 1 + total) % total;
}

export function carouselPrevIndex(current, total) {
  if (total <= 0) { return 0; }
  return (current - 1 + total) % total;
}

// クエリが「の」のような助詞1文字・ありふれた1文字だと、その文字を含む
// ページが大量にヒットしてしまう(ページ数が増えるほど悪化する)。この文字数
// 未満のクエリは一致なしとして扱う(2026-07-29 ユーザー指摘)。
export var MIN_SEARCH_QUERY_LENGTH = 2;

// サイト内検索: クエリに一致するページをタイトル・カテゴリ・keywords(あれば)の
// 部分一致で絞り込む。keywordsは正式名称(title)とは別に複数の言い回しでも
// ヒットさせるための隠しフィールド(docs/ARG-DESIGN.md 2-1節)。
// entry.exactMatch が true の場合のみ、部分一致ではなくtitle/category/keywordsの
// いずれかとの完全一致を要求する(謎解きの合言葉が、答えの一部を入力しただけで
// 偶然ヒットしてしまうのを防ぐため。2026-07-29 ユーザー指摘)。
export function filterSearchIndex(query, index) {
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

// ノスティオンの「学院の秘密」(訪問済み隠しページ)・「手にした断片」の状態を
// 純粋関数として操作する(docs/ARG-DESIGN.md 2-2節)。DOM/localStorageの
// 読み書きは src/codex-progress.js が担い、実際の状態更新ロジックはここに置く。

// progress: { secrets: string[], fragments: { id, foundAt, used }[] }
function normalizeProgress(progress) {
  return {
    secrets: (progress && progress.secrets) || [],
    fragments: (progress && progress.fragments) || []
  };
}

// 隠しページを訪問した記録を追加する(「学院の秘密」)。既に記録済みなら変化なし。
export function addSecretToProgress(progress, path) {
  var normalized = normalizeProgress(progress);
  if (normalized.secrets.indexOf(path) !== -1) { return normalized; }
  return {
    secrets: normalized.secrets.concat([path]),
    fragments: normalized.fragments
  };
}

// 断片を獲得した記録を追加する(「手にした断片」)。既に獲得済みのidなら変化なし。
export function addFragmentToProgress(progress, id, foundAt) {
  var normalized = normalizeProgress(progress);
  if (normalized.fragments.some(function (f) { return f.id === id; })) { return normalized; }
  return {
    secrets: normalized.secrets,
    fragments: normalized.fragments.concat([{ id: id, foundAt: foundAt, used: false }])
  };
}

// 断片を「使用済み」にする(中間断片が別のページの謎解きに実際に使われた時)。
export function markFragmentUsed(progress, id) {
  var normalized = normalizeProgress(progress);
  return {
    secrets: normalized.secrets,
    fragments: normalized.fragments.map(function (f) {
      return f.id === id ? { id: f.id, foundAt: f.foundAt, used: true } : f;
    })
  };
}

// 隠し検索エントリが、現在の閲覧履歴(訪問済み隠しページのpath配列)で
// 検索可能かどうかを判定する(docs/ARG-DESIGN.md 2-3節、検索ゲーティング)。
// entry.prereq が null/未指定なら常にtrue。配列ならどれか1つでも
// visitedPathsに含まれていればtrue(網状構造の複数経路OR判定)。
export function isSearchEntryUnlocked(entry, visitedPaths) {
  if (!entry.prereq) { return true; }
  return entry.prereq.some(function (p) { return visitedPaths.indexOf(p) !== -1; });
}

// P91(docs/ARG-DESIGN.md 4-3節): ノスティオン自身について尋ねたかどうかを判定する。
// 誘導文で示した通り「私」「ノスティオン」のいずれかを含む問いかけを自己言及とみなす
// (雰囲気重視のため厳密な完全一致は求めない)。
export function isCodexSelfReferenceQuery(query) {
  var q = (query || '').trim();
  if (!q) { return false; }
  return q.indexOf('私') !== -1 || q.indexOf('ノスティオン') !== -1;
}

// 「学院の秘密」欄で使う隠しページ一覧を構築する(2026-07-29 バグ修正)。
// searchIndexのhiddenエントリに加え、SEARCH_INDEXには登録されていない特別な
// エントリ(P91の自己言及トリガー用SELF_REFERENCE_ENTRY等、通常検索でヒット
// させたくないもの)もextraEntriesとして合流させる。これにより、そうした
// ページを訪問しても「学院の秘密」欄・進捗の分母から漏れなくなる。
export function buildHiddenEntryList(searchIndex, extraEntries) {
  var hidden = searchIndex.filter(function (e) { return e.hidden; });
  return hidden.concat(extraEntries || []);
}

// 謎解きヒント専用ページ(docs/ROADMAP.md「### 13」参照)用: hintDataのうち、
// entry.requiresPageをvisitedPathsにまだ持っていないものを除外する。
// まだ出会っていない謎のヒントを先読みできてしまわないようにするため
// (2026-07-29 ユーザー提案)。requiresPageは文字列またはstring[]
// (複数ページのいずれか1つでも訪問済みならOKのOR判定。2026-07-29
// ヒント対象拡大: 例えばP6は魔法生物図鑑・魔導88星座のどちらからでも
// たどり着けるため、ヒントもどちらか一方の訪問で解禁する必要がある)。
// requiresPageを省略/nullにした場合は常に解禁済み扱いにする(2026-07-29
// ユーザー指摘: root行[通常ページから直接見つかるページ]には前提となる
// 隠しページ自体が無いため、他のヒント同様に「訪問済みなら」というゲートを
// 掛けられない。hint-book.htmlへの到達自体が「学院の秘密」を1件以上
// 見つけた後という前提[shouldShowHintLink]なので、常時表示にしても
// 過度な先読みにはならない)。
export function filterUnlockedHints(hintData, visitedPaths) {
  return hintData.filter(function (entry) {
    if (!entry.requiresPage) { return true; }
    var required = Array.isArray(entry.requiresPage) ? entry.requiresPage : [entry.requiresPage];
    return required.some(function (p) { return visitedPaths.indexOf(p) !== -1; });
  });
}

// ヒントの手引き用: 解禁済み(filterUnlockedHints)のヒントのうち、既に
// 目的地(entry.leadsTo)を発見済みのものをさらに除外する(2026-07-29
// ユーザー提案: 「既に閲覧済みのページは秘密に残るからヒントは消していい
// のでは」)。leadsToは表示には一切使わないフィルタ専用の値であり、
// hintFor(見出し表示用、答えを出してはならない)とは役割が異なる
// (entry.leadsToが未設定のエントリは、目的地の概念が無いため常に残す)。
export function filterActiveHints(hintData, visitedPaths) {
  return filterUnlockedHints(hintData, visitedPaths).filter(function (entry) {
    if (!entry.leadsTo) { return true; }
    return visitedPaths.indexOf(entry.leadsTo) === -1;
  });
}

// ヒントの手引き(pages/glossary/hint-book.html)の見出し用(2026-07-29
// ユーザー指摘)。断片の個別名(先読みでネタバレになる)ではなく、手がかりが
// あるページ自体のタイトルを見出しにする。extraEntries経由で、SEARCH_INDEXに
// 登録されていない特別なページ(P91の自己言及ページ等)も解決できるようにする
// (buildHiddenEntryListと同じ考え方)。pathは文字列またはstring[]
// (OR条件の場合、両方のタイトルを「 / 」でつないで見出しにする)。
export function resolveHintPageTitle(path, searchIndex, extraEntries) {
  var all = (searchIndex || []).concat(extraEntries || []);
  var paths = Array.isArray(path) ? path : [path];
  var titles = paths.map(function (p) {
    var match = all.filter(function (e) { return e.path === p; })[0];
    return match ? match.title : p;
  });
  return titles.join(' / ');
}

// ヒントの手引き用: 解禁済みのヒントを、見出し(resolveHintPageTitleの結果)
// ごとにまとめる(2026-07-29 ユーザー指摘)。複数のHINT_DATAエントリが同じ
// hintFor(例: P2「永久運動核」・P98「刻の書」はどちらも
// exploration/clock-tower.html)を持つ場合、そのままでは同じ見出し
// (「時計塔」)を持つ`<li>`が別々に並んでしまい冗長になる。同じ見出しの
// エントリは1つのグループにまとめ、ヒント本文を複数持たせる。
export function groupHintsByHintFor(hints, searchIndex, extraEntries) {
  var groups = [];
  var byHeading = {};
  hints.forEach(function (entry) {
    var heading = resolveHintPageTitle(entry.hintFor, searchIndex, extraEntries);
    if (!byHeading[heading]) {
      byHeading[heading] = { heading: heading, hints: [] };
      groups.push(byHeading[heading]);
    }
    byHeading[heading].hints.push(entry.hint);
  });
  return groups;
}

// 「学院の秘密」欄をツリー表示するための木構造を組み立てる(2026-07-29
// ユーザー指摘)。訪問済みページ(visitedPaths、codex-progress.jsにより
// 訪問順で並んでいる)のみを対象にし、各ページのhiddenEntries上のprereq
// (親候補のpath配列、OR判定)のうち、実際に訪問済みのものだけを親として
// 採用する。prereqが無い、または訪問済みの親候補が1つも無い場合はルート
// ノードになる。
// **網状構造への配慮**: 複数の親候補が訪問済みの場合、そのページ自身より
// 「前に」訪問されていた候補の中で、最も後(最近)に訪問された候補を親として
// 採用する(より具体的な発見の連鎖を優先するため。例: A→B→Cの順に訪問し、
// CがA・B両方をprereqに持つ場合、Cは(Aではなく)Bの子として表示する)。
// **自分より後に訪問された候補は対象から除外する**: これにより、後から
// 別の経路(まだ訪れていなかった方の親)を訪れても、既に表示されていた
// 親子関係が過去に遡って変わることはない(2026-07-29 バグ修正。例:
// 魔導88星座→シベル・オーレン→魔法生物図鑑の順に訪問した場合、シベル・
// オーレンは魔導88星座の子のまま固定され、後から魔法生物図鑑を訪れても
// 付け替わらない)。訪問していない親候補の存在を推測させる情報は一切
// 出力しない。
export function buildSecretsTree(hiddenEntries, visitedPaths) {
  var byPath = {};
  hiddenEntries.forEach(function (e) { byPath[e.path] = e; });

  var nodes = {};
  visitedPaths.forEach(function (path) {
    var entry = byPath[path];
    if (!entry) { return; }
    nodes[path] = { path: entry.path, title: entry.title, children: [] };
  });

  var roots = [];
  visitedPaths.forEach(function (path, index) {
    var node = nodes[path];
    if (!node) { return; }
    var entry = byPath[path];
    var prereq = entry.prereq || [];
    var candidates = prereq.filter(function (p) {
      return nodes[p] && visitedPaths.indexOf(p) < index;
    });
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

  Object.keys(nodes).forEach(function (path) {
    nodes[path].descendantCount = countTreeDescendants(nodes[path]);
  });

  return roots;
}

// 「これまでの記録」欄のツリー表示、「つながり(N)」の件数用(2026-07-30
// ユーザー指摘)。直下の子だけでなく、ネスト最下層まで含めた子孫の総数を返す。
export function countTreeDescendants(node) {
  return node.children.reduce(function (total, child) {
    return total + 1 + countTreeDescendants(child);
  }, 0);
}

// 「手にした断片」欄の表示用データを組み立てる(2026-07-29 ユーザー指摘)。
// 各断片は元々foundAt(ギミック元のページのpath)を持っているが、これまで
// 表示していなかった。hiddenEntriesからfoundAtに対応するタイトルを引いて
// 添えることで、PGATEで「あ、これ覚えてる」と振り返れるようにする。
// 対応するエントリが見つからない場合(データ不整合等)はsourceTitle/
// sourcePathをnullにし、表示自体は継続する。
export function buildFragmentDisplayList(fragments, names, hiddenEntries) {
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

// 検索結果の「✦ 発見」バッジを表示すべきかどうかを判定する(2026-07-29
// バグ修正)。hiddenなエントリでも、既に「学院の秘密」に記録済み(訪問済み)
// なら「今まさに発見した」わけではないため表示しない。
export function shouldShowDiscoveryBadge(entry, visitedPaths) {
  return !!entry.hidden && visitedPaths.indexOf(entry.path) === -1;
}

// 開発用デバッグコマンド(2026-07-29 ユーザー提案): ノスティオンの検索窓に
// この文字列だけを入力した場合に限り、開発者向けの発見履歴リセット動作の
// トリガーとみなす。通常の検索語(日本語の単語)とは衝突しない記号始まりの
// 文字列にしてあり、SEARCH_INDEXには一切登録しない(プレイヤー向けの
// 説明もしない裏コマンド)。
export var DEBUG_RESET_QUERY = '!reset';

export function isDebugResetQuery(query) {
  return (query || '').trim() === DEBUG_RESET_QUERY;
}

// 開発用デバッグコマンド「!all」(2026-07-30 ユーザー提案、docs/ROADMAP.md
// 「### 10」タスク)。!resetと同じく記号始まりの裏コマンドでSEARCH_INDEXには
// 登録しないが、こちらは即座に動作するのではなく、通常の検索結果と同じ形の
// 1件のカードとして pages/debug/search-graph.html(SEARCH_INDEX・HINT_DATAの
// つながりを一覧できる開発者向けページ)への案内を表示する。
export var DEBUG_ALL_QUERY = '!all';

export function isDebugAllQuery(query) {
  return (query || '').trim() === DEBUG_ALL_QUERY;
}

// 開発用デバッグコマンド「!unlockall」。!resetの逆で、隠しページ・断片を
// すべて発見済みにする(検証用に「学院の秘密」欄を一括で埋める)。!reset同様
// 記号始まりの裏コマンドでSEARCH_INDEXには登録せず、即座に動作してリロードする。
export var DEBUG_UNLOCK_QUERY = '!unlockall';

export function isDebugUnlockQuery(query) {
  return (query || '').trim() === DEBUG_UNLOCK_QUERY;
}

// P91(docs/ARG-DESIGN.md 4-3節)「本心の断片」の矛盾探しパズル対策
// (2026-07-29 ユーザー指摘: 候補が3つしかなく、総当たりで解けてしまう)。
// 候補を5つに増やしたことに加え、誤った候補を検索した際は通常の
// 「見つかりませんでした」ではなく専用の応答を返し、力任せの総当たりを
// 牽制する(ページを訪問済みの場合のみ。未訪問のまま特別な応答を返すと、
// この語自体が謎のヒントであることを先に漏らしてしまうため)。
export var NOSTION_MEMORY_PAGE_PATH = 'glossary/nostion-memory.html';
export var NOSTION_MEMORY_WRONG_CANDIDATES = ['はじまりの書', 'みちしるべ', '刻みの守人', '詠み子'];

export function isNostionMemoryWrongCandidate(query, visitedPaths) {
  var q = (query || '').trim();
  var visited = (visitedPaths || []).indexOf(NOSTION_MEMORY_PAGE_PATH) !== -1;
  return visited && NOSTION_MEMORY_WRONG_CANDIDATES.indexOf(q) !== -1;
}

// docs/ARG-WORDBANK.md グループG(2026-07-30実装)。「月草」(珍薬草、図鑑
// ページの検索語)と「月光草」(大図書館の魔法インク原料、別の植物)は
// 名前が紛らわしく、うっかり後者で検索してしまいやすい。この引っ掛けを
// 逆手に取り、「月光草」と検索した際は通常の「見つかりませんでした」
// ではなく専用の応答を返す。P91と異なりページ訪問済みかどうかは問わない
// (「月光草」はどのページの答えでもなく、単なる紛らわしい実在の植物名
// であって、応答を返すこと自体が謎の手がかりを漏らすことにはならないため)。
export function isMoonGrassWrongCandidate(query) {
  return (query || '').trim() === '月光草';
}

// 「謎解きに行き詰まったら」リンク(ヒントの手引きへの導線)の表示条件
// (2026-07-29 ユーザー指摘: 隠しページを何も見つけていない訪問者に
// いきなり出るのは不自然)。「学院の秘密」を1件以上見つけた後にのみ表示する。
export function shouldShowHintLink(visitedPaths) {
  return (visitedPaths || []).length > 0;
}

// 学院祭・行事: 次回開催日までのカウントダウン表示(2026-07-30、
// 「今後のタスク候補」より実装)。8行事の日付表記は「第1土曜」「最終週末」
// 「新月の夜」等、曜日・月相に依存する表現がほとんどで、単純な月日の
// 固定値では表せない。weekday: 0=日曜〜6=土曜。

// 指定した年月のn番目のweekday(例: 4月第1土曜)を返す。
export function nthWeekdayOfMonth(year, month, weekday, n) {
  var firstOfMonth = new Date(year, month - 1, 1);
  var offset = (weekday - firstOfMonth.getDay() + 7) % 7;
  var day = 1 + offset + (n - 1) * 7;
  return new Date(year, month - 1, day);
}

// 指定した年月の最終weekday(例: 7月最終週末→最終土曜)を返す。
export function lastWeekdayOfMonth(year, month, weekday) {
  var lastOfMonth = new Date(year, month, 0);
  var offset = (lastOfMonth.getDay() - weekday + 7) % 7;
  return new Date(year, month - 1, lastOfMonth.getDate() - offset);
}

// rule.type: 'fixed'(month/day固定) | 'nth-weekday'(month/weekday/n) |
// 'last-weekday'(month/weekday)。「中旬3日間」「新月の夜」等、曜日にも
// 月相にも還元できない表現は、開催期間内の代表日を`fixed`として近似する
// (`docs/ROADMAP.md`「### 16」参照)。
export function resolveEventDate(rule, year) {
  if (rule.type === 'nth-weekday') {
    return nthWeekdayOfMonth(year, rule.month, rule.weekday, rule.n);
  }
  if (rule.type === 'last-weekday') {
    return lastWeekdayOfMonth(year, rule.month, rule.weekday);
  }
  return new Date(year, rule.month - 1, rule.day);
}

// 今年の開催日が既に過ぎていれば来年の開催日へ繰り越し、todayからの
// 残り日数を返す(当日なら0)。todayは時刻を含んでいてもよい(日付部分
// のみで比較する)。
export function daysUntilNextEvent(rule, today) {
  var year = today.getFullYear();
  var todayMidnight = new Date(year, today.getMonth(), today.getDate());
  var candidate = resolveEventDate(rule, year);
  if (candidate < todayMidnight) {
    candidate = resolveEventDate(rule, year + 1);
  }
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((candidate.getTime() - todayMidnight.getTime()) / msPerDay);
}

// ノスティオン(検索ページ): 発見数の周回カウンター表示(2026-07-30、
// 「今後のタスク候補」より実装)。hiddenEntriesはbuildHiddenEntryListの
// 戻り値、visitedPathsは「学院の秘密」(CodexProgressのsecrets)。
export function countFoundSecrets(hiddenEntries, visitedPaths) {
  return (visitedPaths || []).filter(function (path) {
    return hiddenEntries.some(function (entry) { return entry.path === path; });
  }).length;
}

// P91達成後は「これまでの記録」欄が同じ情報をより詳しく表示するため、
// この簡易カウンターは重複を避けて隠す(2026-07-30 ユーザー指摘)。
export function shouldShowSearchProgress(foundCount, achieved) {
  return foundCount > 0 && !achieved;
}

export function formatDiscoveryProgressText(foundCount) {
  return '学院の秘密を' + foundCount + '件発見しました';
}

// pages/debug/search-graph.html用(2026-07-30、検索ページのデバッグコマンド
// 「!all」の遷移先、docs/ROADMAP.md「### 10」タスク)。SEARCH_INDEXの
// hiddenエントリ一つひとつに、HINT_DATA側からそこへ向かう
// (entry.leadsTo === path)ヒントの一覧を付加したノード配列を作る。
// 開発者がsearch-data.js/hint-data.jsの内容を目視で確認するための中間データ。
export function buildDebugGraphNodes(searchIndex, hintData) {
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

// buildDebugGraphNodesの結果を、prereqでつながるroot→flavorのツリーに組む。
// prereqを持たないノードをrootとし、他ノードのprereqに自分のpathが含まれる
// ノードをchildrenとして再帰的にぶら下げる。prereqが複数(網状構造、例: P13)の
// 場合は両方の親の下に重複して現れる(どちらの経路でもたどり着けることを
// そのまま示すため、あえて重複を解消しない)。
export function buildDebugGraphTree(nodes) {
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
  // childrenは(childrenプロパティを持たない生のlistではなく)withChildren自身から
  // 探す。こうしないと孫以降のノードにchildrenが付与されず、再帰的な木構造を
  // たどれない(2026-07-30 バグ修正: pages/debug/search-graph.htmlで3段以上の
  // flavorチェーンを描画しようとした際にTypeErrorで空表示になっていた)。
  withChildren.forEach(function (n) {
    n.children = withChildren.filter(function (other) { return other.prereq.indexOf(n.path) !== -1; });
  });
  return withChildren.filter(function (n) { return n.prereq.length === 0; });
}

// 整合性チェック(2026-07-30、debug-graph.js用): (1) このページへ導くヒントが
// HINT_DATAに1件も無い、(2) prereqが指すpathがSEARCH_INDEXに存在しない、
// の2点を検出する。docs/ARG-DESIGN.mdとの整合性はtests/arg-design-consistency
// .test.jsが別途保証しているが、そちらはMarkdown側の記述だけを見ており、
// 実データ(search-data.js・hint-data.js)自体の整合性は見ていないため、
// このデバッグページで補う。
//
// P91(src/search.jsのSELF_REFERENCE_ENTRY、glossary/nostion-memory.html)は
// プレイヤー向けの通常検索対象外にするため意図的にSEARCH_INDEXへ登録して
// いない特別ページ。これをprereqとするエントリ(P91→yorishiro-echo.html)は
// 正当な参照であり、(2)のdangling-prereq検出における既知の例外として除外する
// (2026-07-30、初回実装後にデバッグページ自体で誤検知を確認して追記)。
var KNOWN_SPECIAL_PREREQ_PATHS = ['glossary/nostion-memory.html'];

export function findDebugGraphIssues(nodes) {
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

// PGATE(docs/ARG-DESIGN.md 4-6節)。10種の断片を集めて到達する扉ページの
// 判定ロジック。断片そのものの所持は「単純な所持チェック」にしない方針の
// とおり、この判定は「扉ページの謎解きに挑戦できる状態か」の入口チェックに
// のみ使う(実際に扉を開ける・PFINALへ進めるかどうかは各グループの謎解き
// [4-6節「PGATE設計メモ」参照]で別途判定する)。
export var GATE_REQUIRED_FRAGMENTS = ['F1', 'F3', 'F4', 'F5', 'F7', 'F8', 'F11', 'F12', 'F13', 'F14'];

export function hasAllGateFragments(fragmentIds) {
  var owned = fragmentIds || [];
  return GATE_REQUIRED_FRAGMENTS.every(function (id) {
    return owned.indexOf(id) !== -1;
  });
}

export function countGateFragments(fragmentIds) {
  var owned = fragmentIds || [];
  return GATE_REQUIRED_FRAGMENTS.filter(function (id) {
    return owned.indexOf(id) !== -1;
  }).length;
}

// PGATE グループA(4-6節「PGATE設計メモ」参照): F1のフィンレー式記譜法
// (P2/P5)とF3の8記号対応表(P16/P17)を、扉ページで新しい単語の解読に
// 再適用する。答えは大文字小文字を区別せず、前後の空白は無視する。
export var GATE_CIPHER_ANSWERS = {
  finlay: 'KAGI',
  eightSymbol: 'TOKI'
};

export function isGateCipherCorrect(input, answerKey) {
  var expected = GATE_CIPHER_ANSWERS[answerKey];
  if (!expected) { return false; }
  return (input || '').trim().toUpperCase() === expected;
}

// PGATE グループB(4-6節「PGATE設計メモ」参照): F13(P91/yorishiro-echo.html)の
// 「複数候補のうち矛盾の無いものを選ぶ」消去法を、新しい候補群で再利用する。
// 候補・矛盾点はP91の使い回しではなく扉ページ専用に新規作成したもの
// (docs/ARG-DESIGN.md 4-6節「グループB」参照)。
export var GATE_GROUP_B_ANSWER = '欠片の環';

export function isGateGroupBCorrect(choice) {
  return choice === GATE_GROUP_B_ANSWER;
}

// PGATE グループC(4-6節「PGATE設計メモ」参照): F7(P32/gate-pattern-match.html)で
// 「刻印の証」の記章意匠と礎石の紋様を重ね合わせて完成させた図案を、扉ページで
// 再掲する。ここでは実際の画像ではなく、「何と何を重ね合わせた図案だったか」を
// 他の断片の物語と混同させた選択肢から選ばせる形で再利用する(P32のエピソードを
// 正確に覚えているかどうかを問う、画像アセットを必要としない設計)。
export var GATE_GROUP_C_ANSWER = '礎石の紋様と、刻印の証';

export function isGateGroupCCorrect(choice) {
  return choice === GATE_GROUP_C_ANSWER;
}

// PGATE グループD(4-6節「PGATE設計メモ」参照): 記号↔読みの対応表を持たない
// 6つの断片(F4・F5・F8・F11・F12・F14)を、獲得エピソードの言い回しを
// 再掲して思い出させる「記憶の突き合わせ」型で再利用する。各キーは扉ページの
// 選択肢と対応(4-6節「グループD 6件、扉ページで再掲する具体的な文言」参照)。
export var GATE_GROUP_D_ANSWERS = {
  wish: 'F4',       // 「本人たっての願いにより」(P22)
  book: 'F5',        // 「十年、誰にも開かれなかった本」(P26)
  locker: 'F8',       // 「開かずのロッカー」(P46)
  gate: 'F11',        // 「一団、還らず。門を閉ざす」(P94)
  reading: 'F12',      // 「内容について語り合うことは無い」(P90)
  guestbook: 'F14'     // 「『ク』から始まる一文字」(P96)
};

export function isGateGroupDCorrect(answers) {
  var given = answers || {};
  return Object.keys(GATE_GROUP_D_ANSWERS).every(function (key) {
    return given[key] === GATE_GROUP_D_ANSWERS[key];
  });
}

// PGATE 最終判定: グループA(記号2種)・B・C・Dの5問全てが正解した時だけ、
// 扉が開きPFINALへの導線を見せる。solvedは各問の正誤を保持するオブジェクト
// (キーが1つでも欠けている・falseの場合はfalse)。
export var GATE_SOLVE_KEYS = ['finlay', 'eightSymbol', 'groupB', 'groupC', 'groupD'];

export function isGateFullySolved(solved) {
  var given = solved || {};
  return GATE_SOLVE_KEYS.every(function (key) {
    return given[key] === true;
  });
}
