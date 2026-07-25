(function () {
  document.querySelectorAll('.event-card__trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.event-card');
      var panel = card.querySelector('.event-card__panel');
      if (!panel) { return; }
      var isOpen = card.classList.contains('is-open');
      if (isOpen) {
        card.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      } else {
        card.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });
}());
