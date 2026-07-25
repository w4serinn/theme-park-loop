(function () {
  var PRICES = { adult: 2800, student: 1800, child: 900, infant: 0, family: 7200 };

  function calcTotal(a, s, c, i) {
    return a * PRICES.adult + s * PRICES.student + c * PRICES.child + i * PRICES.infant;
  }

  function calcOptimal(a, s, c, i) {
    var regular = calcTotal(a, s, c, i);
    var sets = Math.min(Math.floor(a / 2), Math.floor(c / 2));
    if (sets === 0) { return { total: regular, familySets: 0, savings: 0 }; }
    var remA = a - sets * 2;
    var remC = c - sets * 2;
    var withFamily = sets * PRICES.family + remA * PRICES.adult + s * PRICES.student + remC * PRICES.child;
    if (withFamily < regular) { return { total: withFamily, familySets: sets, savings: regular - withFamily }; }
    return { total: regular, familySets: 0, savings: 0 };
  }

  function fmt(n) { return '¥' + n.toLocaleString('ja-JP') + '（税込）'; }

  function getInt(id) { return Math.max(0, parseInt(document.getElementById(id).value, 10) || 0); }

  function updateResult() {
    var a = getInt('sim-adults');
    var s = getInt('sim-students');
    var c = getInt('sim-children');
    var i = getInt('sim-infants');
    var result = document.getElementById('sim-result');
    if (!result) { return; }
    if (a + s + c + i === 0) { result.hidden = true; return; }

    var opt = calcOptimal(a, s, c, i);
    var lines = [];
    if (a > 0) { lines.push('大人 ' + a + '名 × ' + fmt(PRICES.adult)); }
    if (s > 0) { lines.push('学生 ' + s + '名 × ' + fmt(PRICES.student)); }
    if (c > 0) { lines.push('小人 ' + c + '名 × ' + fmt(PRICES.child)); }
    if (i > 0) { lines.push('幼児 ' + i + '名 × 無料'); }

    var familyNote = '';
    if (opt.familySets > 0) {
      familyNote = '<p class="sim-family-note">家族券' + opt.familySets + 'セット適用 →  ' + fmt(opt.savings) + ' お得！</p>';
    }

    result.hidden = false;
    result.innerHTML =
      '<ul class="sim-breakdown">' + lines.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ul>' +
      familyNote +
      '<p class="sim-total">合計 <strong>' + fmt(opt.total) + '</strong></p>';
  }

  var form = document.getElementById('ticket-sim');
  if (form) {
    form.addEventListener('input', updateResult);
    form.addEventListener('change', updateResult);
  }
}());
