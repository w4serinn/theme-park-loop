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
//   root行(前提となる隠しページが存在しない)は省略する。
// - hintFor: 見出しに使う「手がかりを探しに戻るべきページ」(このヒントが
//   何についてのヒントかを示す)。**答え(まだ見ぬ次のページ)を指しては
//   ならない**。プレイヤーが既に持っている情報(訪問済みの隠しページ、または
//   誰でも読める通常ページ)だけを指すこと。暗号解読型(F1/F2/F13)は
//   requiresPageと同じ(今まさに詰まっているそのページ自身)。発見の連鎖型は
//   requiresPageと同じ値(既に訪問済みの前段ページ)。root行はrequiresPageを
//   持たないため、代わりに手がかりの文言が実際に書かれている通常ページ
//   (guide/index.htmlなど)を指す(2026-07-29 ユーザー指摘・修正: 一度は
//   「まだ見ぬ次のページ」をhintForにしていたが、それではページタイトルの
//   表示自体が答えを丸ごと明かしてしまう[検索窓にそのまま打てば見つかる]
//   という重大な後退だった。全エントリでhintFor=「安全に開示できる、既に
//   持っている情報」に統一し直した)。
// - hint: 本文からは取り除いた、解ければ嬉しい程度の軽いヒント。
window.HINT_DATA = [
  {
    hintFor: 'guide/index.html',
    hint: '学院を案内してくれる、生き物たちがいるという話を聞いたことがあります。学院案内のページをもう一度覗いてみてはどうでしょう。'
  },
  {
    hintFor: 'exploration/clock-tower.html',
    hint: '時計塔の中枢には、魔力の補給なしで動き続ける仕掛けがあるという話です。塔の主要機構についての記述を探してみてください。'
  },
  {
    hintFor: 'exploration/observatory.html',
    hint: '天文台に伝わる星座の呼び方は、一般的なものとは少し違うという噂です。天文台のページをじっくり読んでみてください。'
  },
  {
    hintFor: 'shop/dueling-shop.html',
    hint: '決闘演武場にまつわる、歴代の優勝者の記録が残されているそうです。決闘関連の売店のページを覗いてみてください。'
  },
  {
    hintFor: 'exploration/summoning-plaza.html',
    hint: '魔法陣召喚広場には、創立以来使われ続けている大きな仕掛けがあるようです。広場の設備についての記述を確かめてみてください。'
  },
  {
    hintFor: 'exploration/clock-tower.html',
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
    hintFor: 'glossary/perpetual-motion.html',
    hint: '永久運動術式を陰で支える技師たちは、いったいどこで日々の作業をしているのでしょうか。その場所についての記述に、もう一度目を通してみてください。'
  },
  {
    requiresPage: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'],
    hintFor: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'],
    hint: 'この学院の歴史を作った、ある人物の名前。生き物たちの記録にも、星々の記録にも、思いがけないところで刻まれているようです。'
  },
  {
    requiresPage: 'glossary/first-astronomer.html',
    hintFor: 'glossary/first-astronomer.html',
    hint: 'ある天文官が几帳面に付け続けていたという、あの記録の存在を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/dueling-champions.html',
    hintFor: 'glossary/dueling-champions.html',
    hint: '公式に語られなかった決闘の記録にも、何か短い言葉が残されているかもしれません。'
  },
  {
    requiresPage: ['glossary/time-ring-record.html', 'glossary/time-ledger.html'],
    hintFor: ['glossary/time-ring-record.html', 'glossary/time-ledger.html'],
    hint: '「刻」の字を冠する装置は、広場にも塔にも一つずつあったはず。もう一つ、同じ字を持つものについての噂を、思い出してみてください。'
  }
];
