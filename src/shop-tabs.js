(function () {
  var tabs = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.tab-panel');

  function activate(btn) {
    tabs.forEach(function (t) {
      var selected = t === btn;
      t.setAttribute('aria-selected', selected ? 'true' : 'false');
      t.classList.toggle('is-active', selected);
      t.setAttribute('tabindex', selected ? '0' : '-1');
    });
    var target = btn.getAttribute('aria-controls');
    panels.forEach(function (p) {
      p.hidden = p.id !== target;
    });
  }

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () { activate(btn); });
  });

  var hash = window.location.hash.replace('#', '');
  if (hash) {
    var hashTarget = document.getElementById(hash);
    if (hashTarget && hashTarget.matches && hashTarget.matches('.tab-btn')) {
      activate(hashTarget);
    }
  }

  var nav = document.querySelector('.tab-nav');
  if (nav) {
    nav.addEventListener('keydown', function (e) {
      var list = Array.from(tabs);
      var current = document.querySelector('.tab-btn[aria-selected="true"]');
      var idx = list.indexOf(current);
      var next = -1;
      if (e.key === 'ArrowRight') { next = (idx + 1) % list.length; }
      else if (e.key === 'ArrowLeft') { next = (idx - 1 + list.length) % list.length; }
      else if (e.key === 'Home') { next = 0; }
      else if (e.key === 'End') { next = list.length - 1; }
      if (next !== -1) {
        activate(list[next]);
        list[next].focus();
        e.preventDefault();
      }
    });
  }
}());
