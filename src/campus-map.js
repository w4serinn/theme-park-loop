(function () {
  var areas = document.querySelectorAll('.map-area');
  var panel = document.getElementById('map-panel');
  var panelHeading = document.getElementById('map-panel-heading');
  var panelDesc = document.getElementById('map-panel-desc');
  var panelLink = document.getElementById('map-panel-link');
  var guideWrap = document.getElementById('map-panel-guide');
  var guideAvatar = document.getElementById('map-panel-guide-avatar');
  var guideText = document.getElementById('map-panel-guide-text');

  // 学院案内ページの魔法生物マスコットのうち、キャンパスマップ上のエリアと
  // 対応するもの(大図書館=ホーホー、時計塔=カチカチ、天文台=ルミナ)だけ、
  // 選択時に「道案内」として一言添える。新規イラストは使わず既存の3体のみ。
  var MASCOTS = {
    'grand-library': { name: '文鎮フクロウ「ホーホー」', variant: 'owl', line: '大図書館へは、この回廊をまっすぐどうぞ。' },
    'clock-tower': { name: '歯車ネズミ「カチカチ」', variant: 'mouse', line: '時計塔まで、僕がご案内します！' },
    observatory: { name: '星兎「ルミナ」', variant: 'rabbit', line: '天文台へは、あの丘の上へ。夜はもっと綺麗ですよ。' }
  };

  function updateGuide(el) {
    if (!guideWrap || !guideAvatar || !guideText) { return; }
    var mascot = MASCOTS[el.dataset.area];
    if (!mascot) {
      guideWrap.hidden = true;
      return;
    }
    guideAvatar.className = 'campus-map__panel-guide-avatar campus-map__panel-guide-avatar--' + mascot.variant;
    guideText.textContent = mascot.name + '：' + mascot.line;
    guideWrap.hidden = false;
  }

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
    updateGuide(el);
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
