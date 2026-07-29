// 購買部: 季節限定商品だけの絞り込みフィルタ(2026-07-30)。
// ロジックは src/logic.js の shouldShowProduct と同じ(file://環境でも
// 動作するよう module化せずグローバルスクリプトとして複製している)。
(function () {
  function shouldShowProduct(isSeasonal, seasonalFilterActive) {
    return !seasonalFilterActive || isSeasonal;
  }

  var toggleBtn = document.querySelector('[data-seasonal-filter]');
  var products = document.querySelectorAll('.product-entry');
  if (!toggleBtn || !products.length) { return; }

  var active = false;

  toggleBtn.addEventListener('click', function () {
    active = !active;
    toggleBtn.classList.toggle('is-active', active);
    toggleBtn.setAttribute('aria-pressed', String(active));
    toggleBtn.textContent = active ? 'すべて表示' : '季節限定のみ表示';

    products.forEach(function (product) {
      var isSeasonal = !!product.querySelector('.product-tag--season');
      product.hidden = !shouldShowProduct(isSeasonal, active);
    });
  });
}());
