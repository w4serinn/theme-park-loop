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
    hintFor: 'shop/groceries.html',
    leadsTo: 'glossary/moon-grass.html',
    hint: '食料品・薬草店には、満月の夜にしか採れないという珍しい薬草があったはずです。その商品説明をもう一度読んでみてください。似た名前の別の植物と間違えないように。'
  },
  {
    hintFor: 'dining/index.html',
    leadsTo: 'glossary/moon-grass.html',
    hint: '中央学食の季節メニューには、ある薬草をブレンドしたホットドリンクがあったはずです。その説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'index.html',
    leadsTo: 'glossary/arnold-namesake.html',
    hint: 'トップページの学院紹介文には、創設者の正式な姓名が書かれていたはずです。「アルノルド卿とは」の本文をもう一度読んでみてください。'
  },
  {
    hintFor: 'index.html',
    leadsTo: 'glossary/arnold-namesake.html',
    hint: 'トップページのアクセス案内、魔導鉄道の最寄り駅名にも創設者の名が入っていたはずです。もう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/alchemy-tower.html',
    leadsTo: 'glossary/arnold-namesake.html',
    hint: '錬金術研究棟の中心設備は、アルノルド卿自身が設計したと伝わるものだそうです。主要研究設備の説明をもう一度確かめてみてください。'
  },
  {
    requiresPage: 'glossary/arnold-namesake.html',
    hintFor: 'glossary/arnold-namesake.html',
    leadsTo: 'glossary/amber-heart-blueprint.html',
    hint: '琥珀の心臓の設計図原本は所在不明だそうですが、歴代の図面の所在を記録してきた台帳ならあるという話でした。'
  },
  {
    hintFor: 'exploration/airship-dock.html',
    leadsTo: 'glossary/airship-symbols.html',
    hint: '飛行船ドックの格納設備には、魔法帆の素材を保管する専用倉庫があったはずです。格納設備の説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/airship-dock.html',
    leadsTo: 'glossary/airship-symbols.html',
    hint: '旗艦「アルノルド号」を固定している設備自体にも、正式な名前があったはずです。格納設備の説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/airship-gear.html',
    leadsTo: 'glossary/airship-symbols.html',
    hint: 'ドック用の帆布財布には、ある意匠をかたどったチャームが付いているそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    requiresPage: 'glossary/airship-symbols.html',
    hintFor: 'glossary/airship-symbols.html',
    leadsTo: 'glossary/anchor-feather-origin.html',
    hint: '意匠の由来は公式には示されていないそうですが、ドック事務所の書庫にはある人物の日誌が残っているという話でした。'
  },
  {
    hintFor: 'exploration/observatory.html',
    leadsTo: 'glossary/fifth-headmaster.html',
    hint: '天文台の主要観測設備には、ある学長の代に設置された望遠鏡があったはずです。設備の説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'events/index.html',
    leadsTo: 'glossary/festival-undertold.html',
    hint: '学院祭の豆知識には、正式名称になる前の呼び名が書かれていたはずです。学院祭・行事の案内をもう一度確かめてみてください。'
  },
  {
    hintFor: 'dining/index.html',
    leadsTo: 'glossary/campus-harvest.html',
    hint: '学食のアップルパイには、研究棟の林檎園で採れた特別な林檎が使われているそうです。デザートメニューの説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/groceries.html',
    leadsTo: 'glossary/campus-harvest.html',
    hint: '食料品・薬草店の紹介文には、学院の食材が育つ二つの場所が書かれていたはずです。店の紹介文をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/summoning-plaza.html',
    leadsTo: 'glossary/four-elements-seal.html',
    hint: '魔法陣召喚広場の四隅には、力を集めるための石が埋め込まれているそうです。広場設備の説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/summoning-circle.html',
    leadsTo: 'glossary/four-elements-seal.html',
    hint: '召喚素材専門店には、広場の実演で実際に使われた陣の設計図ポスターがあるそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'exploration/dueling-ground.html',
    leadsTo: 'glossary/dueling-heritage.html',
    hint: '演武場の床には、古代の術式石を敷き詰めた設備があるそうです。演武場設備の説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/dueling-shop.html',
    leadsTo: 'glossary/dueling-heritage.html',
    hint: '決闘記念品店には、季節ごとに紋様が変わる缶バッジセットがあるそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/dueling-gear.html',
    leadsTo: 'glossary/dueling-heritage.html',
    hint: '魔法武具展示室には、200年前に制定された法典の復刻版があるそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'dining/index.html',
    leadsTo: 'glossary/hidden-ingredients.html',
    hint: '学食の定番丼には、微量の薬草が隠し味として使われているそうです。メニューの詳細をもう一度確かめてみてください。'
  },
  {
    hintFor: 'dining/index.html',
    leadsTo: 'glossary/hidden-ingredients.html',
    hint: '授業前に人気のマフィンには、砕いたナッツが練り込まれているそうです。デザートメニューの説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'dining/alchemy-dining.html',
    leadsTo: 'glossary/hidden-ingredients.html',
    hint: '秘薬スタンドには、月草とある薬草をブレンドした温かい一服があるそうです。その説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'events/index.html',
    leadsTo: 'glossary/champions-prizes.html',
    hint: '飛行船競技大会の豆知識には、優勝チームに贈られる権利について書かれていたはずです。行事の案内をもう一度確かめてみてください。'
  },
  {
    hintFor: 'events/index.html',
    leadsTo: 'glossary/champions-prizes.html',
    hint: '錬金術品評会の副賞は、実用品ではない少し変わった記念品だそうです。行事の案内をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/grand-library.html',
    leadsTo: 'glossary/memory-books.html',
    hint: '大図書館の蔵書には、問いかけに応じてページが開く特別な一群があるそうです。エリアについての説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/clock-tower.html',
    leadsTo: 'glossary/time-path-interference.html',
    hint: '時計塔には、同じ部屋の中で時間の流れが異なる展示室があるそうです。設備の紹介をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/uniforms.html',
    leadsTo: 'glossary/eldcloth-fabric.html',
    hint: '制服・ローブ店の紹介文には、正式制服を仕立てる魔法繊維の名前が書かれていたはずです。店の紹介文をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/magical-tools.html',
    leadsTo: 'glossary/garigne-unit.html',
    hint: '魔導具・実験器具店の測定器には、学院独自の単位で数値を示すものがあるそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/books.html',
    leadsTo: 'glossary/summoning-theory.html',
    hint: '書籍・資料店には、召喚学科主任が40年をかけてまとめた大著があるそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'dining/observatory-dining.html',
    leadsTo: 'glossary/starfall-fortune.html',
    hint: '天文台の学食には、溶ける速さで運勢を占うという不思議なソーダがあるそうです。その商品説明をもう一度読んでみてください。'
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
    hintFor: 'exploration/clock-tower.html',
    leadsTo: 'glossary/apprentice-notes.html',
    hint: '時計塔1層回廊の修繕工房には、道具棚の奥に古い手記が紛れ込んでいるという噂です。塔の設備についての記述をもう一度確かめてみてください。'
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
    hintFor: 'exploration/grand-library.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '大図書館の中央ホール地下には、書架の自律配置を司る巨大な魔法陣があるそうです。エリアについての説明をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/dueling-ground.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '決闘演武場の地下には、展示されていない魔封石だけを集めた保管庫もあるという話です。演武場の設備についての記述をもう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/grand-library.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '大図書館には、表紙すら見せてもらえない蔵書を集めた見学アトラクションもあるそうです。もう一度確かめてみてください。'
  },
  {
    hintFor: 'exploration/summoning-plaza.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '魔法陣召喚広場の北隅には、契約精霊が身を潜めるという小さな祠があるそうです。広場の設備についての記述をもう一度確かめてみてください。'
  },
  {
    hintFor: 'shop/clock-accessories.html',
    leadsTo: 'glossary/hidden-corners.html',
    hint: '歯車細工所には、地下の接続部まで書き込まれた設計図の複製ポスターが売られているそうです。その商品説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/index.html',
    leadsTo: 'glossary/scribe-lineage.html',
    hint: '写本堂の紹介文には、何代も続く一族が営んでいるという記述があったはずです。購買部一覧のその店の説明をもう一度読んでみてください。'
  },
  {
    hintFor: 'shop/library-shop.html',
    leadsTo: 'glossary/scribe-lineage.html',
    hint: '写本堂そのものの紹介文にも、代々続く一族についての記述があったはずです。もう一度読んでみてください。'
  },
  {
    hintFor: 'shop/magical-tools.html',
    leadsTo: 'glossary/aptitude-certificate.html',
    hint: '魔導具店の購入注意には、強力な魔力石を買う際に必要な証明書についての一文があったはずです。もう一度読んでみてください。'
  },
  {
    requiresPage: ['glossary/koku-trio.html', 'glossary/circle-ledgers.html'],
    hintFor: ['glossary/koku-trio.html', 'glossary/circle-ledgers.html'],
    leadsTo: 'glossary/circle-warden.html',
    hint: '「刻の輪」の補修記録にも、陣紋補修記録簿の解読作業にも、同じ役職の名前が挙がっていたはずです。もう一度どちらかの記述を確かめてみてください。'
  },
  {
    requiresPage: 'glossary/circle-warden.html',
    hintFor: 'glossary/circle-warden.html',
    leadsTo: 'glossary/warden-registry.html',
    hint: '学院はあらゆる物事を記録し続ける場所です。歴代の陣紋師についても、正式な記録がどこかに保管されているはずだと思いませんか。'
  },
  {
    requiresPage: 'glossary/warden-registry.html',
    hintFor: 'glossary/warden-registry.html',
    leadsTo: 'glossary/unnamed-warden.html',
    hint: '大鐘「刻の声」の命名式典の記録にも、理由を語らない短い一文が残されていたはずです。もう一度思い出してみてください。'
  },
  {
    hintFor: 'index.html',
    leadsTo: 'glossary/machinery-department.html',
    hint: 'トップページの学科紹介には、大時計塔の管理を一手に担うという学科があったはずです。もう一度確かめてみてください。'
  },
  {
    hintFor: 'tickets/index.html',
    leadsTo: 'glossary/apprentice-guides.html',
    hint: '団体様向けのご案内には、構内ガイドツアーを担う役職の名前があったはずです。入学願書のページをもう一度確かめてみてください。'
  },
  {
    hintFor: 'access/index.html',
    leadsTo: 'glossary/east-lot-history.html',
    hint: 'お車での来場案内には、正門前にある駐車場の名前が書かれていたはずです。もう一度確かめてみてください。'
  },
];
