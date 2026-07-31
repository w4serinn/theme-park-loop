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

  // P27(docs/ARG-DESIGN.md 4-3節、src/logic.jsのisSpecialTicketComboと
  // 同じロジック)。合計人数がちょうど137名(学院内137個の魔法時計と同じ数)の
  // ときだけ、見積もり結果に特別な一文を添える。
  var SPECIAL_TICKET_TOTAL = 137;

  function isSpecialCombo(a, s, c, i) { return (a + s + c + i) === SPECIAL_TICKET_TOTAL; }

  var lastTotal = 0;
  var animFrame = null;
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 合計金額を「操作の結果が反映された」実感が伝わるようカウントアップで表示する。
  // prefers-reduced-motion時は即座に最終値を表示する。
  // liveRegion(#sim-result、aria-live="polite")はアニメーション中だけ一時的に
  // offにする。付けたままだと、1回のキー入力で最大24回程度書き換わる中間値が
  // すべて読み上げられてしまうため、最終値が確定した瞬間だけ読み上げさせる。
  function animateTotal(el, from, to, liveRegion) {
    if (animFrame !== null) { window.cancelAnimationFrame(animFrame); animFrame = null; }
    if (reduceMotion || from === to) {
      el.textContent = fmt(to);
      return;
    }
    if (liveRegion) { liveRegion.setAttribute('aria-live', 'off'); }
    var duration = 400;
    var start = null;
    function step(ts) {
      if (start === null) { start = ts; }
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(from + (to - from) * eased);
      el.textContent = fmt(current);
      if (progress < 1) {
        animFrame = window.requestAnimationFrame(step);
      } else {
        el.textContent = fmt(to);
        animFrame = null;
        el.classList.remove('is-updated');
        void el.offsetWidth;
        el.classList.add('is-updated');
        if (liveRegion) { liveRegion.setAttribute('aria-live', 'polite'); }
      }
    }
    animFrame = window.requestAnimationFrame(step);
  }

  function updateResult() {
    var a = getInt('sim-adults');
    var s = getInt('sim-students');
    var c = getInt('sim-children');
    var i = getInt('sim-infants');
    var result = document.getElementById('sim-result');
    if (!result) { return; }
    if (a + s + c + i === 0) { result.hidden = true; lastTotal = 0; return; }

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

    var easterNote = '';
    if (isSpecialCombo(a, s, c, i)) {
      easterNote = '<p class="sim-easter-note">ちょうど137名――学院内の魔法時計と同じ数です。正門案内係は、そんな時だけ「刻印の証」という小さな記章を渡すことがあるとか……。</p>';
    }

    result.hidden = false;
    result.innerHTML =
      '<ul class="sim-breakdown">' + lines.map(function (l) { return '<li>' + l + '</li>'; }).join('') + '</ul>' +
      familyNote +
      easterNote +
      '<p class="sim-total">合計 <strong id="sim-total-value"></strong></p>';

    var totalEl = document.getElementById('sim-total-value');
    animateTotal(totalEl, lastTotal, opt.total, result);
    lastTotal = opt.total;
  }

  var form = document.getElementById('ticket-sim');
  if (form) {
    form.addEventListener('input', updateResult);
    form.addEventListener('change', updateResult);
  }
}());
