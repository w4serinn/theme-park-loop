(function () {
  var seasonBtns = document.querySelectorAll('[data-filter]');
  var areaBtns = document.querySelectorAll('[data-area-filter]');
  var cards = document.querySelectorAll('[data-season]');
  if (!cards.length) { return; }

  var currentSeason = 'all';
  var currentArea = 'all';

  function applyFilter() {
    cards.forEach(function (card) {
      var matchesSeason = currentSeason === 'all' || card.dataset.season === currentSeason;
      var matchesArea = currentArea === 'all' || card.dataset.area === 'all' || card.dataset.area === currentArea;
      card.hidden = !(matchesSeason && matchesArea);
    });
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
