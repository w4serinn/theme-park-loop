let path = window.location.pathname;
if (path.endsWith('/')) path += 'index.html';

document.querySelectorAll('.site-header__nav a').forEach((link) => {
  if (new URL(link.href).pathname === path) {
    link.classList.add('is-current');
  }
});
