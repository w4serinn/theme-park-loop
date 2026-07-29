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

// サイト内検索: クエリに一致するページをタイトル・カテゴリ・keywords(あれば)の
// 部分一致で絞り込む。keywordsは正式名称(title)とは別に複数の言い回しでも
// ヒットさせるための隠しフィールド(docs/ARG-DESIGN.md 2-1節)。
// entry.exactMatch が true の場合のみ、部分一致ではなくtitle/category/keywordsの
// いずれかとの完全一致を要求する(謎解きの合言葉が、答えの一部を入力しただけで
// 偶然ヒットしてしまうのを防ぐため。2026-07-29 ユーザー指摘)。
export function filterSearchIndex(query, index) {
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
