(function () {
  var AUTOPLAY_MS = 6000;

  function nextIndex(current, total) {
    if (total <= 0) { return 0; }
    return (current + 1 + total) % total;
  }

  function prevIndex(current, total) {
    if (total <= 0) { return 0; }
    return (current - 1 + total) % total;
  }

  function init(root) {
    var list = root.querySelector('.highlight-list');
    var slides = list ? Array.prototype.slice.call(list.querySelectorAll('.highlight-card')) : [];
    if (!list || slides.length < 2) { return; }

    list.classList.add('is-carousel');

    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var controls = document.createElement('div');
    controls.className = 'highlight-carousel__controls';

    var prevBtn = document.createElement('button');
    prevBtn.type = 'button';
    prevBtn.className = 'highlight-carousel__arrow highlight-carousel__arrow--prev';
    prevBtn.setAttribute('aria-label', '前の体験を表示');
    prevBtn.textContent = '‹';

    var nextBtn = document.createElement('button');
    nextBtn.type = 'button';
    nextBtn.className = 'highlight-carousel__arrow highlight-carousel__arrow--next';
    nextBtn.setAttribute('aria-label', '次の体験を表示');
    nextBtn.textContent = '›';

    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'highlight-carousel__dots';

    var dots = slides.map(function (slide, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'highlight-carousel__dot';
      dot.setAttribute('aria-label', (i + 1) + '番目の体験を表示');
      dotsWrap.appendChild(dot);
      return dot;
    });

    controls.appendChild(prevBtn);
    controls.appendChild(dotsWrap);
    controls.appendChild(nextBtn);
    root.appendChild(controls);

    var current = 0;
    var timer = null;

    function render(index) {
      slides.forEach(function (slide, i) {
        slide.hidden = i !== index;
      });
      dots.forEach(function (dot, i) {
        var isActive = i === index;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
      current = index;
    }

    function goTo(index) { render(index); }
    function goNext() { goTo(nextIndex(current, slides.length)); }
    function goPrev() { goTo(prevIndex(current, slides.length)); }

    function stopTimer() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    function startTimer() {
      if (reduceMotion) { return; }
      stopTimer();
      timer = window.setInterval(goNext, AUTOPLAY_MS);
    }

    prevBtn.addEventListener('click', function () { goPrev(); startTimer(); });
    nextBtn.addEventListener('click', function () { goNext(); startTimer(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { goTo(i); startTimer(); });
    });

    root.addEventListener('mouseenter', stopTimer);
    root.addEventListener('mouseleave', startTimer);
    root.addEventListener('focusin', stopTimer);
    root.addEventListener('focusout', function (e) {
      if (!root.contains(e.relatedTarget)) { startTimer(); }
    });

    render(0);
    startTimer();
  }

  document.querySelectorAll('.highlight-carousel').forEach(init);
}());
