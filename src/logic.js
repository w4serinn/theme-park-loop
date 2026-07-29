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
// (2026-07-29 ユーザー提案)。
export function filterUnlockedHints(hintData, visitedPaths) {
  return hintData.filter(function (entry) {
    return visitedPaths.indexOf(entry.requiresPage) !== -1;
  });
}

// ヒントの手引き(pages/glossary/hint-book.html)の見出し用(2026-07-29
// ユーザー指摘)。断片の個別名(先読みでネタバレになる)ではなく、謎解きが
// あるページ自体のタイトルを見出しにする。extraEntries経由で、SEARCH_INDEXに
// 登録されていない特別なページ(P91の自己言及ページ等)も解決できるようにする
// (buildHiddenEntryListと同じ考え方)。
export function resolveHintPageTitle(path, searchIndex, extraEntries) {
  var all = (searchIndex || []).concat(extraEntries || []);
  var match = all.filter(function (e) { return e.path === path; })[0];
  return match ? match.title : path;
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

  return roots;
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

// 「謎解きに行き詰まったら」リンク(ヒントの手引きへの導線)の表示条件
// (2026-07-29 ユーザー指摘: 隠しページを何も見つけていない訪問者に
// いきなり出るのは不自然)。「学院の秘密」を1件以上見つけた後にのみ表示する。
export function shouldShowHintLink(visitedPaths) {
  return (visitedPaths || []).length > 0;
}
