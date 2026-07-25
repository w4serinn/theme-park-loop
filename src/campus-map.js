(function () {
  var areas = document.querySelectorAll('.map-area');
  var panel = document.getElementById('map-panel');
  var panelHeading = document.getElementById('map-panel-heading');
  var panelDesc = document.getElementById('map-panel-desc');
  var panelLink = document.getElementById('map-panel-link');

  function selectArea(el) {
    areas.forEach(function (a) {
      a.classList.remove('is-selected');
      a.setAttribute('aria-pressed', 'false');
    });
    el.classList.add('is-selected');
    el.setAttribute('aria-pressed', 'true');
    if (panelHeading) { panelHeading.textContent = el.dataset.title || ''; }
    if (panelDesc) { panelDesc.textContent = el.dataset.desc || ''; }
    if (panelLink) { panelLink.href = el.dataset.href || '#'; }
    if (panel) { panel.hidden = false; }
  }

  areas.forEach(function (area) {
    area.addEventListener('click', function () { selectArea(area); });
    area.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectArea(area);
      }
    });
  });
}());
