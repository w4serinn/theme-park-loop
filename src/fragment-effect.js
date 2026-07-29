// 断片を新しく獲得した瞬間が分かる魔法的な演出(2026-07-29 ユーザー指摘:
// 「今なんかそのページを読んで、戻ったらなんか増えてる」→明らかに何か進んだと
// わかる演出が欲しい)。各断片到達先ページから、data-fragment-id/data-found-at
// 付きで読み込む(docs/ARG-DESIGN.md 5節参照):
//   <script src="{{BASE}}src/fragment-effect.js" defer
//           data-fragment-id="F1" data-found-at="glossary/gear-cipher.html"></script>
// 新規獲得時(このページで初めてaddFragmentする瞬間)のみ演出を表示し、
// 同じページへの再訪問時には出さない(addFragment呼び出し前に、既に
// 持っているかどうかを確認しておく)。
//
// 第2弾(2026-07-29 ユーザー指摘: 「1つ目のバナーは好評、何を取ったか分かる
// 演出も欲しい」): 1つ目のバナー(「……断片を手にしました。」、獲得時点では
// 何を得たか伏せる)が消えた直後、2つ目のバナーで断片の個別名を明かす。
// このページ側で先にwindow.FRAGMENT_NAMES(src/fragment-names.js)を
// 読み込んでおくこと。あわせて、二重魔法陣グリフの内側の意匠を断片ごとに
// 変える(外側の円は共通、内側だけ断片ごとの図形に差し替える)。
(function () {
  var currentScript = document.currentScript;
  var id = currentScript && currentScript.getAttribute('data-fragment-id');
  var foundAt = currentScript && currentScript.getAttribute('data-found-at');
  if (!id || !foundAt || !window.CodexProgress) { return; }

  var alreadyHad = window.CodexProgress.load().fragments.some(function (f) { return f.id === id; });
  window.CodexProgress.addFragment(id, foundAt);
  if (alreadyHad) { return; }

  var svgNs = 'http://www.w3.org/2000/svg';

  // 内側の意匠(断片ごと)。未登録の断片IDは、これまで通りの円形にフォールバック
  // する(意匠を用意し忘れても壊れないようにするため)。
  var INNER_SHAPES = {
    F1: 'M28,20 L24,13.07 L16,13.07 L12,20 L16,26.93 L24,26.93 Z', // 歯車(六角形、刻の断片)
    F2: 'M20,11 L22.06,17.17 L28.56,17.22 L23.33,21.08 L25.29,27.28 L20,23.5 L14.71,27.28 L16.67,21.08 L11.44,17.22 L17.94,17.17 Z', // 星(星の断片)
    F13: 'M20,12 L28,20 L20,28 L12,20 Z' // 核・記憶の紋(本心の断片)
  };

  function buildGlyph() {
    var glyph = document.createElementNS(svgNs, 'svg');
    glyph.setAttribute('class', 'fragment-effect__glyph');
    glyph.setAttribute('viewBox', '0 0 40 40');
    glyph.setAttribute('aria-hidden', 'true');

    var outer = document.createElementNS(svgNs, 'circle');
    outer.setAttribute('cx', '20');
    outer.setAttribute('cy', '20');
    outer.setAttribute('r', '16');
    outer.setAttribute('pathLength', '100');
    glyph.appendChild(outer);

    var innerD = INNER_SHAPES[id];
    var inner = document.createElementNS(svgNs, innerD ? 'path' : 'circle');
    if (innerD) {
      inner.setAttribute('d', innerD);
    } else {
      inner.setAttribute('cx', '20');
      inner.setAttribute('cy', '20');
      inner.setAttribute('r', '10');
    }
    inner.setAttribute('pathLength', '100');
    glyph.appendChild(inner);

    return glyph;
  }

  function buildBanner(text) {
    var banner = document.createElement('div');
    banner.className = 'fragment-effect';
    banner.setAttribute('role', 'status');
    banner.appendChild(buildGlyph());

    var textEl = document.createElement('span');
    textEl.textContent = text;
    banner.appendChild(textEl);

    return banner;
  }

  var firstBanner = buildBanner('……断片を手にしました。');
  document.body.appendChild(firstBanner);

  firstBanner.addEventListener('animationend', function (event) {
    if (event.target !== firstBanner) { return; }
    firstBanner.remove();

    var name = (window.FRAGMENT_NAMES && window.FRAGMENT_NAMES[id]) || id;
    var secondBanner = buildBanner('……その名は、「' + name + '」。');
    document.body.appendChild(secondBanner);

    secondBanner.addEventListener('animationend', function (event2) {
      if (event2.target === secondBanner) { secondBanner.remove(); }
    });
  });
}());
