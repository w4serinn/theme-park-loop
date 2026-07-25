(function () {
  var btns = document.querySelectorAll('[data-filter]');
  var cards = document.querySelectorAll('[data-season]');
  if (!btns.length) { return; }

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var season = btn.dataset.filter;
      btns.forEach(function (b) {
        b.classList.remove('is-active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-pressed', 'true');
      cards.forEach(function (card) {
        card.hidden = !(season === 'all' || card.dataset.season === season);
      });
    });
  });
}());
