# ARG候補語彙 棚卸しメモ

`docs/ARG-DESIGN.md`4節(特に4-2節「通常ページ発の新規ルート群」)のroot行を
埋めるための下調べ。初期42ページ(隠しページ・ARG関連ページを除く通常ページ)
を8分類で棚卸しし、候補をここに書き出す。

**探し方**: 「固有名詞かどうか」ではなく「一般的な名詞ではないかどうか」で
判断する。人名・地名・装置名のような厳密な固有名詞に限定すると、
「占術師(現職17代目)」「7番試薬」のような、役職・型番のように一般名詞的な
体裁を取りつつも十分に独自的な語を見逃してしまう。世界観やページ固有の
文脈が無いと意味が成立しない語(その学院・そのエリアならではの言い回し)は
広く候補に含めること。

**このファイルは候補置き場であり、ARG-DESIGN.mdの正式な行ではない。**
実際にP番号のroot/flavor行として採用する際に、ARG-DESIGN.md側へ転記し
(この一覧からは削除しなくてよい、記録として残す)、実装する。

複数ページに同じ語が出てくる場合はページ名を全て列挙する(P6のような
網状構造の接続候補として特に有力)。

status: `収集済み` / `部分収集`(未読ページあり)/ `未着手`

---

## 1. トップページ(index.html) [status: 部分収集]

- エルンスト・フォン・アルノルド卿(学院創設者フルネーム、魔法暦1073年創立)

## 2. 学院内探索(exploration/、8ページ) [status: 一次収集済み・再確認予定]

- 大蒸留器「琥珀の心臓」(alchemy-tower.html。アルノルド卿設計・稼働150年)
- 魔法陣刻印記録簿(alchemy-tower.html。現行7代目)
- 竜鱗布(airship-dock.html。魔法帆の希少素材)
- 旗艦「アルノルド号」係留ドック(airship-dock.html)
- 管理台帳「刻の書」(clock-tower.html。現行12代目)
- 大鐘「刻の声」(clock-tower.html。開校50周年記念鋳造)
- 蔵書親和魔法陣(grand-library.html。書庫迷宮を毎晩変化させる、一般非公開)
- 演武場床「カルネ岩」(dueling-ground.html。古代術式石、8年周期で張替)
- 大魔法陣「刻の輪」(summoning-plaza.html。400年現役、学院最古の魔法装置)
- 四元素石(summoning-plaza.html。広場四隅の風・水・火・土の属性石)
- 陣紋補修記録簿(summoning-plaza.html。歴代補修・拡張履歴を記す石版帳)
- 契約精霊の棲家「風見の祠」(summoning-plaza.html。祠自体は立入不可)
- 契約精霊シルフィ(summoning-plaza.html。対話コーナーで応答)
- 第2代学長フローラ・シルヴァーン(observatory.html。天文台建設者)
- 流星記録石板(observatory.html。「魔力流星」の記録も含む索引)

## 3. 学院祭・行事(events/index.html) [status: 一次収集済み・再確認予定(初回は
リサーチエージェント経由で「豆知識」欄の記述を見落としており、手動での
読み直しで発見した経緯あり)]

- 占術師(現職17代目、代々学院OBが務める伝統。「年明け魔力占い」担当)
- 錬金術研究棟の記録簿(錬金術品評会、歴代最優秀賞受賞者の名が刻まれ続けている。
  「魔法陣刻印記録簿」「陣紋補修記録簿」「管理台帳『刻の書』」に続く4件目の
  "記録簿"モチーフ)
- 錬金術師の指輪(品評会最優秀賞の副賞、実用品ではないという含み)
- 旧称「秋祭り」(王立魔法学院祭、50年前まで非公式行事だった)
- 旗艦「アルノルド号」年間優先搭乗権(飛行船競技大会優勝チームへの副賞。
  過去10年最多優勝は魔導機械科3回)
- 「大点灯」(魔法陣点灯式、冬至の夜。開始時刻は前日まで確定しない)
- 星界の精霊(夜の精霊観測会。出現確率約3割)

## 4. 購買部(shop/、17ページ) [status: 一次収集済み・再確認予定]

- 魔法繊維「エルドクロス」(uniforms.html)
- 独自単位「ガリグネ」(magical-tools.html。魔力測定器「ガリグネメーター」)
- レヴィン・オルトウェル教授『召喚術理論体系』(books.html。召喚学科主任、40年の研究)
- 珍薬草「月草」(groceries.html。満月の夜のみ採取可能。他多数ページにも出現、
  下記5節参照)
- ドックのシンボルマーク「碇と羽根」(airship-gear.html)
- 「創魔の書」(library-shop.html。アルノルド卿著、第四章の複製写本を販売)
- 季節ごとのシグル紋様「炎の螺旋」「水流環」「雷紋双翼」(dueling-shop.html)
- 学院魔法決闘規定法典(dueling-gear.html。200年前制定、古語魔法文の原典)
- 「大結界召喚陣」(summoning-circle.html。広場の実演で使用された公式設計図)
- 7番試薬/碧龍の試薬ソーダ「第7番」(alchemy関連、5節のdining/alchemy-dining.html
  にも同名の飲料あり)

## 5. 学食・喫茶室(dining/、8ページ) [status: 部分収集(clock-tower-dining.html・observatory-dining.html未読)]

個々の物語性は薄いが、**複数ページを横断する共通語彙**が豊富(P6のような
網状構造の接続候補として最有力群):

- **月草**: dining/index・alchemy-dining・library-dining・summoning-dining、
  shop/groceries・observatory-goods(6ページ)。満月の夜のみ採取可能という
  設定が既にある
- **学院農園**: dining/index、shop/alchemy-shop・groceries・index、
  events/index(5ページ)
- **薬草園**: dining/index、shop/books・groceries・souvenirs(4ページ)
- **エルダーフラワー**: dining/index・library-dining、shop/groceries(3ページ)
- 写本師(library-dining.html「写本師の午後セット」「写本師が仮眠前に食べる」
  という逸話。shop/library-shop.html「写本堂」と関連)
- 安息薬草/安息草(dining/index・alchemy-dining)
- 鉄皮林檎(dining/index。錬金術研究棟の林檎園、一般品の3倍甘い)
- 魔力ナッツ(dining/index)

## 6. 入学願書(tickets/index.html) [status: 未着手]

未読(年間パス「四季来訪証」は既存候補として把握済み、それ以外は未確認)。

## 7. 学院への道のり(access/index.html、access/lodging.html) [status: 部分収集]

- 「学院東駐車場」(access/index.html。ARGの入口としては弱め、実用的な固有名詞)
- lodging.htmlは未読

## 8. 学院案内(guide/index.html) [status: 部分収集]

- マスコット個体名「ホーホー」「カチカチ」「ルミナ」(既にP1の`keywords`として
  登録済み。新規rootというより既存語の再確認)
- それ以外の内容は未読
