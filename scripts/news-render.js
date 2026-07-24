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
