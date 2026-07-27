import { test, expect, describe } from 'vitest';
import { TICKET_PRICES, calcTicketTotal, calcOptimalPrice, carouselNextIndex, carouselPrevIndex, filterSearchIndex } from '../src/logic.js';

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

  test('returns empty array when nothing matches', () => {
    expect(filterSearchIndex('存在しないキーワード', index)).toEqual([]);
  });
});
