// 謎解きヒント一覧(docs/ROADMAP.md「### 13」謎解きヒント専用ページ参照)。
// pages/glossary/hint-book.html が、これと「学院の秘密」(訪問済み隠しページ)
// を突き合わせて、requiresPageを訪問済みのヒントだけを表示する。
// まだ出会っていない謎のヒントは一切表示しない(先読み防止)。
//
// 各エントリ:
// - id: 対応する断片ID(src/fragment-names.jsのキーと一致させる)
// - requiresPage: このページを「学院の秘密」に持っていて初めて表示される
// - hint: 本文からは取り除いた、解ければ嬉しい程度の軽いヒント
window.HINT_DATA = [
  {
    id: 'F1',
    requiresPage: 'glossary/apprentice-notes.html',
    hint: '学院に残る記録の中には、記号を使った独自の記譜法について触れているものがあるようです。近い場所にある記録を、もう一度読み直してみてはどうでしょう。'
  },
  {
    id: 'F2',
    requiresPage: 'glossary/final-entry.html',
    hint: 'この記録帳全体が天文台の観測記録である以上、これらの数字も星に無関係ではないのかもしれません。'
  },
  {
    id: 'F13',
    requiresPage: 'glossary/nostion-memory.html',
    hint: '三つの候補それぞれの理由を、直前に語られたことと照らし合わせてみてください。矛盾が無いのは、そのうちの一つだけのはずです。'
  }
];
