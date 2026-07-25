(function () {
  document.querySelectorAll('.attraction-item__trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.attraction-item');
      var panel = btn.nextElementSibling;
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
