(function () {
  document.querySelectorAll('.qa-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.qa-item');
      var panel = item.querySelector('.qa-panel');
      if (!panel) { return; }
      var isOpen = item.classList.contains('is-open');
      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        panel.hidden = true;
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });
  });
}());
