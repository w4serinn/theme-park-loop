// 謎解き・発見の手がかり一覧(docs/ROADMAP.md「### 13」謎解きヒント専用ページ、
// および「### 15」ヒント対象拡大タスク参照)。
// pages/glossary/hint-book.html が、これと「学院の秘密」(訪問済み隠しページ)
// を突き合わせて、requiresPageを訪問済みのヒントだけを表示する。
// まだ出会っていない謎・発見のヒントは一切表示しない(先読み防止)。
//
// 各エントリ:
// - id: 断片を産出する謎解き(暗号解読)の場合のみ、対応する断片ID
//   (src/fragment-names.jsのキーと一致させる)。断片を産出しない通常の発見の
//   連鎖(root/flavorページへの導線)には無く、省略してよい(2026-07-29
//   ヒント対象拡大)。
// - requiresPage: このページ(複数候補ある場合はいずれか1つ、OR判定)を
//   「学院の秘密」に持っていて初めて表示される。文字列またはstring[]。
// - hint: 本文からは取り除いた、解ければ嬉しい程度の軽いヒント。
//   見出しにはrequiresPageに対応するページのタイトルを使う
//   (src/logic.jsのresolveHintPageTitle参照)。
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
    hint: '五つの候補それぞれの理由を、直前に語られたことと照らし合わせてみてください。矛盾が無いのは、そのうちの一つだけのはずです。'
  },
  {
    requiresPage: 'glossary/perpetual-motion.html',
    hint: '永久運動術式を陰で支える技師たちは、いったいどこで日々の作業をしているのでしょうか。その場所についての記述に、もう一度目を通してみてください。'
  },
  {
    requiresPage: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'],
    hint: 'この学院の歴史を作った、ある人物の名前。生き物たちの記録にも、星々の記録にも、思いがけないところで刻まれているようです。'
  },
  {
    requiresPage: 'glossary/first-astronomer.html',
    hint: 'ある天文官が几帳面に付け続けていたという、あの記録の存在を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/dueling-champions.html',
    hint: '公式に語られなかった決闘の記録にも、何か短い言葉が残されているかもしれません。'
  },
  {
    requiresPage: ['glossary/time-ring-record.html', 'glossary/time-ledger.html'],
    hint: '「刻」の字を冠する装置は、広場にも塔にも一つずつあったはず。もう一つ、同じ字を持つものについての噂を、思い出してみてください。'
  }
];
