// news.jsonの1エントリから、実際に表示する文言を決定する純粋関数。
// build.js(HTML生成)と update-news.js の両方から使われる想定だが、
// ロジック自体はファイルシステムやgitに依存しないため、単体でテストできる。

/**
 * @param {{ title: string, note?: string|null }} entry
 * @returns {string} 表示する文言(HTMLエスケープ前の生テキスト)
 */
export function newsEntryLabel(entry) {
  if (entry.note) return entry.note;
  return `${entry.title}を公開しました`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// data/news.json の配列全体から、トップページに差し込む更新履歴HTMLを組み立てる。
// 件数の上限は設けない(全件表示)。件数が多い場合はCSS側でスクロール領域として
// 表示することで、ページが間延びするのを防ぐ想定。
/**
 * @param {Array<{ date: string, title: string, note?: string|null }>} news
 * @returns {string}
 */
export function renderNewsListHtml(news) {
  if (news.length === 0) {
    return '<p class="news-empty">まだ更新履歴はありません。</p>';
  }
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const items = sorted
    .map((entry) => {
      const label = escapeHtml(newsEntryLabel(entry));
      return `    <li><span class="news-date">${escapeHtml(entry.date)}</span> ${label}</li>`;
    })
    .join("\n");
  return (
    '<div class="news-list-scroll" tabindex="0" role="region" aria-label="更新履歴一覧(スクロールで過去のお知らせも表示できます)">\n' +
    `  <ul class="news-list">\n${items}\n  </ul>\n` +
    "</div>"
  );
}
