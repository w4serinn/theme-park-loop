import { test, expect, describe } from 'vitest';
import {
  buildHiddenEntryList, filterUnlockedHints, filterActiveHints, resolveHintPageTitle, groupHintsByHintFor, buildSecretsTree, countTreeDescendants, buildFragmentDisplayList,
  shouldShowDiscoveryBadge, isDebugResetQuery, DEBUG_RESET_QUERY, shouldShowHintLink,
  isNostionMemoryWrongCandidate, NOSTION_MEMORY_PAGE_PATH, NOSTION_MEMORY_WRONG_CANDIDATES,
  isMoonGrassWrongCandidate,
  isDebugAllQuery, DEBUG_ALL_QUERY, buildDebugGraphNodes, buildDebugGraphTree, findDebugGraphIssues,
  isDebugUnlockQuery, DEBUG_UNLOCK_QUERY,
  TICKET_PRICES, calcTicketTotal, calcOptimalPrice, isSpecialTicketCombo, SPECIAL_TICKET_TOTAL, carouselNextIndex, carouselPrevIndex,
  isSecretEventCombo, SECRET_EVENT_SEASON, SECRET_EVENT_AREA,
  filterSearchIndex, MIN_SEARCH_QUERY_LENGTH, addSecretToProgress, addFragmentToProgress, markFragmentUsed,
  isSearchEntryUnlocked, isCodexSelfReferenceQuery,
  nthWeekdayOfMonth, lastWeekdayOfMonth, resolveEventDate, daysUntilNextEvent,
  countFoundSecrets, formatDiscoveryProgressText, shouldShowSearchProgress,
  GATE_REQUIRED_FRAGMENTS, hasAllGateFragments, countGateFragments,
  isGateCipherCorrect
} from '../src/logic.js';

describe('TICKET_PRICES', () => {
  test('adult is 2800', () => { expect(TICKET_PRICES.adult).toBe(2800); });
  test('student is 1800', () => { expect(TICKET_PRICES.student).toBe(1800); });
  test('child is 900', () => { expect(TICKET_PRICES.child).toBe(900); });
  test('infant is 0', () => { expect(TICKET_PRICES.infant).toBe(0); });
  test('family set is 7200', () => { expect(TICKET_PRICES.family).toBe(7200); });
});

describe('calcTicketTotal', () => {
  test('single adult', () => {
    expect(calcTicketTotal(1, 0, 0, 0)).toBe(2800);
  });
  test('single student', () => {
    expect(calcTicketTotal(0, 1, 0, 0)).toBe(1800);
  });
  test('single child', () => {
    expect(calcTicketTotal(0, 0, 1, 0)).toBe(900);
  });
  test('infant is free', () => {
    expect(calcTicketTotal(0, 0, 0, 3)).toBe(0);
  });
  test('mixed party: 2 adults + 1 student + 1 child', () => {
    expect(calcTicketTotal(2, 1, 1, 0)).toBe(2800 * 2 + 1800 + 900);
  });
  test('all zeros returns 0', () => {
    expect(calcTicketTotal(0, 0, 0, 0)).toBe(0);
  });
  test('throws on negative adults', () => {
    expect(() => calcTicketTotal(-1, 0, 0, 0)).toThrow();
  });
  test('throws on negative children', () => {
    expect(() => calcTicketTotal(0, 0, -1, 0)).toThrow();
  });
});

describe('calcOptimalPrice', () => {
  test('no family set when adults < 2', () => {
    var r = calcOptimalPrice(1, 0, 2, 0);
    expect(r.familySets).toBe(0);
    expect(r.savings).toBe(0);
    expect(r.total).toBe(2800 + 900 * 2);
  });
  test('no family set when children < 2', () => {
    var r = calcOptimalPrice(2, 0, 1, 0);
    expect(r.familySets).toBe(0);
    expect(r.total).toBe(2800 * 2 + 900);
  });
  test('one family set: 2 adults + 2 children', () => {
    // regular: 2800*2 + 900*2 = 7400, family: 7200 → savings 200
    var r = calcOptimalPrice(2, 0, 2, 0);
    expect(r.familySets).toBe(1);
    expect(r.savings).toBe(200);
    expect(r.total).toBe(7200);
  });
  test('two family sets + extras', () => {
    // 4 adults + 5 children: 2 sets(14400) + 1 child(900) = 15300
    // regular: 4*2800 + 5*900 = 11200+4500 = 15700 → savings 400
    var r = calcOptimalPrice(4, 0, 5, 0);
    expect(r.familySets).toBe(2);
    expect(r.total).toBe(15300);
    expect(r.savings).toBe(400);
  });
  test('students not counted in family set', () => {
    // 2 adults + 2 students + 2 children → 1 family set
    var r = calcOptimalPrice(2, 2, 2, 0);
    expect(r.familySets).toBe(1);
    expect(r.total).toBe(7200 + 1800 * 2);
  });
  test('throws on negative', () => {
    expect(() => calcOptimalPrice(-1, 0, 0, 0)).toThrow();
  });
});

describe('isSpecialTicketCombo', () => {
  test('matches when the total equals the special total', () => {
    expect(isSpecialTicketCombo(SPECIAL_TICKET_TOTAL, 0, 0, 0)).toBe(true);
    expect(isSpecialTicketCombo(99, 38, 0, 0)).toBe(true);
    expect(isSpecialTicketCombo(50, 50, 37, 0)).toBe(true);
  });

  test('does not match other totals', () => {
    expect(isSpecialTicketCombo(1, 0, 0, 0)).toBe(false);
    expect(isSpecialTicketCombo(0, 0, 0, 0)).toBe(false);
    expect(isSpecialTicketCombo(SPECIAL_TICKET_TOTAL + 1, 0, 0, 0)).toBe(false);
  });
});

describe('isSecretEventCombo', () => {
  test('matches only winter × library', () => {
    expect(isSecretEventCombo(SECRET_EVENT_SEASON, SECRET_EVENT_AREA)).toBe(true);
    expect(isSecretEventCombo('winter', 'library')).toBe(true);
  });

  test('does not match other season/area combinations', () => {
    expect(isSecretEventCombo('spring', 'library')).toBe(false);
    expect(isSecretEventCombo('summer', 'library')).toBe(false);
    expect(isSecretEventCombo('autumn', 'library')).toBe(false);
    expect(isSecretEventCombo('winter', 'clock')).toBe(false);
    expect(isSecretEventCombo('winter', 'all')).toBe(false);
    expect(isSecretEventCombo('all', 'library')).toBe(false);
    expect(isSecretEventCombo('all', 'all')).toBe(false);
  });
});

describe('carouselNextIndex', () => {
  test('advances by one within range', () => {
    expect(carouselNextIndex(0, 3)).toBe(1);
    expect(carouselNextIndex(1, 3)).toBe(2);
  });
  test('wraps from last to first', () => {
    expect(carouselNextIndex(2, 3)).toBe(0);
  });
  test('total of 0 returns 0', () => {
    expect(carouselNextIndex(0, 0)).toBe(0);
  });
});

describe('carouselPrevIndex', () => {
  test('goes back by one within range', () => {
    expect(carouselPrevIndex(2, 3)).toBe(1);
    expect(carouselPrevIndex(1, 3)).toBe(0);
  });
  test('wraps from first to last', () => {
    expect(carouselPrevIndex(0, 3)).toBe(2);
  });
  test('total of 0 returns 0', () => {
    expect(carouselPrevIndex(0, 0)).toBe(0);
  });
});

describe('filterSearchIndex', () => {
  const index = [
    { path: 'exploration/alchemy-tower.html', title: '錬金術研究棟', category: '学院内探索' },
    { path: 'exploration/airship-dock.html', title: '飛行船ドック', category: '学院内探索' },
    { path: 'tickets/index.html', title: '入学願書・チケット案内', category: 'ご案内' }
  ];

  test('matches by title substring', () => {
    const results = filterSearchIndex('錬金術', index);
    expect(results).toHaveLength(1);
    expect(results[0].path).toBe('exploration/alchemy-tower.html');
  });

  test('matches by category substring', () => {
    const results = filterSearchIndex('学院内探索', index);
    expect(results).toHaveLength(2);
  });

  test('is case-insensitive for ascii text', () => {
    const asciiIndex = [{ path: 'a.html', title: 'Airship Dock', category: 'Exploration' }];
    expect(filterSearchIndex('AIRSHIP', asciiIndex)).toHaveLength(1);
  });

  test('returns empty array for empty query', () => {
    expect(filterSearchIndex('', index)).toEqual([]);
    expect(filterSearchIndex('   ', index)).toEqual([]);
  });

  test('returns empty array for a query shorter than MIN_SEARCH_QUERY_LENGTH', () => {
    const single = [{ path: 'a.html', title: 'の', category: 'カテゴリ' }];
    expect(MIN_SEARCH_QUERY_LENGTH).toBe(2);
    expect(filterSearchIndex('の', single)).toEqual([]);
  });

  test('matches once the query reaches MIN_SEARCH_QUERY_LENGTH', () => {
    expect(filterSearchIndex('学院', index)).toHaveLength(2);
  });

  test('returns empty array when nothing matches', () => {
    expect(filterSearchIndex('存在しないキーワード', index)).toEqual([]);
  });

  test('matches by keywords even when title/category do not contain the query', () => {
    const withKeywords = [
      { path: 'glossary/mythical-creatures.html', title: '魔法生物図鑑', category: '図鑑', keywords: ['ホーホー', 'カチカチ'] }
    ];
    expect(filterSearchIndex('ホーホー', withKeywords)).toHaveLength(1);
    expect(filterSearchIndex('カチカチ', withKeywords)).toHaveLength(1);
  });

  test('entries without keywords still match by title/category only', () => {
    expect(filterSearchIndex('ホーホー', index)).toEqual([]);
  });

  test('exactMatch entries do not match on partial substring', () => {
    const puzzle = [
      { path: 'glossary/gear-cipher.html', title: '光る符丁の正体', category: '図鑑', keywords: ['HAGURUMA'], exactMatch: true }
    ];
    expect(filterSearchIndex('HAGURU', puzzle)).toEqual([]);
    expect(filterSearchIndex('HAGURUMAX', puzzle)).toEqual([]);
  });

  test('exactMatch entries match on exact keyword (case-insensitive)', () => {
    const puzzle = [
      { path: 'glossary/gear-cipher.html', title: '光る符丁の正体', category: '図鑑', keywords: ['HAGURUMA'], exactMatch: true }
    ];
    expect(filterSearchIndex('haguruma', puzzle)).toHaveLength(1);
    expect(filterSearchIndex('HAGURUMA', puzzle)).toHaveLength(1);
  });

  test('exactMatch entries still match on exact title', () => {
    const puzzle = [
      { path: 'glossary/gear-cipher.html', title: '光る符丁の正体', category: '図鑑', exactMatch: true }
    ];
    expect(filterSearchIndex('光る符丁の正体', puzzle)).toHaveLength(1);
    expect(filterSearchIndex('光る符丁', puzzle)).toEqual([]);
  });
});

describe('addSecretToProgress', () => {
  test('adds a new path to an empty progress', () => {
    const result = addSecretToProgress({ secrets: [], fragments: [] }, 'glossary/mythical-creatures.html');
    expect(result.secrets).toEqual(['glossary/mythical-creatures.html']);
  });

  test('does not duplicate an already-recorded path', () => {
    const start = { secrets: ['glossary/mythical-creatures.html'], fragments: [] };
    const result = addSecretToProgress(start, 'glossary/mythical-creatures.html');
    expect(result.secrets).toEqual(['glossary/mythical-creatures.html']);
  });

  test('handles undefined progress gracefully', () => {
    const result = addSecretToProgress(undefined, 'a.html');
    expect(result.secrets).toEqual(['a.html']);
    expect(result.fragments).toEqual([]);
  });
});

describe('addFragmentToProgress', () => {
  test('adds a new fragment with foundAt and used:false', () => {
    const result = addFragmentToProgress({ secrets: [], fragments: [] }, 'F1', 'glossary/perpetual-motion.html');
    expect(result.fragments).toEqual([{ id: 'F1', foundAt: 'glossary/perpetual-motion.html', used: false }]);
  });

  test('does not duplicate an already-obtained fragment id', () => {
    const start = { secrets: [], fragments: [{ id: 'F1', foundAt: 'a.html', used: false }] };
    const result = addFragmentToProgress(start, 'F1', 'b.html');
    expect(result.fragments).toHaveLength(1);
    expect(result.fragments[0].foundAt).toBe('a.html');
  });
});

describe('markFragmentUsed', () => {
  test('marks only the matching fragment as used', () => {
    const start = {
      secrets: [],
      fragments: [
        { id: 'F1', foundAt: 'a.html', used: false },
        { id: 'F2', foundAt: 'b.html', used: false }
      ]
    };
    const result = markFragmentUsed(start, 'F2');
    expect(result.fragments).toEqual([
      { id: 'F1', foundAt: 'a.html', used: false },
      { id: 'F2', foundAt: 'b.html', used: true }
    ]);
  });
});

describe('isSearchEntryUnlocked', () => {
  test('is always unlocked when prereq is not set', () => {
    expect(isSearchEntryUnlocked({}, [])).toBe(true);
    expect(isSearchEntryUnlocked({ prereq: null }, [])).toBe(true);
  });

  test('is locked when none of the prereq paths are visited', () => {
    expect(isSearchEntryUnlocked({ prereq: ['a.html'] }, ['b.html'])).toBe(false);
  });

  test('is unlocked when at least one prereq path is visited (OR判定)', () => {
    expect(isSearchEntryUnlocked({ prereq: ['a.html', 'b.html'] }, ['b.html'])).toBe(true);
  });
});

describe('isCodexSelfReferenceQuery', () => {
  test('matches a query containing 私', () => {
    expect(isCodexSelfReferenceQuery('私')).toBe(true);
    expect(isCodexSelfReferenceQuery('私について')).toBe(true);
  });

  test('matches a query containing ノスティオン', () => {
    expect(isCodexSelfReferenceQuery('ノスティオン')).toBe(true);
    expect(isCodexSelfReferenceQuery('ノスティオンとは')).toBe(true);
  });

  test('does not match unrelated queries', () => {
    expect(isCodexSelfReferenceQuery('錬金術')).toBe(false);
  });

  test('does not match an empty query', () => {
    expect(isCodexSelfReferenceQuery('')).toBe(false);
    expect(isCodexSelfReferenceQuery('   ')).toBe(false);
  });
});

describe('buildHiddenEntryList', () => {
  const searchIndex = [
    { path: 'index.html', title: 'トップ', category: 'トップページ' },
    { path: 'glossary/a.html', title: 'A', category: '図鑑', hidden: true },
    { path: 'glossary/b.html', title: 'B', category: '図鑑', hidden: true }
  ];

  test('includes only hidden entries from searchIndex when no extras given', () => {
    const result = buildHiddenEntryList(searchIndex, []);
    expect(result.map((e) => e.path)).toEqual(['glossary/a.html', 'glossary/b.html']);
  });

  test('appends extraEntries not present in searchIndex', () => {
    const extra = { path: 'glossary/nostion-memory.html', title: '最初の記憶', category: '物知りの魔導書', hidden: true };
    const result = buildHiddenEntryList(searchIndex, [extra]);
    expect(result.map((e) => e.path)).toEqual(['glossary/a.html', 'glossary/b.html', 'glossary/nostion-memory.html']);
  });

  test('treats missing extraEntries as an empty list', () => {
    expect(buildHiddenEntryList(searchIndex).map((e) => e.path)).toEqual(['glossary/a.html', 'glossary/b.html']);
  });
});

describe('filterUnlockedHints', () => {
  const hintData = [
    { id: 'F1', requiresPage: 'glossary/apprentice-notes.html', hint: 'hint1' },
    { id: 'F2', requiresPage: 'glossary/final-entry.html', hint: 'hint2' }
  ];

  test('returns no hints when nothing has been visited', () => {
    expect(filterUnlockedHints(hintData, [])).toEqual([]);
  });

  test('returns only hints whose requiresPage has been visited', () => {
    const result = filterUnlockedHints(hintData, ['glossary/apprentice-notes.html']);
    expect(result.map((e) => e.id)).toEqual(['F1']);
  });

  test('returns all hints when every requiresPage has been visited', () => {
    const visited = ['glossary/apprentice-notes.html', 'glossary/final-entry.html'];
    expect(filterUnlockedHints(hintData, visited).map((e) => e.id)).toEqual(['F1', 'F2']);
  });

  test('is unaffected by unrelated visited paths', () => {
    expect(filterUnlockedHints(hintData, ['glossary/mythical-creatures.html'])).toEqual([]);
  });

  test('unlocks an OR-array requiresPage when only one of the candidates is visited', () => {
    const orHintData = [
      { requiresPage: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'], hint: 'hint3' }
    ];
    expect(filterUnlockedHints(orHintData, ['glossary/starmap-fragments.html'])).toHaveLength(1);
    expect(filterUnlockedHints(orHintData, ['glossary/mythical-creatures.html'])).toHaveLength(1);
    expect(filterUnlockedHints(orHintData, ['glossary/dueling-champions.html'])).toEqual([]);
  });

  test('always unlocks an entry with no requiresPage (root-page hint)', () => {
    const rootHintData = [{ hintFor: 'glossary/mythical-creatures.html', hint: 'hint4' }];
    expect(filterUnlockedHints(rootHintData, [])).toHaveLength(1);
    expect(filterUnlockedHints(rootHintData, ['glossary/dueling-champions.html'])).toHaveLength(1);
  });
});

describe('filterActiveHints', () => {
  const hintData = [
    { hintFor: 'guide/index.html', leadsTo: 'glossary/mythical-creatures.html', hint: 'hint1' },
    {
      requiresPage: 'glossary/perpetual-motion.html',
      hintFor: 'glossary/perpetual-motion.html',
      leadsTo: 'glossary/apprentice-notes.html',
      hint: 'hint2'
    }
  ];

  test('keeps an unlocked hint whose target has not been found yet', () => {
    const result = filterActiveHints(hintData, ['glossary/perpetual-motion.html']);
    expect(result.map((e) => e.hint)).toEqual(['hint1', 'hint2']);
  });

  test('removes a hint once its leadsTo page has been found', () => {
    const result = filterActiveHints(hintData, ['glossary/perpetual-motion.html', 'glossary/mythical-creatures.html']);
    expect(result.map((e) => e.hint)).toEqual(['hint2']);
  });

  test('still respects the requiresPage gate (locked hints stay hidden even if leadsTo is unset)', () => {
    const result = filterActiveHints(hintData, []);
    expect(result.map((e) => e.hint)).toEqual(['hint1']);
  });

  test('keeps an entry with no leadsTo regardless of visitedPaths', () => {
    const noTargetHint = [{ hintFor: 'guide/index.html', hint: 'hint3' }];
    expect(filterActiveHints(noTargetHint, ['glossary/mythical-creatures.html'])).toHaveLength(1);
  });
});

describe('resolveHintPageTitle', () => {
  const searchIndex = [
    { path: 'glossary/apprentice-notes.html', title: '見習い整備士の手記' },
    { path: 'glossary/final-entry.html', title: '記録帳、最後の頁' },
    { path: 'glossary/mythical-creatures.html', title: '魔法生物図鑑' },
    { path: 'glossary/starmap-fragments.html', title: '魔導88星座' }
  ];
  const extraEntries = [{ path: 'glossary/nostion-memory.html', title: '最初の記憶' }];

  test('resolves a title from the main search index', () => {
    expect(resolveHintPageTitle('glossary/apprentice-notes.html', searchIndex, extraEntries))
      .toBe('見習い整備士の手記');
  });

  test('resolves a title from extraEntries when not in the search index', () => {
    expect(resolveHintPageTitle('glossary/nostion-memory.html', searchIndex, extraEntries))
      .toBe('最初の記憶');
  });

  test('falls back to the raw path when no title is found', () => {
    expect(resolveHintPageTitle('glossary/unknown.html', searchIndex, extraEntries))
      .toBe('glossary/unknown.html');
  });

  test('joins multiple titles with " / " when path is an array', () => {
    expect(resolveHintPageTitle(
      ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'], searchIndex, extraEntries
    )).toBe('魔法生物図鑑 / 魔導88星座');
  });
});

describe('groupHintsByHintFor', () => {
  const searchIndex = [
    { path: 'exploration/clock-tower.html', title: '時計塔' },
    { path: 'guide/index.html', title: '学院案内' }
  ];

  test('keeps distinct hintFor values as separate groups', () => {
    const hints = [
      { hintFor: 'exploration/clock-tower.html', hint: 'hint1' },
      { hintFor: 'guide/index.html', hint: 'hint2' }
    ];
    const groups = groupHintsByHintFor(hints, searchIndex, []);
    expect(groups).toEqual([
      { heading: '時計塔', hints: ['hint1'] },
      { heading: '学院案内', hints: ['hint2'] }
    ]);
  });

  test('merges entries that share the same hintFor into one group', () => {
    const hints = [
      { hintFor: 'exploration/clock-tower.html', hint: 'hint1' },
      { hintFor: 'exploration/clock-tower.html', hint: 'hint2' }
    ];
    const groups = groupHintsByHintFor(hints, searchIndex, []);
    expect(groups).toEqual([
      { heading: '時計塔', hints: ['hint1', 'hint2'] }
    ]);
  });

  test('preserves the order groups first appear in', () => {
    const hints = [
      { hintFor: 'guide/index.html', hint: 'hint1' },
      { hintFor: 'exploration/clock-tower.html', hint: 'hint2' },
      { hintFor: 'guide/index.html', hint: 'hint3' }
    ];
    const groups = groupHintsByHintFor(hints, searchIndex, []);
    expect(groups.map((g) => g.heading)).toEqual(['学院案内', '時計塔']);
    expect(groups[0].hints).toEqual(['hint1', 'hint3']);
  });
});

describe('buildSecretsTree', () => {
  const hiddenEntries = [
    { path: 'A.html', title: 'A', hidden: true },
    { path: 'B.html', title: 'B', hidden: true, prereq: ['A.html'] },
    { path: 'C.html', title: 'C', hidden: true, prereq: ['A.html', 'B.html'] },
    { path: 'D.html', title: 'D', hidden: true }
  ];

  test('returns an empty array when nothing is visited', () => {
    expect(buildSecretsTree(hiddenEntries, [])).toEqual([]);
  });

  test('places a prereq-less entry as a root', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html']);
    expect(tree).toEqual([{ path: 'A.html', title: 'A', children: [], descendantCount: 0 }]);
  });

  test('nests a child under its visited parent', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'B.html']);
    expect(tree).toEqual([
      { path: 'A.html', title: 'A', descendantCount: 1, children: [
        { path: 'B.html', title: 'B', children: [], descendantCount: 0 }
      ] }
    ]);
  });

  test('attaches to the most recently visited prereq when multiple parents qualify (mesh structure)', () => {
    // A visited, then B (via A), then C (whose prereq is [A, B]) — C should
    // nest under B (the more specific, more recently visited parent), not A.
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'B.html', 'C.html']);
    expect(tree[0].children[0].path).toBe('B.html');
    expect(tree[0].children[0].children.map((n) => n.path)).toEqual(['C.html']);
  });

  test('does not reveal an unvisited parent candidate (mesh structure, only one parent visited)', () => {
    // C.html has prereq [A.html, B.html]; only B.html is visited, not A.html.
    // C should nest under the visited B, and A must not appear anywhere.
    const tree = buildSecretsTree(hiddenEntries, ['B.html', 'C.html']);
    expect(tree).toEqual([
      { path: 'B.html', title: 'B', descendantCount: 1, children: [
        { path: 'C.html', title: 'C', children: [], descendantCount: 0 }
      ] }
    ]);
  });

  test('a visited entry with an unmatched entry (not in hiddenEntries) is silently skipped', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'unknown.html']);
    expect(tree).toEqual([{ path: 'A.html', title: 'A', children: [], descendantCount: 0 }]);
  });

  test('multiple unrelated roots stay separate', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'D.html']);
    expect(tree.map((n) => n.path).sort()).toEqual(['A.html', 'D.html']);
  });

  test('parent attachment is stable and does not retroactively change when a later-visited sibling candidate appears (2026-07-29 bug fix)', () => {
    // P6-like node whose prereq is an OR of two independent roots (P1, P3).
    const entries = [
      { path: 'P1.html', title: 'P1', hidden: true },
      { path: 'P3.html', title: 'P3', hidden: true },
      { path: 'P6.html', title: 'P6', hidden: true, prereq: ['P1.html', 'P3.html'] }
    ];

    // Visit order: P3, then P6. Only P3 was visited so far, so P6 must
    // attach under P3.
    const treeBefore = buildSecretsTree(entries, ['P3.html', 'P6.html']);
    expect(treeBefore).toEqual([
      { path: 'P3.html', title: 'P3', descendantCount: 1, children: [
        { path: 'P6.html', title: 'P6', children: [], descendantCount: 0 }
      ] }
    ]);

    // P1 is visited afterward. P6 must remain attached under P3 — it must
    // not retroactively move to P1, since P1 was not yet known when P6 was
    // first reached.
    const treeAfter = buildSecretsTree(entries, ['P3.html', 'P6.html', 'P1.html']);
    expect(treeAfter.map((n) => n.path).sort()).toEqual(['P1.html', 'P3.html']);
    const p3Node = treeAfter.find((n) => n.path === 'P3.html');
    expect(p3Node.children.map((n) => n.path)).toEqual(['P6.html']);
    const p1Node = treeAfter.find((n) => n.path === 'P1.html');
    expect(p1Node.children).toEqual([]);
  });

  test('descendantCount reflects the full nested chain, not just direct children (2026-07-30 user feedback)', () => {
    // starmap-fragments → first-astronomer → final-entry → shooting-star
    const entries = [
      { path: 'starmap-fragments.html', title: '魔導88星座', hidden: true },
      { path: 'first-astronomer.html', title: 'シベル・オーレン', hidden: true, prereq: ['starmap-fragments.html'] },
      { path: 'final-entry.html', title: '観測記録帳', hidden: true, prereq: ['first-astronomer.html'] },
      { path: 'shooting-star.html', title: '流れ星', hidden: true, prereq: ['final-entry.html'] }
    ];
    const tree = buildSecretsTree(entries, [
      'starmap-fragments.html', 'first-astronomer.html', 'final-entry.html', 'shooting-star.html'
    ]);
    const root = tree[0];
    expect(root.descendantCount).toBe(3);
    expect(root.children[0].descendantCount).toBe(2);
    expect(root.children[0].children[0].descendantCount).toBe(1);
    expect(root.children[0].children[0].children[0].descendantCount).toBe(0);
  });
});

describe('countTreeDescendants', () => {
  test('returns 0 for a leaf node', () => {
    expect(countTreeDescendants({ children: [] })).toBe(0);
  });

  test('counts direct children only when there is no further nesting', () => {
    const node = { children: [{ children: [] }, { children: [] }] };
    expect(countTreeDescendants(node)).toBe(2);
  });

  test('counts nested descendants beyond direct children', () => {
    const node = { children: [{ children: [{ children: [{ children: [] }] }] }] };
    expect(countTreeDescendants(node)).toBe(3);
  });
});

describe('shouldShowDiscoveryBadge', () => {
  test('shows the badge for a hidden entry not yet visited', () => {
    expect(shouldShowDiscoveryBadge({ path: 'a.html', hidden: true }, [])).toBe(true);
  });

  test('hides the badge for a hidden entry already visited', () => {
    expect(shouldShowDiscoveryBadge({ path: 'a.html', hidden: true }, ['a.html'])).toBe(false);
  });

  test('hides the badge for a non-hidden entry', () => {
    expect(shouldShowDiscoveryBadge({ path: 'a.html' }, [])).toBe(false);
  });

  test('is unaffected by unrelated visited paths', () => {
    expect(shouldShowDiscoveryBadge({ path: 'a.html', hidden: true }, ['b.html'])).toBe(true);
  });
});

describe('isDebugResetQuery', () => {
  test('matches the exact debug command', () => {
    expect(isDebugResetQuery(DEBUG_RESET_QUERY)).toBe(true);
  });

  test('trims surrounding whitespace', () => {
    expect(isDebugResetQuery('  ' + DEBUG_RESET_QUERY + '  ')).toBe(true);
  });

  test('does not match an ordinary search query', () => {
    expect(isDebugResetQuery('錬金術')).toBe(false);
  });

  test('does not match a query that merely contains the command', () => {
    expect(isDebugResetQuery(DEBUG_RESET_QUERY + 'です')).toBe(false);
  });

  test('does not match empty input', () => {
    expect(isDebugResetQuery('')).toBe(false);
    expect(isDebugResetQuery(undefined)).toBe(false);
  });
});

describe('isDebugAllQuery', () => {
  test('matches the exact debug command', () => {
    expect(isDebugAllQuery(DEBUG_ALL_QUERY)).toBe(true);
  });

  test('trims surrounding whitespace', () => {
    expect(isDebugAllQuery('  ' + DEBUG_ALL_QUERY + '  ')).toBe(true);
  });

  test('does not match an ordinary search query', () => {
    expect(isDebugAllQuery('錬金術')).toBe(false);
  });

  test('does not match a query that merely contains the command', () => {
    expect(isDebugAllQuery(DEBUG_ALL_QUERY + 'です')).toBe(false);
  });

  test('does not match empty input', () => {
    expect(isDebugAllQuery('')).toBe(false);
    expect(isDebugAllQuery(undefined)).toBe(false);
  });
});

describe('isDebugUnlockQuery', () => {
  test('matches the exact debug command', () => {
    expect(isDebugUnlockQuery(DEBUG_UNLOCK_QUERY)).toBe(true);
  });

  test('trims surrounding whitespace', () => {
    expect(isDebugUnlockQuery('  ' + DEBUG_UNLOCK_QUERY + '  ')).toBe(true);
  });

  test('does not match an ordinary search query', () => {
    expect(isDebugUnlockQuery('錬金術')).toBe(false);
  });

  test('does not match a query that merely contains the command', () => {
    expect(isDebugUnlockQuery(DEBUG_UNLOCK_QUERY + 'です')).toBe(false);
  });

  test('does not match empty input', () => {
    expect(isDebugUnlockQuery('')).toBe(false);
    expect(isDebugUnlockQuery(undefined)).toBe(false);
  });

  test('is distinct from the reset and all commands', () => {
    expect(DEBUG_UNLOCK_QUERY).not.toBe(DEBUG_RESET_QUERY);
    expect(DEBUG_UNLOCK_QUERY).not.toBe(DEBUG_ALL_QUERY);
  });
});

describe('buildDebugGraphNodes', () => {
  const searchIndex = [
    { path: 'glossary/root.html', title: 'Root', category: '図鑑', hidden: true, keywords: ['ルート'], exactMatch: true },
    { path: 'glossary/flavor.html', title: 'Flavor', category: '図鑑', hidden: true, keywords: ['フレーバー'], prereq: ['glossary/root.html'], exactMatch: true },
    { path: 'index.html', title: 'Top', category: 'トップ', hidden: false }
  ];
  const hintData = [
    { hintFor: 'exploration/index.html', leadsTo: 'glossary/root.html', hint: 'ヒントA' },
    { hintFor: ['a.html', 'b.html'], leadsTo: 'glossary/flavor.html', hint: 'ヒントB' }
  ];

  test('only includes hidden entries', () => {
    const nodes = buildDebugGraphNodes(searchIndex, hintData);
    expect(nodes.map((n) => n.path)).toEqual(['glossary/root.html', 'glossary/flavor.html']);
  });

  test('attaches incoming hints with normalized sources array', () => {
    const nodes = buildDebugGraphNodes(searchIndex, hintData);
    const flavor = nodes.find((n) => n.path === 'glossary/flavor.html');
    expect(flavor.incomingHints).toEqual([{ sources: ['a.html', 'b.html'], hint: 'ヒントB' }]);
  });

  test('entries with no matching hint get an empty incomingHints array', () => {
    const nodes = buildDebugGraphNodes(searchIndex, []);
    expect(nodes[0].incomingHints).toEqual([]);
  });

  test('handles missing searchIndex/hintData gracefully', () => {
    expect(buildDebugGraphNodes(undefined, undefined)).toEqual([]);
  });
});

describe('buildDebugGraphTree', () => {
  test('groups flavor nodes under their prereq root', () => {
    const nodes = [
      { path: 'root.html', prereq: [], children: undefined, title: 'Root', category: 'c', keywords: [], exactMatch: false, incomingHints: [] },
      { path: 'flavor.html', prereq: ['root.html'], children: undefined, title: 'Flavor', category: 'c', keywords: [], exactMatch: false, incomingHints: [] }
    ];
    const tree = buildDebugGraphTree(nodes);
    expect(tree).toHaveLength(1);
    expect(tree[0].path).toBe('root.html');
    expect(tree[0].children.map((c) => c.path)).toEqual(['flavor.html']);
  });

  test('a node with multiple prereqs appears under each parent (network structure)', () => {
    const nodes = [
      { path: 'a.html', prereq: [], title: 'A', category: 'c', keywords: [], exactMatch: false, incomingHints: [] },
      { path: 'b.html', prereq: [], title: 'B', category: 'c', keywords: [], exactMatch: false, incomingHints: [] },
      { path: 'c.html', prereq: ['a.html', 'b.html'], title: 'C', category: 'c', keywords: [], exactMatch: false, incomingHints: [] }
    ];
    const tree = buildDebugGraphTree(nodes);
    expect(tree).toHaveLength(2);
    expect(tree[0].children.map((c) => c.path)).toEqual(['c.html']);
    expect(tree[1].children.map((c) => c.path)).toEqual(['c.html']);
  });

  test('handles an empty node list', () => {
    expect(buildDebugGraphTree([])).toEqual([]);
  });

  // 2026-07-30 バグ修正の再発防止(P53→P54→P55のような3段チェーンで、
  // 孫ノードがchildrenプロパティを持たずTypeErrorになっていた)。
  test('a three-level chain (root -> flavor -> flavor) exposes children at every depth', () => {
    const nodes = [
      { path: 'p53.html', prereq: [], title: 'P53', category: 'c', keywords: [], exactMatch: false, incomingHints: [] },
      { path: 'p54.html', prereq: ['p53.html'], title: 'P54', category: 'c', keywords: [], exactMatch: false, incomingHints: [] },
      { path: 'p55.html', prereq: ['p54.html'], title: 'P55', category: 'c', keywords: [], exactMatch: false, incomingHints: [] }
    ];
    const tree = buildDebugGraphTree(nodes);
    expect(tree).toHaveLength(1);
    const flavor = tree[0].children[0];
    expect(flavor.path).toBe('p54.html');
    expect(flavor.children).toBeDefined();
    expect(flavor.children.map((c) => c.path)).toEqual(['p55.html']);
    expect(flavor.children[0].children).toEqual([]);
  });
});

describe('findDebugGraphIssues', () => {
  test('flags a node with no incoming hints', () => {
    const nodes = [
      { path: 'orphan.html', title: 'Orphan', prereq: [], incomingHints: [] }
    ];
    const issues = findDebugGraphIssues(nodes);
    expect(issues).toEqual([{ path: 'orphan.html', title: 'Orphan', type: 'no-hint' }]);
  });

  test('flags a dangling prereq reference', () => {
    const nodes = [
      { path: 'a.html', title: 'A', prereq: ['missing.html'], incomingHints: [{ sources: ['x.html'], hint: 'h' }] }
    ];
    const issues = findDebugGraphIssues(nodes);
    expect(issues).toEqual([{ path: 'a.html', title: 'A', type: 'dangling-prereq', detail: 'missing.html' }]);
  });

  test('a well-formed node produces no issues', () => {
    const nodes = [
      { path: 'a.html', title: 'A', prereq: [], incomingHints: [{ sources: ['x.html'], hint: 'h' }] },
      { path: 'b.html', title: 'B', prereq: ['a.html'], incomingHints: [{ sources: ['a.html'], hint: 'h2' }] }
    ];
    expect(findDebugGraphIssues(nodes)).toEqual([]);
  });

  test('handles an empty node list', () => {
    expect(findDebugGraphIssues([])).toEqual([]);
  });

  // 2026-07-30 バグ修正の再発防止: P91(glossary/nostion-memory.html)は
  // 意図的にSEARCH_INDEXへ登録していない特別ページなので、これをprereqとする
  // エントリはdangling-prereqとして誤検知してはならない。
  test('does not flag a prereq referencing the known P91 special page', () => {
    const nodes = [
      { path: 'yorishiro-echo.html', title: 'よりしろ', prereq: ['glossary/nostion-memory.html'], incomingHints: [{ sources: ['x.html'], hint: 'h' }] }
    ];
    expect(findDebugGraphIssues(nodes)).toEqual([]);
  });
});

describe('shouldShowHintLink', () => {
  test('hidden when no secrets have been found', () => {
    expect(shouldShowHintLink([])).toBe(false);
  });

  test('hidden when visitedPaths is not provided', () => {
    expect(shouldShowHintLink(undefined)).toBe(false);
  });

  test('shown once at least one secret has been found', () => {
    expect(shouldShowHintLink(['glossary/mythical-creatures.html'])).toBe(true);
  });
});

describe('isNostionMemoryWrongCandidate', () => {
  const visited = [NOSTION_MEMORY_PAGE_PATH];

  test('matches a known wrong candidate when the page has been visited', () => {
    expect(isNostionMemoryWrongCandidate(NOSTION_MEMORY_WRONG_CANDIDATES[0], visited)).toBe(true);
  });

  test('does not match before the page has been visited', () => {
    expect(isNostionMemoryWrongCandidate(NOSTION_MEMORY_WRONG_CANDIDATES[0], [])).toBe(false);
  });

  test('does not match the correct answer', () => {
    expect(isNostionMemoryWrongCandidate('よりしろ', visited)).toBe(false);
  });

  test('does not match an unrelated query', () => {
    expect(isNostionMemoryWrongCandidate('錬金術', visited)).toBe(false);
  });
});

describe('isMoonGrassWrongCandidate', () => {
  test('matches the confusable decoy plant name', () => {
    expect(isMoonGrassWrongCandidate('月光草')).toBe(true);
  });

  test('does not match the correct answer', () => {
    expect(isMoonGrassWrongCandidate('月草')).toBe(false);
  });

  test('does not match an unrelated query', () => {
    expect(isMoonGrassWrongCandidate('錬金術')).toBe(false);
  });

  test('does not require any prior page visit (unlike isNostionMemoryWrongCandidate)', () => {
    expect(isMoonGrassWrongCandidate('月光草')).toBe(true);
  });
});

describe('nthWeekdayOfMonth', () => {
  test('finds the 1st Monday of January 2024 (Jan 1, 2024 is itself a Monday)', () => {
    const result = nthWeekdayOfMonth(2024, 1, 1, 1);
    expect(result.getFullYear()).toBe(2024);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1);
  });

  test('finds the 1st Saturday of April 2026 (April 1, 2026 is a Wednesday)', () => {
    const result = nthWeekdayOfMonth(2026, 4, 6, 1);
    expect(result.getDay()).toBe(6);
    expect(result.getMonth()).toBe(3);
    expect(result.getDate()).toBeGreaterThanOrEqual(1);
    expect(result.getDate()).toBeLessThanOrEqual(7);
  });
});

describe('lastWeekdayOfMonth', () => {
  test('finds the last Monday of January 2024', () => {
    const result = lastWeekdayOfMonth(2024, 1, 1);
    expect(result.getDay()).toBe(1);
    expect(result.getDate()).toBe(29);
  });

  test('finds the last Saturday of July', () => {
    const result = lastWeekdayOfMonth(2026, 7, 6);
    expect(result.getDay()).toBe(6);
    expect(result.getMonth()).toBe(6);
  });
});

describe('resolveEventDate', () => {
  test('resolves a fixed month/day rule', () => {
    const result = resolveEventDate({ type: 'fixed', month: 1, day: 1 }, 2026);
    expect(result.getMonth()).toBe(0);
    expect(result.getDate()).toBe(1);
  });

  test('resolves an nth-weekday rule', () => {
    const result = resolveEventDate({ type: 'nth-weekday', month: 4, weekday: 6, n: 1 }, 2026);
    expect(result.getDay()).toBe(6);
  });

  test('resolves a last-weekday rule', () => {
    const result = resolveEventDate({ type: 'last-weekday', month: 7, weekday: 6 }, 2026);
    expect(result.getDay()).toBe(6);
  });
});

describe('daysUntilNextEvent', () => {
  test('returns 0 when today is the event day', () => {
    const today = new Date(2026, 0, 1);
    expect(daysUntilNextEvent({ type: 'fixed', month: 1, day: 1 }, today)).toBe(0);
  });

  test('returns a positive count when the event is still ahead this year', () => {
    const today = new Date(2025, 11, 31);
    expect(daysUntilNextEvent({ type: 'fixed', month: 1, day: 1 }, today)).toBe(1);
  });

  test('rolls over to next year once this year\'s date has passed', () => {
    const today = new Date(2026, 0, 2);
    expect(daysUntilNextEvent({ type: 'fixed', month: 1, day: 1 }, today)).toBe(364);
  });

  test('ignores time-of-day when comparing dates', () => {
    const today = new Date(2026, 0, 1, 23, 59);
    expect(daysUntilNextEvent({ type: 'fixed', month: 1, day: 1 }, today)).toBe(0);
  });
});

describe('countFoundSecrets', () => {
  const hiddenEntries = [
    { path: 'glossary/mythical-creatures.html' },
    { path: 'glossary/perpetual-motion.html' },
    { path: 'glossary/moon-grass.html' }
  ];

  test('counts only visited paths that are actually hidden entries', () => {
    const visited = ['glossary/mythical-creatures.html', 'index.html', 'glossary/moon-grass.html'];
    expect(countFoundSecrets(hiddenEntries, visited)).toBe(2);
  });

  test('returns 0 when nothing has been visited', () => {
    expect(countFoundSecrets(hiddenEntries, [])).toBe(0);
  });

  test('treats a missing visitedPaths argument as empty', () => {
    expect(countFoundSecrets(hiddenEntries, undefined)).toBe(0);
  });
});

describe('formatDiscoveryProgressText', () => {
  test('formats the count into the expected sentence', () => {
    expect(formatDiscoveryProgressText(3)).toBe('学院の秘密を3件発見しました');
  });

  test('formats zero the same way (caller is responsible for hiding it)', () => {
    expect(formatDiscoveryProgressText(0)).toBe('学院の秘密を0件発見しました');
  });
});

describe('shouldShowSearchProgress', () => {
  test('hides when nothing has been found yet', () => {
    expect(shouldShowSearchProgress(0, false)).toBe(false);
  });

  test('shows once something has been found and P91 is not yet achieved', () => {
    expect(shouldShowSearchProgress(2, false)).toBe(true);
  });

  test('hides once P91 is achieved, even with a positive count', () => {
    expect(shouldShowSearchProgress(5, true)).toBe(false);
  });
});

describe('buildFragmentDisplayList', () => {
  const names = { F1: '刻の断片', F2: '星の断片' };
  const hiddenEntries = [
    { path: 'glossary/gear-cipher.html', title: '光る符丁の正体', hidden: true },
    { path: 'glossary/shooting-star.html', title: '流れ星、という言葉', hidden: true }
  ];

  test('attaches the source page title from foundAt', () => {
    const fragments = [{ id: 'F1', foundAt: 'glossary/gear-cipher.html', used: false }];
    const result = buildFragmentDisplayList(fragments, names, hiddenEntries);
    expect(result).toEqual([{
      id: 'F1', name: '刻の断片', used: false,
      sourcePath: 'glossary/gear-cipher.html', sourceTitle: '光る符丁の正体'
    }]);
  });

  test('falls back to the raw id when no display name is registered', () => {
    const fragments = [{ id: 'F99', foundAt: 'glossary/gear-cipher.html', used: false }];
    const result = buildFragmentDisplayList(fragments, names, hiddenEntries);
    expect(result[0].name).toBe('F99');
  });

  test('leaves sourcePath/sourceTitle null when foundAt has no matching entry', () => {
    const fragments = [{ id: 'F1', foundAt: 'glossary/unknown.html', used: false }];
    const result = buildFragmentDisplayList(fragments, names, hiddenEntries);
    expect(result[0].sourcePath).toBeNull();
    expect(result[0].sourceTitle).toBeNull();
  });

  test('preserves the used flag', () => {
    const fragments = [{ id: 'F2', foundAt: 'glossary/shooting-star.html', used: true }];
    const result = buildFragmentDisplayList(fragments, names, hiddenEntries);
    expect(result[0].used).toBe(true);
  });

  test('returns an empty array for no fragments', () => {
    expect(buildFragmentDisplayList([], names, hiddenEntries)).toEqual([]);
  });
});

describe('hasAllGateFragments / countGateFragments', () => {
  test('hasAllGateFragments is true only when all 10 required fragments are owned', () => {
    expect(hasAllGateFragments(GATE_REQUIRED_FRAGMENTS)).toBe(true);
    expect(hasAllGateFragments(GATE_REQUIRED_FRAGMENTS.slice(0, 9))).toBe(false);
    expect(hasAllGateFragments([])).toBe(false);
  });

  test('hasAllGateFragments ignores non-required fragments (F2/F6/F9/F10 intermediates)', () => {
    const owned = GATE_REQUIRED_FRAGMENTS.concat(['F2', 'F6', 'F9', 'F10']);
    expect(hasAllGateFragments(owned)).toBe(true);
  });

  test('countGateFragments counts only required fragments actually owned', () => {
    expect(countGateFragments([])).toBe(0);
    expect(countGateFragments(['F1', 'F3'])).toBe(2);
    expect(countGateFragments(['F1', 'F2', 'F6'])).toBe(1);
    expect(countGateFragments(GATE_REQUIRED_FRAGMENTS)).toBe(10);
  });
});

describe('isGateCipherCorrect', () => {
  test('matches the Finlay cipher answer case-insensitively with surrounding whitespace', () => {
    expect(isGateCipherCorrect('KAGI', 'finlay')).toBe(true);
    expect(isGateCipherCorrect('kagi', 'finlay')).toBe(true);
    expect(isGateCipherCorrect('  Kagi  ', 'finlay')).toBe(true);
  });

  test('matches the eight-symbol cipher answer', () => {
    expect(isGateCipherCorrect('TOKI', 'eightSymbol')).toBe(true);
    expect(isGateCipherCorrect('toki', 'eightSymbol')).toBe(true);
  });

  test('rejects wrong answers and unknown answer keys', () => {
    expect(isGateCipherCorrect('TOKI', 'finlay')).toBe(false);
    expect(isGateCipherCorrect('KAGI', 'eightSymbol')).toBe(false);
    expect(isGateCipherCorrect('KAGI', 'unknown')).toBe(false);
    expect(isGateCipherCorrect('', 'finlay')).toBe(false);
  });
});
