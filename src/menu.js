(function () {
  var btn = document.querySelector('.site-header__menu-btn');
  var header = document.querySelector('.site-header');
  if (!btn || !header) return;

  btn.addEventListener('click', function () {
    var isOpen = header.classList.toggle('site-header--open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.site-header__nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      header.classList.remove('site-header--open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}());
