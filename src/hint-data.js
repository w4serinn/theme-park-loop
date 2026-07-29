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
// - requiresPage: このヒントを解禁する条件(「学院の秘密」に持っているべき
//   ページ、複数候補ある場合はいずれか1つでOKのOR判定)。文字列またはstring[]。
// - hintFor: このヒントが「何についてのヒントか」を表すページ(見出しに
//   このページのタイトルを使う。src/logic.jsのresolveHintPageTitle参照)。
//   暗号解読型(その場にある符丁を解読するタイプ)はrequiresPageと同じページ
//   (今まさに詰まっているそのページ自身)になるが、発見の連鎖型(次に何を
//   検索すればいいか分からないタイプ)ではrequiresPageと異なる
//   (requiresPage=既に訪問済みの前段ページ、hintFor=まだ見ぬ次のページ)
//   ことに注意(2026-07-29 ユーザー指摘により両者を分離。以前はrequiresPageを
//   見出しにも流用しており、発見の連鎖型ヒントで見出しと本文の指す先が
//   食い違っていた)。
// - hint: 本文からは取り除いた、解ければ嬉しい程度の軽いヒント。
//
// root行(通常ページから直接見つかるページ)には前提となる隠しページが
// 存在しないため、requiresPageを省略している(常に解禁済み扱い。
// src/logic.jsのfilterUnlockedHints参照。2026-07-29 ユーザー指摘により追加)。
window.HINT_DATA = [
  {
    hintFor: 'glossary/mythical-creatures.html',
    hint: '学院を案内してくれる、生き物たちがいるという話を聞いたことがあります。学院案内のページをもう一度覗いてみてはどうでしょう。'
  },
  {
    hintFor: 'glossary/perpetual-motion.html',
    hint: '時計塔の中枢には、魔力の補給なしで動き続ける仕掛けがあるという話です。塔の主要機構についての記述を探してみてください。'
  },
  {
    hintFor: 'glossary/starmap-fragments.html',
    hint: '天文台に伝わる星座の呼び方は、一般的なものとは少し違うという噂です。天文台のページをじっくり読んでみてください。'
  },
  {
    hintFor: 'glossary/dueling-champions.html',
    hint: '決闘演武場にまつわる、歴代の優勝者の記録が残されているそうです。決闘関連の売店のページを覗いてみてください。'
  },
  {
    hintFor: 'glossary/time-ring-record.html',
    hint: '魔法陣召喚広場には、創立以来使われ続けている大きな仕掛けがあるようです。広場の設備についての記述を確かめてみてください。'
  },
  {
    hintFor: 'glossary/time-ledger.html',
    hint: '時計塔には、稼働記録を代々書き継ぐ台帳もあるそうです。同じ塔の主要機構についての記述を、もう一度確かめてみてください。'
  },
  {
    id: 'F1',
    requiresPage: 'glossary/apprentice-notes.html',
    hintFor: 'glossary/apprentice-notes.html',
    hint: '学院に残る記録の中には、記号を使った独自の記譜法について触れているものがあるようです。近い場所にある記録を、もう一度読み直してみてはどうでしょう。'
  },
  {
    id: 'F2',
    requiresPage: 'glossary/final-entry.html',
    hintFor: 'glossary/final-entry.html',
    hint: 'この記録帳全体が天文台の観測記録である以上、これらの数字も星に無関係ではないのかもしれません。'
  },
  {
    id: 'F13',
    requiresPage: 'glossary/nostion-memory.html',
    hintFor: 'glossary/nostion-memory.html',
    hint: '五つの候補それぞれの理由を、直前に語られたことと照らし合わせてみてください。矛盾が無いのは、そのうちの一つだけのはずです。'
  },
  {
    requiresPage: 'glossary/perpetual-motion.html',
    hintFor: 'glossary/apprentice-notes.html',
    hint: '永久運動術式を陰で支える技師たちは、いったいどこで日々の作業をしているのでしょうか。その場所についての記述に、もう一度目を通してみてください。'
  },
  {
    requiresPage: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'],
    hintFor: 'glossary/first-astronomer.html',
    hint: 'この学院の歴史を作った、ある人物の名前。生き物たちの記録にも、星々の記録にも、思いがけないところで刻まれているようです。'
  },
  {
    requiresPage: 'glossary/first-astronomer.html',
    hintFor: 'glossary/final-entry.html',
    hint: 'ある天文官が几帳面に付け続けていたという、あの記録の存在を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/dueling-champions.html',
    hintFor: 'glossary/erased-champion.html',
    hint: '公式に語られなかった決闘の記録にも、何か短い言葉が残されているかもしれません。'
  },
  {
    requiresPage: ['glossary/time-ring-record.html', 'glossary/time-ledger.html'],
    hintFor: 'glossary/time-bell.html',
    hint: '「刻」の字を冠する装置は、広場にも塔にも一つずつあったはず。もう一つ、同じ字を持つものについての噂を、思い出してみてください。'
  }
];
