window.SEARCH_INDEX = [
  { path: 'index.html', title: '王立魔法学院アルノルド トップ', category: 'トップページ' },

  { path: 'exploration/index.html', title: '学院内探索 一覧', category: '学院内探索' },
  { path: 'exploration/alchemy-tower.html', title: '錬金術研究棟', category: '学院内探索' },
  { path: 'exploration/airship-dock.html', title: '飛行船ドック', category: '学院内探索' },
  { path: 'exploration/clock-tower.html', title: '時計塔', category: '学院内探索' },
  { path: 'exploration/grand-library.html', title: '大図書館', category: '学院内探索' },
  { path: 'exploration/dueling-ground.html', title: '決闘演武場', category: '学院内探索' },
  { path: 'exploration/summoning-plaza.html', title: '魔法陣召喚広場', category: '学院内探索' },
  { path: 'exploration/observatory.html', title: '天文台', category: '学院内探索' },

  { path: 'events/index.html', title: '学院祭・行事 一覧', category: '学院祭・行事' },

  { path: 'shop/index.html', title: '購買部 一覧', category: '購買部' },
  { path: 'shop/uniforms.html', title: '制服・ローブ', category: '購買部' },
  { path: 'shop/magical-tools.html', title: '魔導具', category: '購買部' },
  { path: 'shop/souvenirs.html', title: 'みやげ・食品', category: '購買部' },
  { path: 'shop/books.html', title: '書籍・資料', category: '購買部' },
  { path: 'shop/groceries.html', title: '食料品・薬草', category: '購買部' },
  { path: 'shop/alchemy-shop.html', title: '蒸留工房店(錬金術研究棟)', category: '購買部' },
  { path: 'shop/alchemy-tools.html', title: '実験器具販売所(錬金術研究棟)', category: '購買部' },
  { path: 'shop/airship-shop.html', title: '羅針堂(飛行船ドック)', category: '購買部' },
  { path: 'shop/airship-gear.html', title: '風袋商会(飛行船ドック)', category: '購買部' },
  { path: 'shop/clock-tower-shop.html', title: '時刻堂(時計塔)', category: '購買部' },
  { path: 'shop/clock-accessories.html', title: '歯車細工所(時計塔)', category: '購買部' },
  { path: 'shop/library-shop.html', title: '写本堂(大図書館)', category: '購買部' },
  { path: 'shop/library-tools.html', title: '魔法インク工房(大図書館)', category: '購買部' },
  { path: 'shop/dueling-shop.html', title: '決闘記念品店(決闘演武場)', category: '購買部' },
  { path: 'shop/dueling-gear.html', title: '魔法武具展示室(決闘演武場)', category: '購買部' },
  { path: 'shop/summoning-shop.html', title: '召喚素材専門店(魔法陣召喚広場)', category: '購買部' },
  { path: 'shop/summoning-circle.html', title: '魔法陣工房(魔法陣召喚広場)', category: '購買部' },
  { path: 'shop/observatory-shop.html', title: '星図堂(天文台)', category: '購買部' },
  { path: 'shop/observatory-goods.html', title: '夜空雑貨店(天文台)', category: '購買部' },

  { path: 'dining/index.html', title: '学食・喫茶室 一覧', category: '学食・喫茶室' },
  { path: 'dining/alchemy-dining.html', title: '秘薬スタンド(錬金術研究棟)', category: '学食・喫茶室' },
  { path: 'dining/airship-dining.html', title: '空賊カフェ「嵐の羅針盤」(飛行船ドック)', category: '学食・喫茶室' },
  { path: 'dining/clock-tower-dining.html', title: '歯車喫茶「鐘と砂」(時計塔)', category: '学食・喫茶室' },
  { path: 'dining/library-dining.html', title: '読書喫茶「書の香り」(大図書館)', category: '学食・喫茶室' },
  { path: 'dining/dueling-dining.html', title: '回復スタンド「鉄と炎」(決闘演武場)', category: '学食・喫茶室' },
  { path: 'dining/summoning-dining.html', title: '召喚前夜祭カフェ「扉の前で」(魔法陣召喚広場)', category: '学食・喫茶室' },
  { path: 'dining/observatory-dining.html', title: '星見ダイナー「ふたご座の食卓」(天文台)', category: '学食・喫茶室' },

  { path: 'tickets/index.html', title: '入学願書・チケット案内', category: 'ご案内' },
  { path: 'access/index.html', title: '学院への道のり', category: 'ご案内' },
  { path: 'access/lodging.html', title: '提携宿泊施設', category: 'ご案内' },
  { path: 'guide/index.html', title: '学院案内', category: 'ご案内' },

  // 隠しページ: 通常のヘッダーナビ・フッター・サイトマップ(pages/sitemap.html)には
  // 意図的に載せていない。ここ(検索インデックス)にだけ追加することで、検索でしか
  // 辿り着けない発見型のページになる。将来のサイクルがサイトマップ等への掲載漏れと
  // 誤解して追加してしまわないよう、変更しないこと(docs/ROADMAP.md「### 13」参照)。
  //
  // 各エントリは以下のフィールドも持てる(docs/ARG-DESIGN.md 2節参照):
  // - keywords: string[]  正式名称(title)以外の言い回しでもヒットさせたい場合に追加する。
  //   同じ文字列を複数エントリのkeywordsに重複させないこと(多対1はOK、1対多はNG)。
  // - prereq: string[]  このエントリが検索に出現するために、事前に訪問しているべき
  //   隠しページのpath候補一覧(どれか1つでも訪問済みならOKのOR判定)。省略/nullなら常に検索可能。
  // - exactMatch: boolean  trueの場合、部分一致ではなくtitle/category/keywordsの
  //   いずれかとの完全一致でのみヒットする。謎解きの合言葉(断片の到達先ページ)に
  //   設定し、答えの一部を入力しただけで偶然当たってしまうのを防ぐ(docs/ARG-DESIGN.md 2-1節)。
  { path: 'glossary/mythical-creatures.html', title: '魔法生物図鑑', category: '図鑑', hidden: true, keywords: ['ホーホー', 'カチカチ', 'ルミナ'] },
  { path: 'glossary/perpetual-motion.html', title: '永久運動術式', category: '図鑑', hidden: true, keywords: ['フィンレー'] },
  { path: 'glossary/starmap-fragments.html', title: '魔導88星座', category: '図鑑', hidden: true, keywords: ['星座紋解析台'] },
  { path: 'glossary/dueling-champions.html', title: '決闘王列伝', category: '図鑑', hidden: true, keywords: ['第三閃光戦'] },
  { path: 'glossary/apprentice-notes.html', title: '見習い整備士の手記', category: '図鑑', hidden: true, keywords: ['修繕工房'] },
  { path: 'glossary/gear-cipher.html', title: '光る符丁の正体', category: '図鑑', hidden: true, keywords: ['歯車'], prereq: ['glossary/apprentice-notes.html'], exactMatch: true },
  { path: 'glossary/first-astronomer.html', title: '初代天文官 シベル・オーレン', category: '図鑑', hidden: true, keywords: ['シベル・オーレン'], prereq: ['glossary/mythical-creatures.html', 'glossary/starmap-fragments.html'] },
  { path: 'glossary/final-entry.html', title: '記録帳、最後の頁', category: '図鑑', hidden: true, keywords: ['観測記録帳'], prereq: ['glossary/first-astronomer.html'] },
  { path: 'glossary/shooting-star.html', title: '流れ星、という言葉', category: '図鑑', hidden: true, keywords: ['流れ星'], prereq: ['glossary/final-entry.html'], exactMatch: true },
  { path: 'glossary/erased-champion.html', title: '名を消された決闘王', category: '図鑑', hidden: true, keywords: ['静寂の一撃'], prereq: ['glossary/dueling-champions.html'] },
  { path: 'glossary/yorishiro-echo.html', title: 'よりしろ、という響き', category: '図鑑', hidden: true, keywords: ['よりしろ'], prereq: ['glossary/nostion-memory.html'], exactMatch: true },
  { path: 'glossary/koku-trio.html', title: '「刻」を名に持つ三つの装置', category: '図鑑', hidden: true, keywords: ['刻の輪', '刻の書', '刻の声'], exactMatch: true },
  { path: 'glossary/beyond-the-map.html', title: '北方雲海と転移広場、地図の余白について', category: '図鑑', hidden: true, keywords: ['北方雲海', '魔法陣転移広場'], exactMatch: true },
  { path: 'glossary/arnold-relics.html', title: 'アルノルド卿が遺したもの、三つの資料', category: '図鑑', hidden: true, keywords: ['双頭の鷲と魔法陣', '研究手稿', '創魔の書'] },
  { path: 'glossary/spirits-of-arnold.html', title: '精霊、それぞれの現れ方', category: '図鑑', hidden: true, keywords: ['異次元存在', '契約精霊シルフィ', '星界の精霊'] },
  { path: 'glossary/circle-ledgers.html', title: '陣紋を刻み、守り継いだ記録簿', category: '図鑑', hidden: true, keywords: ['魔法陣刻印記録簿', '陣紋補修記録簿'], exactMatch: true },
  { path: 'glossary/merit-records.html', title: '品評会と段位、記録に残るもの', category: '図鑑', hidden: true, keywords: ['研究棟の記録簿', '考査記録室'], exactMatch: true },
  { path: 'glossary/second-headmaster.html', title: '第2代学長フローラ・シルヴァーン、書簡と湿地', category: '図鑑', hidden: true, keywords: ['復刻版 万年葦ペン', '学院湿地区画'] },
  { path: 'glossary/hidden-corners.html', title: '学院のどこにでもある、人知れない一角', category: '図鑑', hidden: true, keywords: ['触媒保管庫', '予備歯車庫', '蔵書親和魔法陣', '魔封石保管庫', '禁書閲覧室', '風見の祠', '時計塔設計図'] },
  { path: 'glossary/moon-grass.html', title: '珍薬草「月草」、満月の夜だけの恵み', category: '図鑑', hidden: true, keywords: ['月草'], exactMatch: true },
  { path: 'glossary/scribe-lineage.html', title: '七代続く写本師一族、その素顔', category: '図鑑', hidden: true, keywords: ['七代続く写本師一族', '七代続く写本師の一族'], exactMatch: true },
  { path: 'glossary/aptitude-certificate.html', title: '「魔法資質証明証」、提示を求められるとき', category: '図鑑', hidden: true, keywords: ['魔法資質証明証'], exactMatch: true },
  { path: 'glossary/circle-warden.html', title: '陣紋師という仕事', category: '図鑑', hidden: true, keywords: ['陣紋師'], prereq: ['glossary/koku-trio.html', 'glossary/circle-ledgers.html'] },
  { path: 'glossary/warden-registry.html', title: '陣紋師任命記録、空白の一件', category: '図鑑', hidden: true, keywords: ['陣紋師任命記録'], prereq: ['glossary/circle-warden.html'] },
  { path: 'glossary/unnamed-warden.html', title: '三つの「刻」との奇妙な符合', category: '図鑑', hidden: true, keywords: ['相応しい名を'], prereq: ['glossary/warden-registry.html'], exactMatch: true },
  { path: 'glossary/arnold-namesake.html', title: 'アルノルド卿の名前、三つの残り方', category: '図鑑', hidden: true, keywords: ['エルンスト・フォン・アルノルド卿', 'アルノルド卿の丘', '琥珀の心臓'], exactMatch: true },
  { path: 'glossary/airship-symbols.html', title: '飛行船ドック、船体を支えるもの三つ', category: '図鑑', hidden: true, keywords: ['竜鱗布', 'アルノルド号係留ドック', '碇と羽根'], exactMatch: true },
  { path: 'glossary/fifth-headmaster.html', title: '天文台、名を秘めた第5代学長の仕事', category: '図鑑', hidden: true, keywords: ['アルノルドの眼', '流星記録石板', '第5代学長'], exactMatch: true },
  { path: 'glossary/festival-undertold.html', title: '学院祭・行事、あまり語られない三つの裏側', category: '図鑑', hidden: true, keywords: ['秋祭り', '大点灯', '占術師'], exactMatch: true },
  { path: 'glossary/campus-harvest.html', title: '食材のふるさと、学院に三つ', category: '図鑑', hidden: true, keywords: ['学院農園', '薬草園', '鉄皮林檎'], exactMatch: true },
  { path: 'glossary/four-elements-seal.html', title: '大結界召喚陣、力を集める四つの石', category: '図鑑', hidden: true, keywords: ['四元素石', '大結界召喚陣'], exactMatch: true },
  { path: 'glossary/dueling-heritage.html', title: '決闘演武場、力を支える三つのしるし', category: '図鑑', hidden: true, keywords: ['カルネ岩', '決闘シグル', '学院魔法決闘規定法典'], exactMatch: true },
  { path: 'glossary/hidden-ingredients.html', title: '隠し材料、三つの脇役', category: '図鑑', hidden: true, keywords: ['安息薬草', '安息草', 'エルダーフラワー', '魔力ナッツ'], exactMatch: true },
  { path: 'glossary/champions-prizes.html', title: '学院祭、優勝者に贈られるもの', category: '図鑑', hidden: true, keywords: ['年間優先搭乗権', '錬金術師の指輪'], exactMatch: true },
  { path: 'glossary/memory-books.html', title: '記憶を持つ本、答えたくない問い', category: '図鑑', hidden: true, keywords: ['記憶を持つ本'], exactMatch: true },
  { path: 'glossary/time-path-interference.html', title: '時間経路干渉、再現実験室の外側', category: '図鑑', hidden: true, keywords: ['時間経路実験室', '時間経路干渉'], exactMatch: true },
  { path: 'glossary/eldcloth-fabric.html', title: '魔法繊維「エルドクロス」、拡散を抑える生地', category: '図鑑', hidden: true, keywords: ['エルドクロス'], exactMatch: true },
  { path: 'glossary/garigne-unit.html', title: '独自単位「ガリグネ」、誰が決めたのか', category: '図鑑', hidden: true, keywords: ['ガリグネメーター', 'ガリグネ'], exactMatch: true },
  { path: 'glossary/summoning-theory.html', title: '召喚術理論体系、40年の研究と幻の続巻', category: '図鑑', hidden: true, keywords: ['召喚術理論体系', 'レヴィン・オルトウェル教授'], exactMatch: true },
  { path: 'glossary/starfall-fortune.html', title: '星屑ソーダ、今夜の星見の運を占う', category: '図鑑', hidden: true, keywords: ['星屑ソーダ', '流星の軌跡'], exactMatch: true }
];
