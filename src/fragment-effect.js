// 断片を新しく獲得した瞬間が分かる魔法的な演出(2026-07-29 ユーザー指摘:
// 「今なんかそのページを読んで、戻ったらなんか増えてる」→明らかに何か進んだと
// わかる演出が欲しい)。各断片到達先ページから、data-fragment-id/data-found-at
// 付きで読み込む(docs/ARG-DESIGN.md 5節参照):
//   <script src="{{BASE}}src/fragment-effect.js" defer
//           data-fragment-id="F1" data-found-at="glossary/gear-cipher.html"></script>
// 新規獲得時(このページで初めてaddFragmentする瞬間)のみ演出を表示し、
// 同じページへの再訪問時には出さない(addFragment呼び出し前に、既に
// 持っているかどうかを確認しておく)。
(function () {
  var currentScript = document.currentScript;
  var id = currentScript && currentScript.getAttribute('data-fragment-id');
  var foundAt = currentScript && currentScript.getAttribute('data-found-at');
  if (!id || !foundAt || !window.CodexProgress) { return; }

  var alreadyHad = window.CodexProgress.load().fragments.some(function (f) { return f.id === id; });
  window.CodexProgress.addFragment(id, foundAt);
  if (alreadyHad) { return; }

  var banner = document.createElement('div');
  banner.className = 'fragment-effect';
  banner.setAttribute('role', 'status');

  var svgNs = 'http://www.w3.org/2000/svg';
  var glyph = document.createElementNS(svgNs, 'svg');
  glyph.setAttribute('class', 'fragment-effect__glyph');
  glyph.setAttribute('viewBox', '0 0 40 40');
  glyph.setAttribute('aria-hidden', 'true');
  [16, 10].forEach(function (r) {
    var circle = document.createElementNS(svgNs, 'circle');
    circle.setAttribute('cx', '20');
    circle.setAttribute('cy', '20');
    circle.setAttribute('r', String(r));
    circle.setAttribute('pathLength', '100');
    glyph.appendChild(circle);
  });

  var text = document.createElement('span');
  text.textContent = '……断片を手にしました。';

  banner.appendChild(glyph);
  banner.appendChild(text);
  document.body.appendChild(banner);

  banner.addEventListener('animationend', function (event) {
    if (event.target === banner) { banner.remove(); }
  });
}());
