(function () {
  document.querySelectorAll('.mascot__avatar').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.getAttribute('aria-controls');
      var panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) { return; }
      var isOpen = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      panel.hidden = isOpen;
    });
  });
}());
