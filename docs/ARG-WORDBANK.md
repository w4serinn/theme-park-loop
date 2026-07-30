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
(この一覧からは削除しなくてよい、下表の使用状況・使用先ページIDを
更新するだけでよい)、実装する。

複数ページに同じ語が出てくる場合はページ名を全て列挙する(P6のような
網状構造の接続候補として特に有力)。

---

## 候補一覧(2026-07-30、表形式に再構成)

以前は「セクション見出し+箇条書きの生の棚卸し」と「末尾のグルーピング候補
(グループA〜H)」が別構造で並んでおり、グルーピングに含まれない生の棚卸し
項目が見落とされやすかった(2026-07-30、ユーザー指摘により大蒸留器
「琥珀の心臓」等の未使用候補が複数見つかった一件を踏まえ、この表に統合)。

新しいroot候補を探す際は、この表の「使用状況」が`未使用`の行を上から
確認すればよい(グループ列に値がある行は、そのグループの他の項目と
セットで使うことが既に決まっている/決まっていた候補)。

| ワード | 出典ページ | 元セクション | グループ | 使用状況 | 使用先ページID |
|---|---|---|---|---|---|
| エルンスト・フォン・アルノルド卿 | index.html | 1. トップページ | — | 使用済み | P44 |
| 魔導機械科 | index.html | 1. トップページ | — | 未使用 | — |
| 「アルノルド卿の丘」駅 | index.html | 1. トップページ | — | 使用済み | P44 |
| 「魔法陣転移広場」 | index.html | 1. トップページ | E | 使用済み | P10 |
| 大蒸留器「琥珀の心臓」 | exploration/alchemy-tower.html | 2. 学院内探索 | — | 使用済み | P44 |
| 魔法陣刻印記録簿 | exploration/alchemy-tower.html | 2. 学院内探索 | B-1 | 使用済み | P33 |
| 触媒保管庫 | exploration/alchemy-tower.html | 2. 学院内探索 | C | 使用済み | P81 |
| 竜鱗布 | exploration/airship-dock.html | 2. 学院内探索 | — | 使用済み | P47 |
| 旗艦「アルノルド号」係留ドック | exploration/airship-dock.html | 2. 学院内探索 | — | 使用済み | P47 |
| 管理台帳「刻の書」 | exploration/clock-tower.html | 2. 学院内探索 | A | 使用済み | P12 |
| 大鐘「刻の声」 | exploration/clock-tower.html | 2. 学院内探索 | A | 使用済み | P12 |
| 予備歯車庫 | exploration/clock-tower.html | 2. 学院内探索 | C | 使用済み | P81 |
| 時間経路実験室・「時間経路干渉」 | exploration/clock-tower.html | 2. 学院内探索 | — | 未使用 | — |
| 蔵書親和魔法陣 | exploration/grand-library.html | 2. 学院内探索 | C | 使用済み | P82 |
| 記憶を持つ本 | exploration/grand-library.html | 2. 学院内探索 | — | 未使用 | — |
| 禁書閲覧室 | exploration/grand-library.html | 2. 学院内探索 | C | 使用済み | P84 |
| 月光草(「月草」と紛らわしい別植物) | exploration/grand-library.html | 2. 学院内探索 | G(デコイ) | 使用済み(デコイ) | moon-grass.htmlの誤答トリガー |
| 演武場床「カルネ岩」 | exploration/dueling-ground.html | 2. 学院内探索 | — | 未使用 | — |
| 魔封石保管庫 | exploration/dueling-ground.html | 2. 学院内探索 | C | 使用済み | P83 |
| 考査記録室 | exploration/dueling-ground.html | 2. 学院内探索 | B-2 | 使用済み | P39 |
| 大魔法陣「刻の輪」 | exploration/summoning-plaza.html | 2. 学院内探索 | A | 使用済み | P12 |
| 四元素石 | exploration/summoning-plaza.html | 2. 学院内探索 | — | 未使用 | — |
| 陣紋補修記録簿 | exploration/summoning-plaza.html | 2. 学院内探索 | B-1 | 使用済み | P33 |
| 契約精霊の棲家「風見の祠」 | exploration/summoning-plaza.html | 2. 学院内探索 | C | 使用済み | P85 |
| 契約精霊シルフィ | exploration/summoning-plaza.html | 2. 学院内探索 | F | 使用済み | P23 |
| 第2代学長フローラ・シルヴァーン | exploration/observatory.html | 2. 学院内探索 | D(関連) | 使用済み(関連) | P28(library-shop.html側の書簡から実装) |
| 大望遠鏡「アルノルドの眼」 | exploration/observatory.html | 2. 学院内探索 | — | 使用済み | P49 |
| 流星記録石板 | exploration/observatory.html | 2. 学院内探索 | — | 使用済み | P49 |
| 第5代学長(名前は本文中に記載なし) | exploration/observatory.html | 2. 学院内探索 | — | 使用済み | P49 |
| 占術師(現職17代目) | events/index.html | 3. 学院祭・行事 | — | 使用済み | P51 |
| 錬金術研究棟の記録簿 | events/index.html | 3. 学院祭・行事 | B-2 | 使用済み | P39 |
| 錬金術師の指輪 | events/index.html | 3. 学院祭・行事 | — | 未使用 | — |
| 旧称「秋祭り」 | events/index.html | 3. 学院祭・行事 | — | 使用済み | P51 |
| 旗艦「アルノルド号」年間優先搭乗権 | events/index.html | 3. 学院祭・行事 | — | 未使用 | — |
| 「大点灯」(魔法陣点灯式) | events/index.html | 3. 学院祭・行事 | — | 使用済み | P51 |
| 星界の精霊 | events/index.html | 3. 学院祭・行事 | F | 使用済み | P23 |
| 魔法繊維「エルドクロス」 | shop/uniforms.html | 4. 購買部 | — | 未使用 | — |
| 独自単位「ガリグネ」 | shop/magical-tools.html | 4. 購買部 | — | 未使用 | — |
| 魔法資質証明証 | shop/magical-tools.html | 4. 購買部 | (未分類) | 使用済み | P41 |
| レヴィン・オルトウェル教授 | shop/books.html | 4. 購買部 | — | 未使用 | — |
| 珍薬草「月草」 | shop/groceries.html 他 | 4. 購買部 | G | 使用済み | P97 |
| ドックのシンボルマーク「碇と羽根」 | shop/airship-gear.html | 4. 購買部 | — | 使用済み | P47 |
| 北方雲海・飛行禁止区域・飛行獣の生息ゾーン | shop/airship-shop.html | 4. 購買部 | E | 使用済み | P10 |
| 「創魔の書」 | shop/library-shop.html | 4. 購買部 | H | 使用済み | P16 |
| 七代続く写本師一族 | shop/index.html・library-shop.html | 4. 購買部 | (未分類) | 使用済み | P35 |
| 第二代学院長の現存する書簡 | shop/library-shop.html | 4. 購買部 | D | 使用済み | P28 |
| 学院湿地区画 | shop/library-shop.html | 4. 購買部 | D | 使用済み | P28 |
| 時計塔設計図「地下の魔法陣接続部」 | shop/clock-accessories.html | 4. 購買部 | C(補遺) | 使用済み | P86 |
| 異次元存在 | shop/summoning-shop.html | 4. 購買部 | F | 使用済み | P23 |
| 季節ごとのシグル紋様「炎の螺旋」「水流環」「雷紋双翼」 | shop/dueling-shop.html | 4. 購買部 | — | 未使用 | — |
| 学院魔法決闘規定法典 | shop/dueling-gear.html | 4. 購買部 | — | 未使用 | — |
| 「大結界召喚陣」 | shop/summoning-circle.html | 4. 購買部 | — | 未使用 | — |
| 7番試薬/碧龍の試薬ソーダ「第7番」 | shop/alchemy-dining.html(5節と同一語) | 4. 購買部 | (未分類) | 保留中(素材不足) | — |
| 月草 | dining/index.html 他6ページ | 5. 学食・喫茶室 | G | 使用済み | P97 |
| 学院農園 | dining/index.html 他5ページ | 5. 学食・喫茶室 | — | 未使用 | — |
| 薬草園 | dining/index.html 他4ページ | 5. 学食・喫茶室 | — | 未使用 | — |
| エルダーフラワー | dining/index.html 他3ページ | 5. 学食・喫茶室 | — | 未使用 | — |
| 写本師 | dining/library-dining.html | 5. 学食・喫茶室 | (未分類、関連) | 使用済み(関連) | P35 |
| 安息薬草/安息草 | dining/index.html・alchemy-dining.html | 5. 学食・喫茶室 | — | 未使用 | — |
| 鉄皮林檎 | dining/index.html | 5. 学食・喫茶室 | — | 未使用 | — |
| 魔力ナッツ | dining/index.html | 5. 学食・喫茶室 | — | 未使用 | — |
| 7番試薬/碧龍の試薬ソーダ「第7番」 | dining/alchemy-dining.html(4節と同一語) | 5. 学食・喫茶室 | (未分類) | 保留中(素材不足) | — |
| 星屑ソーダで運を占う学生風習 | dining/observatory-dining.html | 5. 学食・喫茶室 | — | 未使用 | — |
| 見習い案内人 | tickets/index.html | 6. 入学願書 | — | 未使用 | — |
| 学院東駐車場 | access/index.html | 7. 学院への道のり | — | 未使用 | — |

(8. 学院案内: マスコット個体名「ホーホー」「カチカチ」「ルミナ」は既にP1の
`keywords`として登録済みのため表には含めない。他に候補なし)

status(旧セクション単位の読了状況): 全8分類とも`収集済み`(再確認完了)。
新しい通常ページが追加された場合のみ、そのページを対象に追記すること。

---

## グルーピング候補(2026-07-29、8分類完了を受けて実施)

`docs/ARG-DESIGN.md`4節には現在も多数の「通常ページ(未定)」root枠がある
(P18・P20・P31・P92・P95、および4-5節のP49〜P75の各root)。以下は、
1ページあたり2〜3項目という新方針を満たせそうな組み合わせをまとめたもの。
上の表の「グループ」列と対応している。

### グループA: 「刻」三部作(命名パターンの呼応)[使用済み: P12、2026-07-29実装/2026-07-29に1ページへ統合・採番変更]
- 大魔法陣「刻の輪」(summoning-plaza.html) → P12 `pages/glossary/koku-trio.html`
- 管理台帳「刻の書」(clock-tower.html) → P12 `pages/glossary/koku-trio.html`
- 大鐘「刻の声」(clock-tower.html) → P12 `pages/glossary/koku-trio.html`
(旧#97〜#99として3ページ個別に実装していたが、1ページ2カードでは物足りないとの
ユーザー指摘を受け1ページ6カード構成に統合。旧prereq[旧#97/#98どちらか一方の
訪問で解禁]は統合により不要になったため削除。さらに、本文中の「陣紋師」等が
flavorへ発展させやすいとの指摘を受け、新規ID[旧#97]から、予約済みのroot→flavor
3段枠であるP12〜P15に採番し直した[2026-07-29])
→ 3項目ちょうど。広場と時計塔という2エリアから接続できる網状構造も組めた
(なぜ離れた2エリアの装置が同じ「刻」の字を冠するのか、という謎を核にした。
最終的な答えは明示せず、ノスティオンの独り言で余韻を残す形にした)。
**2026-07-30追記**: 予約されていたP13〜P15のflavor1段目として
`pages/glossary/circle-warden.html`(陣紋師という仕事)を実装。P12(このページ)
とグループB-1(P33 `circle-ledgers.html`)の双方に「陣紋師」という同じ役職名が
既に登場していたことに着目し、P6と同型の網状構造(いずれか一方の訪問でOK)
にした。詳細は`docs/ARG-DESIGN.md`P13行を参照。続けて同日、flavor2段目として
P14 `pages/glossary/warden-registry.html`(陣紋師任命記録、空白の一件)も実装。
P13の「選定基準は公式には示されていない」というフックを、既存の「記録簿」
モチーフを踏襲した新しい記録物で継続した。さらに同日、flavor3段目(最終段)
としてP15 `pages/glossary/unnamed-warden.html`(三つの「刻」との奇妙な符合)
を実装し、P12〜P15の枠を完全に使い切った。P14の「空白の一件はおおよそ
開校50周年前後」という推定時期を、P12本文で確立済みの「大鐘『刻の声』も
開校50周年記念に鋳造され、命名理由は記録に残っていない」という事実と
重ね合わせて締めくくった。

### グループB: 記録簿モチーフ(同じモチーフの反復、2ページに分割推奨)[使用済み: P33・P39、2026-07-29実装]
- B-1(陣紋の保守記録)[使用済み: P33]: 魔法陣刻印記録簿(alchemy-tower.html) →
  P33 `pages/glossary/circle-ledgers.html` / 陣紋補修記録簿(summoning-plaza.html) →
  P33 `pages/glossary/circle-ledgers.html` — どちらも「陣を保守してきた記録」
  という共通点
- B-2(実績・認定の記録)[使用済み: P39]: 錬金術研究棟の記録簿(events/index.html、
  品評会受賞者名簿) → P39 `pages/glossary/merit-records.html` / 考査記録室
  (dueling-ground.html、段位認定簿) → P39 `pages/glossary/merit-records.html`
  — どちらも「学院生の実績を公式に記録する場所」という共通点
→ 全5件(管理台帳「刻の書」を含めると)を1ページに詰め込まず、性質の近い
  2件ずつに分割。「学院はあらゆる物事を記録し続ける」というノスティオン
  自身の設定と重なるメタ的な意味も持たせられる。本文中に「初代の署名欄が
  判読不能」「副賞の指輪が選ばれた理由不明」等flavor化しやすい素材を
  盛り込めたため、新規ID追記ではなく予約済みのroot→flavor 1段枠
  (P33〜P34・P39〜P40)へ最初から当てはめて実装した(2026-07-29)。

### グループC: 立入禁止・非公開区画(学院内探索の再確認で判明した最有力モチーフ)[使用済み: P81〜P86(root→flavor5段)、2026-07-30完全完了]
- 触媒保管庫(alchemy-tower.html) → P81 `pages/glossary/hidden-corners.html`
- 予備歯車庫(clock-tower.html) → P81 `pages/glossary/hidden-corners.html`
- 蔵書親和魔法陣(grand-library.html) → P82 `pages/glossary/affinity-circle.html`
- 魔封石保管庫(dueling-ground.html) → P83 `pages/glossary/sealed-stone-vault.html`
- 禁書閲覧室(grand-library.html) → P84 `pages/glossary/forbidden-books-room.html`
- 契約精霊の棲家「風見の祠」(summoning-plaza.html) → P85
  `pages/glossary/weathervane-shrine.html`
- (補遺)時計塔設計図「地下の魔法陣接続部」(clock-accessories.html) → P86
  `pages/glossary/underground-network.html`
→ 6件と多いため1ページには収めず、4-5節の「root→flavor→flavor→…」チェーン
  形式を採用(1つのroot「なぜどのエリアにも人知れない一角があるのか」から、
  各エリアの禁域を1つずつ巡るflavor連鎖にする)。深さのある章立てにできる
  最有力候補として、2026-07-29〜30の4サイクルにわたりroot+flavor5段を
  完成させた(`docs/ARG-DESIGN.md`4-5節P81行)。P85は既存のP23
  (spirits-of-arnold.html)で触れたシルフィの契約設定と矛盾しない範囲で、
  祠そのものの構造・名の由来に焦点を当てた。最後にP86として、当初は
  未分類だった「地下の魔法陣接続部」を補遺(capstone)に転用し、6つの一角が
  地下でつながっているかもしれないという可能性だけを示して締めた
  (断定はせず問いのまま終える)。

### グループD: 天文台の2人の学長級人物(フローラ・シルヴァーン関連)[使用済み: P28、2026-07-29実装]
- 第2代学長(フローラ・シルヴァーン)の現存する書簡(library-shop.html) →
  P28 `pages/glossary/second-headmaster.html`
- 学院湿地区画(library-shop.html、葦ペンの採取地) → P28
  `pages/glossary/second-headmaster.html`
→ P6(初代天文官シベル・オーレン)とは別人の第2代学長についての新情報。
  「天文台を作った学長」と「天文台で星座を編纂した天文官」という2人の
  歴史上の人物がいることを掘り下げられた。本文中の「筆記具の寸法まで
  書簡に記していた理由不明」「湿地区画の管理者が語られていない」の2つの
  謎がflavor化しやすいと判断し、予約済みのroot→flavor 2段枠P28〜P30へ
  最初から当てはめて実装(2026-07-29)。
  **表記ゆれのバグ発見**: 実装時、`library-shop.html`が「第二代学院長」、
  `exploration/observatory.html`・`glossary/first-astronomer.html`が
  「第2代学長」と、同一人物の役職名が「学長」「学院長」で揺れていることを
  発見(`glossary/erased-champion.html`・`glossary/koku-trio.html`の
  「学院長」表記も同様)。「学長」(`exploration/dueling-ground.html`
  「初代学長」を含め計4ファイル)を正式表記とみなし、`docs/ROADMAP.md`に
  バグとして記録の上、該当4ファイルを「学長」表記・算用数字(「第2代」)に
  統一して同一サイクルで修正した。

### グループE: キャンパスの外側(見えない境界線)[使用済み: P10、2026-07-29実装/2026-07-29に1ページへ統合・採番変更]
- 北方雲海・飛行禁止区域・飛行獣の生息ゾーン(shop/airship-shop.html) → P10 `pages/glossary/beyond-the-map.html`
- 「魔法陣転移広場」(index.html、王都中央) → P10 `pages/glossary/beyond-the-map.html`
(旧#100〜#101として2ページ個別に実装していたが、1ページ4カード構成に統合。
さらに本文中の「陣前広場」等がflavorへ発展させやすいとの指摘を受け、新規ID
[旧#100]から、予約済みのroot→flavor 1段枠であるP10〜P11に採番し直した
[2026-07-29])
→ 学院の外にも広い世界があることを示す数少ない手がかり2件。root行の
  たどり着き方をトップページ+飛行船ドックの2エリアにできた。

### グループF: 異次元・精霊との接触(召喚まわりの神秘性)[使用済み: P23、2026-07-29実装/2026-07-29に1ページへ統合・採番変更]
- 異次元存在(shop/summoning-shop.html、降霊護符の保護対象) → P23 `pages/glossary/spirits-of-arnold.html`
- 契約精霊シルフィ(summoning-plaza.html、対話コーナー) → P23 `pages/glossary/spirits-of-arnold.html`
- 星界の精霊(events/index.html、夜の精霊観測会) → P23 `pages/glossary/spirits-of-arnold.html`
(旧#105〜#107として3ページ個別に実装していたが、1ページ6カード構成に統合。
さらに本文中の「精霊と異次元存在の区別基準不明」等がflavorへ発展させやすい
との指摘を受け、新規ID[旧#105]から、予約済みのroot→flavor 2段枠である
P23〜P25に採番し直した[2026-07-29])
→ 3項目ちょうど。「精霊」「異次元存在」という語の違いが実は同じものを
  指しているのか、別物なのか、という謎を各ページの独り言でそれとなく
  示唆する形にした(断片やprereqによる強制接続はせず、3件とも独立した
  root行のまま)。

### グループG: 月草/月光草の混同ネタ(謎解き必須方針との相性が良い)[使用済み: P97、2026-07-30実装]
- 珍薬草「月草」(4節・5節に多数出現、満月の夜のみ採取可能) → P97
  `pages/glossary/moon-grass.html`
- 月光草(grand-library.html、写本インクの原料、別の植物) → 混同トラップの
  デコイとして使用(専用ページは作らず、`isMoonGrassWrongCandidate`の
  誤答トリガーとしてのみ登場)
→ 名前が紛らわしい2つの植物を意図的な「引っ掛け」として使い、正しい方を
  検索窓に入力しないと到達できない、という謎解き(2026-07-28確定方針)の
  実例として実装した。「月光草」で検索すると、通常の「見つかりません
  でした」ではなく専用の応答(P91の`isNostionMemoryWrongCandidate`と同型
  だが、こちらはページ訪問済みかどうかを問わない)を返す。
  **fragment化は見送り**: 当初「fragment種別のページに向く」としていたが、
  実装時に検討した結果、新しい断片(F15相当)を追加するとPGATEの必要断片数
  (現在F1・F3・F4・F5・F7・F8・F11・F12・F13・F14の10種)を拡張する構造的な
  判断になるため、自動サイクル内で一存では決めず、root型の単純な発見
  ページとして実装するに留めた。fragment化するかどうかはユーザー確認後の
  課題として残す。

### グループH: アルノルド卿にまつわる物証(創設者の遺したもの)[使用済み: P16、2026-07-29実装/2026-07-29に1ページへ統合・採番変更]
- アルノルド卿の家紋「双頭の鷲と魔法陣」(shop/souvenirs.html) → P16 `pages/glossary/arnold-relics.html`
- アルノルド卿 研究手稿の精密写本(shop/books.html) → P16 `pages/glossary/arnold-relics.html`
- 「創魔の書」第四章(shop/library-shop.html) → P16 `pages/glossary/arnold-relics.html`
(旧#102〜#104として3ページ個別に実装していたが、1ページ6カード構成に統合。
さらに本文中の「余白の走り書き未解読」等が暗号解読型フラグメントへ発展
させやすいとの指摘を受け、新規ID[旧#102]から、予約済みのroot→fragment
(F3産出)枠であるP16〜P17に採番し直した[2026-07-29])
→ 3項目ちょうど。購買部の3店舗(みやげ・書籍・写本堂)を横断する形で
  たどり着けるroot候補にできた。

未分類のまま残る候補(上の表にも掲載。独立した1件としてはやや弱いか、
既に他候補と重複):
7番試薬(alchemy-dining.htmlに1箇所のみの言及で、他ページとの接続点が
見当たらないため、素材が増えるまで保留)。
(時計塔設計図の「地下の魔法陣接続部」・七代続く写本師一族・魔法資質証明証は
2026-07-30にいずれも使用済みとなった。詳細は上の表を参照)
