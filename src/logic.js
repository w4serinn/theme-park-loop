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
