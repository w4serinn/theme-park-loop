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
// - leadsTo: このヒントが導く先の隠しページ(表示には一切使わない、
//   フィルタ専用の値。2026-07-29 ユーザー提案: 「既に閲覧済みのページは
//   秘密に残るからヒントは消していい」)。`visitedPaths`(「学院の秘密」)に
//   このpathが含まれていれば、プレイヤーは既にこのヒントの目的地を
//   発見済みなので一覧から取り除く(src/logic.jsのfilterActiveHints参照)。
//   `hintFor`とは役割が異なることに注意: `hintFor`は見出しの表示に使う
//   (答えを表に出してはならない)一方、`leadsTo`は表示に一切関わらない
//   フィルタ専用の値なので、答えのページを指しても構わない。
// - hint: 本文からは取り除いた、解ければ嬉しい程度の軽いヒント。
window.HINT_DATA = [
  {
    hintFor: 'guide/index.html',
    leadsTo: 'glossary/mythical-creatures.html',
    hint: '学院を案内してくれる、生き物たちがいるという話を聞いたことがあります。学院案内のページをもう一度覗いてみてはどうでしょう。'
  },
  {
    hintFor: 'exploration/clock-tower.html',
    leadsTo: 'glossary/perpetual-motion.html',
    hint: '時計塔の中枢には、魔力の補給なしで動き続ける仕掛けがあるという話です。塔の主要機構についての記述を探してみてください。'
  },
  {
    hintFor: 'exploration/observatory.html',
    leadsTo: 'glossary/starmap-fragments.html',
    hint: '天文台に伝わる星座の呼び方は、一般的なものとは少し違うという噂です。天文台のページをじっくり読んでみてください。'
  },
  {
    hintFor: 'shop/dueling-shop.html',
    leadsTo: 'glossary/dueling-champions.html',
    hint: '決闘演武場にまつわる、歴代の優勝者の記録が残されているそうです。決闘関連の売店のページを覗いてみてください。'
  },
  {
    hintFor: 'exploration/summoning-plaza.html',
    leadsTo: 'glossary/koku-trio.html',
    hint: '魔法陣召喚広場には、創立以来使われ続けている大きな仕掛けがあるようです。広場の設備についての記述を確かめてみてください。'
  },
  {
    hintFor: 'exploration/clock-tower.html',
    leadsTo: 'glossary/koku-trio.html',
    hint: '時計塔には、稼働記録を代々書き継ぐ台帳もあるそうです。同じ塔の主要機構についての記述を、もう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/airship-shop.html',
    leadsTo: 'glossary/beyond-the-map.html',
    hint: '飛行船ドックの航路図には、あまり知られていない場所も描かれているようです。ドックの売店のページを覗いてみてください。'
  },
  {
    hintFor: 'index.html',
    leadsTo: 'glossary/beyond-the-map.html',
    hint: '学院への行き方の中に、王都中央のある場所を経由するものがあったはずです。トップページのアクセス案内をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/souvenirs.html',
    leadsTo: 'glossary/arnold-relics.html',
    hint: 'アルノルド卿の紋章をかたどった品が、みやげ店にあったはずです。バッジ商品の説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/books.html',
    leadsTo: 'glossary/arnold-relics.html',
    hint: 'アルノルド卿直筆とされる資料の写しが、書籍・資料店に並んでいたはずです。その商品説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/library-shop.html',
    leadsTo: 'glossary/arnold-relics.html',
    hint: '写本堂には、ある古い書物の一章だけを複製した品があったはずです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/summoning-shop.html',
    leadsTo: 'glossary/spirits-of-arnold.html',
    hint: '召喚素材専門店の護符は、ある存在から身を守るためのものだったはずです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'exploration/summoning-plaza.html',
    leadsTo: 'glossary/spirits-of-arnold.html',
    hint: '魔法陣召喚広場の北隅には、言葉を交わせる相手がいるという話です。広場の見どころをもう一度確かめてみてください。'
  },
  {
    hintFor: 'events/index.html',
    leadsTo: 'glossary/spirits-of-arnold.html',
    hint: '新月の夜だけ開かれる、ある観測会があったはずです。学院祭・行事の案内をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/alchemy-tower.html',
    leadsTo: 'glossary/circle-ledgers.html',
    hint: '研究棟には、陣形式の移り変わりを歴代の錬金術師が書き継いできた記録簿があるそうです。研究棟の設備についての記述をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/summoning-plaza.html',
    leadsTo: 'glossary/circle-ledgers.html',
    hint: '魔法陣召喚広場には、陣紋の補修履歴を記した石版帳もあるという話です。広場の設備についての記述を、もう一度確かめてみてください。'
  },
  {
    hintFor: 'events/index.html',
    leadsTo: 'glossary/merit-records.html',
    hint: '錬金術品評会の豆知識には、受賞者の名が代々刻まれ続ける場所についての記述があったはずです。行事の案内をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/dueling-ground.html',
    leadsTo: 'glossary/merit-records.html',
    hint: '決闘演武場には、段位認定の記録を保管する非公開の一室があるそうです。演武場の設備についての記述を、もう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/library-shop.html',
    leadsTo: 'glossary/second-headmaster.html',
    hint: '写本堂の復刻ペンの商品説明には、ある歴代学長にまつわる由来が書かれていたはずです。その説明文をもう一度読んでみてください。'
  },
  {
    hintFor: 'exploration/alchemy-tower.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '錬金術研究棟の地下には、希少な触媒だけを保管する専用の倉庫があるそうです。研究棟の設備についての記述をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/clock-tower.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '時計塔の地下には、予備の歯車部品だけを集めた備蓄庫もあるという話です。塔の設備についての記述を、もう一度確かめてみてください。'
  },
  {
    id: 'F1',
    requiresPage: 'glossary/apprentice-notes.html',
    hintFor: 'glossary/apprentice-notes.html',
    leadsTo: 'glossary/gear-cipher.html',
    hint: '学院に残る記録の中には、記号を使った独自の記譜法について触れているものがあるようです。近い場所にある記録を、もう一度読み直してみてはどうでしょう。'
  },
  {
    id: 'F2',
    requiresPage: 'glossary/final-entry.html',
    hintFor: 'glossary/final-entry.html',
    leadsTo: 'glossary/shooting-star.html',
    hint: 'この記録帳全体が天文台の観測記録である以上、これらの数字も星に無関係ではないのかもしれません。'
  },
  {
    id: 'F13',
    requiresPage: 'glossary/nostion-memory.html',
    hintFor: 'glossary/nostion-memory.html',
    leadsTo: 'glossary/yorishiro-echo.html',
    hint: '五つの候補それぞれの理由を、直前に語られたことと照らし合わせてみてください。矛盾が無いのは、そのうちの一つだけのはずです。'
  },
  {
    requiresPage: 'glossary/perpetual-motion.html',
    hintFor: 'glossary/perpetual-motion.html',
    leadsTo: 'glossary/apprentice-notes.html',
    hint: '永久運動術式を陰で支える技師たちは、いったいどこで日々の作業をしているのでしょうか。その場所についての記述に、もう一度目を通してみてください。'
  },
  {
    requiresPage: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'],
    hintFor: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'],
    leadsTo: 'glossary/first-astronomer.html',
    hint: 'この学院の歴史を作った、ある人物の名前。生き物たちの記録にも、星々の記録にも、思いがけないところで刻まれているようです。'
  },
  {
    requiresPage: 'glossary/first-astronomer.html',
    hintFor: 'glossary/first-astronomer.html',
    leadsTo: 'glossary/final-entry.html',
    hint: 'ある天文官が几帳面に付け続けていたという、あの記録の存在を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/dueling-champions.html',
    hintFor: 'glossary/dueling-champions.html',
    leadsTo: 'glossary/erased-champion.html',
    hint: '公式に語られなかった決闘の記録にも、何か短い言葉が残されているかもしれません。'
  },
  {
    requiresPage: 'glossary/hidden-corners.html',
    hintFor: 'glossary/hidden-corners.html',
    leadsTo: 'glossary/affinity-circle.html',
    hint: '似たような一角は、他のエリアにもあるという話でした。大図書館のある設備についての記述を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/affinity-circle.html',
    hintFor: 'glossary/affinity-circle.html',
    leadsTo: 'glossary/sealed-stone-vault.html',
    hint: '決闘演武場の地下にも、同じように一般非公開の場所があるという話でした。その設備についての記述を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/sealed-stone-vault.html',
    hintFor: 'glossary/sealed-stone-vault.html',
    leadsTo: 'glossary/forbidden-books-room.html',
    hint: '大図書館には、一部だけ表紙すら見せてもらえない展示があるという話でした。その見学アトラクションについての記述を思い出してみてください。'
  },
  {
    requiresPage: 'glossary/forbidden-books-room.html',
    hintFor: 'glossary/forbidden-books-room.html',
    leadsTo: 'glossary/weathervane-shrine.html',
    hint: '魔法陣召喚広場の北隅にも、契約精霊が身を潜めるという小さな祠があるという話でした。広場の設備についての記述を思い出してみてください。'
  },
];
