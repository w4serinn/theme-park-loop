import { test, expect, describe } from 'vitest';
import {
  buildHiddenEntryList, filterUnlockedHints, buildSecretsTree, buildFragmentDisplayList,
  TICKET_PRICES, calcTicketTotal, calcOptimalPrice, carouselNextIndex, carouselPrevIndex,
  filterSearchIndex, MIN_SEARCH_QUERY_LENGTH, addSecretToProgress, addFragmentToProgress, markFragmentUsed,
  isSearchEntryUnlocked, isCodexSelfReferenceQuery
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
    expect(tree).toEqual([{ path: 'A.html', title: 'A', children: [] }]);
  });

  test('nests a child under its visited parent', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'B.html']);
    expect(tree).toEqual([
      { path: 'A.html', title: 'A', children: [
        { path: 'B.html', title: 'B', children: [] }
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
      { path: 'B.html', title: 'B', children: [
        { path: 'C.html', title: 'C', children: [] }
      ] }
    ]);
  });

  test('a visited entry with an unmatched entry (not in hiddenEntries) is silently skipped', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'unknown.html']);
    expect(tree).toEqual([{ path: 'A.html', title: 'A', children: [] }]);
  });

  test('multiple unrelated roots stay separate', () => {
    const tree = buildSecretsTree(hiddenEntries, ['A.html', 'D.html']);
    expect(tree.map((n) => n.path).sort()).toEqual(['A.html', 'D.html']);
  });
});

describe('buildFragmentDisplayList', () => {
  const names = { F1: '刻の断片', F2: '記帳の断片' };
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
