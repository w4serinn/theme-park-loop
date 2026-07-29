// 学院祭・行事: 次回開催日までのカウントダウン表示(2026-07-30)。
// ロジックは src/logic.js の nthWeekdayOfMonth / lastWeekdayOfMonth /
// resolveEventDate / daysUntilNextEvent と同じ(file://環境でも動作する
// よう module化せずグローバルスクリプトとして複製している)。
(function () {
  function nthWeekdayOfMonth(year, month, weekday, n) {
    var firstOfMonth = new Date(year, month - 1, 1);
    var offset = (weekday - firstOfMonth.getDay() + 7) % 7;
    var day = 1 + offset + (n - 1) * 7;
    return new Date(year, month - 1, day);
  }

  function lastWeekdayOfMonth(year, month, weekday) {
    var lastOfMonth = new Date(year, month, 0);
    var offset = (lastOfMonth.getDay() - weekday + 7) % 7;
    return new Date(year, month - 1, lastOfMonth.getDate() - offset);
  }

  function resolveEventDate(rule, year) {
    if (rule.type === 'nth-weekday') {
      return nthWeekdayOfMonth(year, rule.month, rule.weekday, rule.n);
    }
    if (rule.type === 'last-weekday') {
      return lastWeekdayOfMonth(year, rule.month, rule.weekday);
    }
    return new Date(year, rule.month - 1, rule.day);
  }

  function daysUntilNextEvent(rule, today) {
    var year = today.getFullYear();
    var todayMidnight = new Date(year, today.getMonth(), today.getDate());
    var candidate = resolveEventDate(rule, year);
    if (candidate < todayMidnight) {
      candidate = resolveEventDate(rule, year + 1);
    }
    var msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((candidate.getTime() - todayMidnight.getTime()) / msPerDay);
  }

  var dateEls = document.querySelectorAll('.event-card__date[data-countdown-type]');
  if (dateEls.length === 0) { return; }

  var today = new Date();

  dateEls.forEach(function (dateEl) {
    var rule = { type: dateEl.getAttribute('data-countdown-type') };
    if (dateEl.hasAttribute('data-countdown-month')) {
      rule.month = parseInt(dateEl.getAttribute('data-countdown-month'), 10);
    }
    if (dateEl.hasAttribute('data-countdown-day')) {
      rule.day = parseInt(dateEl.getAttribute('data-countdown-day'), 10);
    }
    if (dateEl.hasAttribute('data-countdown-weekday')) {
      rule.weekday = parseInt(dateEl.getAttribute('data-countdown-weekday'), 10);
    }
    if (dateEl.hasAttribute('data-countdown-n')) {
      rule.n = parseInt(dateEl.getAttribute('data-countdown-n'), 10);
    }

    var days = daysUntilNextEvent(rule, today);
    var badge = document.createElement('span');
    badge.className = 'event-card__countdown';
    badge.textContent = days === 0 ? '本日開催' : 'あと' + days + '日';
    dateEl.appendChild(badge);
  });
}());
