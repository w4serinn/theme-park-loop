(function () {
  var seasonBtns = document.querySelectorAll('[data-filter]');
  var areaBtns = document.querySelectorAll('[data-area-filter]');
  var cards = document.querySelectorAll('[data-season]');
  if (!cards.length) { return; }

  var secretNote = document.querySelector('[data-secret-event-note]');

  // P90(docs/ARG-DESIGN.md 4-3節)と同じ判定(src/logic.jsのisSecretEventComboと同一)
  var SECRET_EVENT_SEASON = 'winter';
  var SECRET_EVENT_AREA = 'library';
  function isSecretEventCombo(season, area) {
    return season === SECRET_EVENT_SEASON && area === SECRET_EVENT_AREA;
  }

  var currentSeason = 'all';
  var currentArea = 'all';

  function applyFilter() {
    cards.forEach(function (card) {
      var matchesSeason = currentSeason === 'all' || card.dataset.season === currentSeason;
      var matchesArea = currentArea === 'all' || card.dataset.area === 'all' || card.dataset.area === currentArea;
      card.hidden = !(matchesSeason && matchesArea);
    });
    if (secretNote) {
      secretNote.hidden = !isSecretEventCombo(currentSeason, currentArea);
    }
  }

  seasonBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentSeason = btn.dataset.filter;
      seasonBtns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      applyFilter();
    });
  });

  areaBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      currentArea = btn.dataset.areaFilter;
      areaBtns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      applyFilter();
    });
  });
}());
