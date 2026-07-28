# 完了済みサブタスク一覧

各ページで `[x]` になったサブタスクを、完了した順にここへ退避する。
ページの見出し・紹介文・statusは `docs/ROADMAP.md` 側にそのまま残り、
このファイルには完了済みのサブタスク行だけを記録する(一方通行の蓄積。
ここから ROADMAP.md へ戻すことはしない)。

バグ修正セクションの項目は、解消してもすぐにはここへ退避しない
(`getBugfixResolutionNews()` が `docs/ROADMAP.md` 側の `[x]` 行を直接読んで
「新たに解消されたバグ」を検出する設計のため)。origin/main に取り込まれ
お知らせ生成が完了したことを確認した後のサイクルで、まとめて退避する。

## バグ修正(解消済み)

- [x] (S) ノスティオン(`pages/search.html`)の「記録」欄(`#codex-memory-section`):
      別ページで新しく「学院の秘密」や「断片」を獲得した後、ブラウザの戻るボタン
      等でノスティオンのページに戻ると、記録欄の内容が更新されない(直前の古い
      状態のまま)。ページを明示的に開き直す(リロードする)と正しく反映される
      (2026-07-28 ユーザー報告)。原因: ブラウザのbfcache(back/forward cache)
      からページが復元された場合、`src/search.js`の初期化処理
      (`renderMemorySection()`)がスクリプト再実行なしで復元されるため、DOMが
      離脱時点のまま古くなる。`src/search.js`に`pageshow`イベント
      (`event.persisted`が`true`の場合)のリスナーを追加し、bfcache復元を
      検知して記録欄を最新のlocalStorageの内容で再描画するようにして解消した。

- [x] (S) 学食・喫茶室: 中央学食タブ内の「詳細」ボタンを押しても展開されない。
      原因: `pages/dining/index.html` に `.menu-item__trigger` を処理する
      `src/dining-menu.js` が読み込まれていなかった(`src/shop-tabs.js` のみ読み込み)。
      `<script src="{{BASE}}src/dining-menu.js" defer></script>` を追加して解消した。

- [x] (S) 学院祭・行事: 春夏秋冬の季節フィルターボタンを押しても表示が絞り込まれない。
      原因: `styles/events.css` の `.event-card { display: grid; }` が、ネイティブの
      `[hidden] { display: none; }` (UAスタイルシート)と同じ詳細度(0,1,0)のため
      後勝ちで上書きし、JSが `card.hidden = true` を設定しても実際には非表示に
      ならなかった。`.event-card[hidden] { display: none; }` を追加して解消した。

- [x] (M) 全ページ共通: ヒーロービジュアル(`area-hero__visual` / `shop-hero__visual` /
      `dining-page-hero__visual`)がウィンドウ幅を広げると画像下部が見切れ、上部しか
      見えなくなる。原因: `.shop-hero`/`.area-hero`(grid-template-rows固定px)・
      `.dining-page-hero__visual`(height固定220px)のコンテナが、ページ幅に
      max-widthの制約が無いため画面幅いっぱいまで広がる一方、高さだけ固定されており、
      `object-fit: cover` が縦方向を強くクロップしていた。画像はMidjourneyで
      `--ar 5:1` 生成のため、コンテナ側を `aspect-ratio: 5 / 1`(+ 超ワイド対策の
      `max-height: 320px`)に変更し、幅が変わってもクロップがほぼ発生しないように
      修正した(モバイル用の固定height上書きはそのまま残置)。

- [x] (S) 購買部: サムネイル・ヒーロー画像の上下に黒い帯が出る。
      真因: CSSではなく画像ファイル自体に黒帯が焼き込まれていた
      (Midjourney生成時か書き出し時の不具合と推測)。ユーザー提供の
      スクリーンショット(`shop/groceries.html`)を確認し、ピクセルを
      直接調査して確定した。過去2回「CSS的に発生し得ない」
      「プレースホルダーの誤認」と判断してクローズしたのはどちらも誤りだった。
      全画像を走査し、以下5点に全幅の黒帯(15〜32px相当)を検出・除去した:
      `assets/images/shop/hero-airship-shop.jpg`(上下20px)・
      `hero-alchemy-shop.jpg`(上32px/下31px)・
      `hero-clock-accessories.jpg`(上32px/下18px、2段階で検出)・
      `hero-groceries.jpg`(上20px/下19px)・
      `assets/images/exploration/thumb-airship-dock.jpg`(上下25px)。
      他の画像は同じ手法で走査し黒帯なしを確認済み。

### 0. 共通パーツ(ヘッダー/フッター) [status: 完了]
> 紹介文: 全ページ共通のヘッダーとフッターが完成しました。真鍮色ナビゲーション・モバイルスライドメニュー・学院案内フッターが、アルノルド魔法学院の風格をすべてのページに通わせます。

- [x] (S) ヘッダー: ナビゲーションデザイン改善
- [x] (S) ヘッダー: 現在ページのナビリンクをハイライト表示
- [x] (S) ヘッダー: active-nav.js の file:// 対応
- [x] (M) ヘッダー: モバイル用ハンバーガーメニュー
- [x] (S) ヘッダー: モバイルメニューの開閉トランジション
- [x] (S) フッター: 学院情報を充実させる

- [x] (S) カスタム404ページの追加(pages/404.html)。世界観に沿った「迷子の魔法陣」
      文言と、全主要8ページへのリンク一覧。noindex指定済み

- [x] (S) 主要8ページ(トップ・学院内探索・学院祭・購買部・学食・入学願書・
      学院への道のり・学院案内)に meta description を追加(SEO対応)

- [x] (M) 学院内探索・購買部・学食の店舗詳細ページ間の相互リンク強化。購買部
      エリア別店舗14ページ・学食エリア別飲食店7ページ(計21ページ)の末尾に
      「◯◯エリアを探索する →」リンクを追加し、対応する学院内探索エリアページへの
      逆方向導線を新設した(順方向の「このエリアの施設」リンクは既存)

- [x] (S) 印刷用スタイル(@media print)を追加。base.cssにヘッダー・ナビ・フッター
      背景を省く共通ルールを追加し、tickets.cssで料金シミュレーターフォーム、
      access.cssでキャンパスマップの操作ヒント・提携宿泊施設のビジュアル画像を
      印刷時に非表示にした

- [x] (M) サイトマップページを新設(pages/sitemap.html)。全39ページ(404・
      サイトマップ自身を除く)をトップ/学院内探索/学院祭/購買部/学食/その他の
      6セクションに整理して一覧表示。フッターに「サイトマップ」リンクを追加

- [x] (S) 主要8ページに OGP メタタグ(og:type/og:title/og:description)を追加。
      SNS等でシェアされた際のタイトル・説明表示に対応(og:imageは今後のタスク候補へ)

- [x] (M) ヘッダーの「入学願書」ナビリンクに常時アクセス可能な強調CTAスタイルを
      追加(2026-07-28、`worldview-check`指摘対応)。`.site-header__cta`クラスを
      追加し、ember色の枠線+背景色で他のナビ項目と視覚的に区別。ホバー時は塗り
      反転、入学願書ページ自体を閲覧中は塗りつぶし状態(`is-current`)になる。
      モバイルのハンバーガーメニューでも同様のボタン外観を維持。Playwrightで
      トップ・学院内探索(depth-1)・購買部(depth-1)・入学願書自身・隠しページ
      (glossary)・モバイル展開時の計6パターンでレイアウト崩れが無いことを確認。
      (補足: `npx serve`のリダイレクト仕様により、ローカルテストサーバー経由では
      `is-current`判定が効かないケースを発見したが、file://での直接検証で
      本番相当の挙動は正しく動作することを確認済み。既存の`src/active-nav.js`
      自体の不具合ではない)

### 1. トップページ

- [x] (S) HTML骨格(ヒーローエリア、ニュースセクション)

- [x] (S) レスポンシブ対応

- [x] (S) 世界観に基づく配色・タイポグラフィの適用

- [x] (S) ヒーローエリアの簡易アニメーション(CSSのみ)

- [x] (S) ニュース一覧アイテムの区切り線を color-mix で半透明化

- [x] (M) 学院紹介セクション(「王立魔法学院アルノルドとは」)
      ─ コンセプト・歴史(創立者アルノルド卿の一節)・5つの学科紹介を読み物として。
        世界観に没入できる文章量・固有名詞で。2〜3段落 + 学科アイコンリスト

- [x] (S) 見どころハイライト(「学院の3大体験」)
      ─ 錬金術体験・飛行船搭乗・魔法陣点灯式など、来訪の決め手になる体験を
        3〜4件ピックアップ。短いコピー＋エリアページへのリンク

- [x] (S) セクションナビカード(「学院を探索する」)
      ─ 全セクション(探索・行事・購買部・学食・入学願書・学院案内)を
        ビジュアルカードで一覧。hover アニメーション付き

- [x] (S) 季節イベント速報(「今月の学院」)
      ─ 直近2〜3件のイベントをミニカードで表示。学院祭ページへのリンク付き

- [x] (S) チケット/営業情報サマリー
      ─ 料金帯(例: 一般 ¥2,800〜)・営業時間・定休日を1ブロックで。入学願書ページへのCTA

- [x] (S) アクセスサマリー
      ─ 最寄り駅・所要時間を1〜2行で。学院への道のりページへのリンク

- [x] (S) トップページ 品質方針適合: 夕方レビューで指摘されたhoverエフェクト・レイアウトの問題を「ページ制作の品質方針」に沿って見直す

- [x] (S) ヒーロー背景画像の差し込み対応(アセット届き次第。現状はグラデーション維持) [asset-pending]

- [x] (M) 「学院の3大体験」に自動スライド/カルーセル演出を追加。1枚ずつ表示する
      カルーセルに変更し、前後矢印・ドットナビゲーション・6秒毎の自動送りを実装。
      ホバー/フォーカス中は自動送りを一時停止、prefers-reduced-motion時は自動送り
      自体を無効化。インデックス計算(carouselNextIndex/carouselPrevIndex)は
      src/logic.js に純粋関数として実装しテスト済み。JS無効時は従来の3列グリッド
      表示にフォールバックする(プログレッシブエンハンスメント)。

### 2. 学院内探索

- [x] (S) 一覧ページ(pages/exploration/index.html)のHTML骨格

- [x] (S) エリアページの共通テンプレート作成

- [x] (M) 錬金術研究棟(アトラクション4件)

- [x] (M) 飛行船ドック・魔法陣召喚広場(各4件)

- [x] (S) 既存3エリアのコンテンツ見直し:
      ── 目的: 3エリアとも同じ構文(〜できます。〜のみ。)になっているのを解消する
      ── アトラクション数: 錬金術研究棟 6件・飛行船ドック 3件・魔法陣召喚広場 5件に変更
      ── トーンの個性化: 錬金術研究棟=学術的・飛行船ドック=冒険的・召喚広場=神秘的
         それぞれのラベルに合った文体で各アトラクション説明を書き直す
      ── アトラクション名の候補(この通りでなくてよい):
         錬金術研究棟の追加2件 → 薬草調合室・魔法陣設計ワーク など
         召喚広場の追加1件 → 魔力測定コーナー など
         飛行船ドックは3件になるよう統廃合を判断すること

- [x] (S) 各エリアページにインタラクティブ要素追加:
      アトラクションカードを JS accordion でクリック展開(詳細説明・注意事項を格納)、
      カード hover でスチームパンク的な効果(真鍮色の輝き・歯車回転 CSS など)

- [x] (M) 新エリア: 時計塔(pages/exploration/clock-tower.html)
      ── 学院の象徴たる大時計塔。魔法時計・時間操作実験・展望台。
      アクセント色は `--silver`(承認済み)

- [x] (M) 新エリア: 大図書館(pages/exploration/grand-library.html)
      ── 天井まで続く魔法書の棚と浮遊する蝋燭。写本体験・書庫迷宮。
      エリア専用の深緑×真鍮パターン

- [x] (M) 新エリア: 決闘演武場(pages/exploration/dueling-ground.html)
      ── 学院生の魔法決闘を観戦・体験できる円形競技場。
      アクセント色は `--crimson`(承認済み)

- [x] (M) 新エリア: 天文台(pages/exploration/observatory.html)
      ── 学院最上部の星界観測施設。魔法望遠鏡・天体儀。
      アクセント色は `--azure`(承認済み)

- [x] (S) 一覧ページのエリアカードにエリア固有アクセント色を適用(承認後)

- [x] (S) 探索一覧ページの opacity テキスト修正: exploration.css の .page-hero__desc(opacity:0.8)・.area-card__desc(opacity:0.75) を color-mix(in oklch, var(--brass) 80%+, transparent) に変換

- [x] (S) area-page.css の .area-breadcrumb__sep(opacity:0.5) を color-mix(in oklch, var(--brass) 50%, transparent) に変換(opacity修正の残件)

- [x] (S) 各エリアページに「このエリアの施設」簡易セクション追加 × 7エリア
      商品一覧・メニュー一覧は出さない。ショップと飲食店の存在を1〜2文で紹介するだけ。
      shop/index.html・dining/index.html の対応エリアタブへのリンクを付ける。
      (shop/dining のエリアタブ実装が完了してから着手すること)

- [x] (S) 錬金術研究棟に「主要研究設備」独自セクション追加(大蒸留器「琥珀の心臓」・
      元素天秤・触媒保管庫・魔法陣刻印記録簿の4項目。area-timetable dl形式)

- [x] (S) 飛行船ドックに「格納設備」独自セクション追加(旗艦係留ドック・魔力充填
      ステーション・竜鱗布倉庫・気象観測バルーンの4項目。area-timetable dl形式)

- [x] (S) 時計塔に「主要機構設備」独自セクション追加(永久運動核・管理台帳「刻の書」・
      予備歯車庫・大鐘「刻の声」の4項目。area-timetable dl形式)

- [x] (S) 大図書館に「書庫設備」独自セクション追加(蔵書親和魔法陣・自浮蝋燭群・
      蔵書修復工房・蔵書検索魔法陣の4項目。area-timetable dl形式)

- [x] (S) 決闘演武場に「演武場設備」独自セクション追加(演武場床「カルネ岩」・
      防護結界発生装置・魔封石保管庫・考査記録室の4項目。area-timetable dl形式)

- [x] (S) 魔法陣召喚広場に「広場設備」独自セクション追加(大魔法陣「刻の輪」・
      四元素石・陣紋補修記録簿・契約精霊の棲家「風見の祠」の4項目。
      area-timetable dl形式)。これで学院内探索の7エリア全てに固有設備セクションが
      揃った。

### 3. 学院祭・行事

- [x] (S) イベントカレンダーのHTML骨格(8行事・季節タグカード)

- [x] (M) シーズンイベントの切り替え表示(春/夏/秋/冬ボタンで絞り込み。JS + CSS)

- [x] (S) 各イベントの詳細展開(アコーディオンまたはモーダルで詳細情報・持ち物・
      整理券情報などを表示)

- [x] (S) 注目イベント(学院祭)の特別ビジュアル強化(画像・カウントダウン等)

- [x] (M) ページ全体の情報量を強化(8行事すべての詳細パネルに「豆知識」dt/dd行を
      追加。各行事に固有の歴史・裏話を1件ずつ書き下ろした)

- [x] (M) イベントタグにエリア軸を追加し、季節タグと組み合わせた複合フィルタリング
      (エリア×季節)に対応(7エリア + 全エリア共通の8種類のエリアフィルターボタンを
      新設。各イベントカードに data-area 属性とエリアタグ表示を追加し、
      src/season-filter.js を季節×エリアのAND条件フィルタリングに拡張)

### 4. 購買部

- [x] (S) 商品一覧のHTML骨格(pages/shop/index.html)
      カテゴリ(制服・魔導具・書籍・食料品・みやげ)をカードで表示

- [x] (M) カテゴリページ: 制服(pages/shop/uniforms.html)
      魔法学院の制服・ローブ・ハットの詳細。サイズ表・素材説明を含む

- [x] (M) カテゴリページ: 魔導具(pages/shop/magical-tools.html)
      杖・魔法陣刻印具・魔力石などの品揃え。こだわりの商品説明

- [x] (M) カテゴリページ: みやげ・食品(pages/shop/souvenirs.html)
      学院限定品・薬草茶・魔法合金アクセサリーなど

- [x] (M) カテゴリページ: 書籍・資料(pages/shop/books.html)
      学院監修の入門書・写本・論文集。希少度・分野タグ付き

- [x] (M) カテゴリページ: 食料品・薬草(pages/shop/groceries.html)
      農園直送の薬草乾燥品・魔力蜂蜜・学食スイーツパッケージ

- [x] (S) event-card__trigger に aria-controls 属性を追加して支援技術との連携を強化

- [x] (S) 制服・魔導具ページの shop-hero__visual に img タグ追加(REQ-016/017 画像到着)

- [x] (S) みやげ・書籍・食料品ページの shop-hero__visual にも同様の img タグ追加(REQ-018/019/020 画像到着)

- [x] (M) shop/index.html をエリア別タブ構造に改修
      エリアタブ(錬金術研究棟・飛行船ドック・時計塔・大図書館・決闘演武場・魔法陣召喚広場・天文台・中央購買部)を設ける。
      各エリアタブには、そのエリアの店舗カード一覧を表示。クリックで店舗詳細ページへ遷移。
      「中央購買部」タブには既存の制服・魔導具・書籍・食料品・みやげのリンクを表示。

- [x] (M) エリア別店舗詳細ページ × 7エリア (pages/shop/<area>-shop.html)
      全14ページ実装済み:
        錬金術研究棟 → 蒸留工房店・実験器具販売所
        飛行船ドック → 羅針堂・風袋商会
        時計塔 → 時刻堂・歯車細工所
        大図書館 → 写本堂・魔法インク工房
        決闘演武場 → 決闘記念品店・魔法武具展示室
        魔法陣召喚広場 → 召喚素材専門店・魔法陣工房
        天文台 → 星図堂・夜空雑貨店

- [x] (M) エリア別店舗詳細ページ14ページの shop-hero__visual に img タグ追加
      画像はREQ-021〜027(エリアショップhero)・REQ-035〜041(店舗個別hero)が
      すべて assets/images/shop/ に到着済み。uniforms.html等で採用した
      shop-hero__visual-img パターンを14ページ分に適用した。

- [x] (S) shop/index.html の category-card__visual(中央5種+エリア別14種、
      計19種)に実画像を反映。各ページのhero画像と同一ファイルを
      background-image で再利用した。

- [x] (S) 商品アイコン(product-entry__visual)の依頼方針を検討し確定。19商品ページが
      13種類の視覚修飾子(中央5種+エリア別8種)を共有していることを確認したうえで、
      商品単位ではなくこの13種の粒度でカテゴリ共通アイコンをREQ-055〜067として依頼。

- [x] (S) 商品アイコン13種中3種(制服=uniform・魔導具=tool・みやげ=souvenir)に
      実画像を反映(REQ-055〜057)。background-size: coverで正方形バッジアイコンを
      表示。残り10種(書籍・食料品・エリア別8種)は素材待ち。

### 5. 学食・喫茶室

- [x] (S) メニュー一覧のHTML骨格(pages/dining/index.html)
      ランチ・スイーツ・ドリンクをカードで一覧。架空の料理名と説明

- [x] (M) メニュー詳細(アンカーまたはアコーディオンで材料・アレルギー・魔法効果の説明)

- [x] (S) 限定メニュー・季節メニューの告知ブロック

- [x] (M) dining/index.html をエリア別タブ構造に改修
      8タブ（中央学食 + 7エリア）。中央学食タブに既存メニュー、7エリアは近日公開状態。
      shop-tabs.js を流用。dining.css にタブスタイル追加。

- [x] (M) エリア別飲食店詳細ページ × 7エリア (pages/dining/<area>-dining.html)
      各エリアの雰囲気に合った飲食店。例:
        錬金術研究棟 → 秘薬スタンド・ポーション型ドリンク専門(pages/dining/alchemy-dining.html)
        飛行船ドック → 空賊カフェ・船員食堂(pages/dining/airship-dining.html)
        時計塔 → 歯車喫茶(スチームパンク調)(pages/dining/clock-tower-dining.html)
        大図書館 → 読書喫茶・茶室(pages/dining/library-dining.html)
        決闘演武場 → 回復スタンド・軽食(pages/dining/dueling-dining.html)
        魔法陣召喚広場 → 召喚前夜祭カフェ(pages/dining/summoning-dining.html)
        天文台 → 星見ダイナー(夜景付きレストラン)(pages/dining/observatory-dining.html)

- [x] (M) エリア別飲食店7ページの dining-page-hero__visual に実画像を反映
      REQ-042〜048(ダイニングヒーローバナー)を shop-hero__visual-img と同様の
      img タグパターンで反映した。

- [x] (S) dining/index.html のエリアタブ内 dining-venue-feature__visual(各エリアの
      店舗紹介カード)に実画像を反映。aria-hidden の装飾要素のため img タグではなく
      background-image(REQ-042〜048と同じ画像)で対応した。

- [x] (M) 中央学食を含め、全体的に「列挙しているだけ」に見える構成を見直し、
      インタラクティブ性を強化。dining/index.htmlの7エリアタブそれぞれに
      「人気メニュー」1品ずつをアコーディオン形式でプレビュー追加(既存の
      menu-item/menu-item__trigger/dining-menu.jsパターンをそのまま再利用し、
      新規JS実装は不要だった)。

### 6. 入学願書(チケット案内)

- [x] (S) 料金表の作成(pages/tickets/index.html)
      一般・学生・家族券などの料金体系。架空だが現実的な設定

- [x] (M) 人数・日程を選ぶ簡易シミュレーターの実装
      (計算ロジックは src/logic.js に純粋関数として実装し、tests/logic.test.js で
      テストすること。送信は不要)

- [x] (S) 来場者向けのお役立ち情報(おすすめ滞在時間・混雑情報・アクセスリンク)

- [x] (S) 学籍種別ごとの年間パス「四季来訪証」の紹介セクション追加
      (大人・学生・小人・家族の4区分。年会費・購買部/学食割引・季節行事優先案内などの特典)

- [x] (S) 団体・修学旅行向け特別プランの案内セクション追加
      (20名様以上・団体料金20%引・引率者無料枠・見習い案内人ガイドツアーオプション)

- [x] (S) チケット関連のFAQ追加(キャンセル・当日券・有効期限・紛失時の再発行。Q&Aアコーディオン形式)

### 7. 学院への道のり(アクセス+マップ)

- [x] (S) アクセス情報(架空の最寄り駅・交通手段・所要時間。pages/access/index.html)

- [x] (M) キャンパスマップ(SVG で学院全体を俯瞰。各エリアをクリックで説明表示)

- [x] (S) 初めての方向けモデルルートの追加(日帰り満喫プラン[電車利用]・
      遠方からのゆったり1泊プラン[お車利用]の2ルートをタイムライン形式で紹介)

- [x] (S) 駐車場の詳細情報追加(学院東駐車場・学院西臨時駐車場の台数・料金・
      混雑時間帯を表形式で比較)

- [x] (S) 周辺の提携宿泊施設の紹介セクション追加(銀時計亭・魔法街道ステーション
      ホテル・星降る丘コテージの3施設)

- [x] (S) 提携宿泊施設3件の lodging-card__visual に実画像を反映(REQ-049〜051)

### 8. 学院案内(サービス情報)

- [x] (S) 服装規定・持ち物などの案内(pages/guide/index.html)

- [x] (S) よくある質問(Q&A アコーディオン形式)

- [x] (S) 学院ルール・注意事項(写真撮影ポリシー・魔法使用ルールなど)

- [x] (S) 園内サービス施設の案内追加(救護室・遺失物取扱所・コインロッカー・
      授乳室・車椅子貸出の5項目をdl形式で紹介)

- [x] (S) バリアフリー・多言語対応の案内追加(枠なし2カラムでバリアフリー対応/
      多言語対応の各リストを掲載)

- [x] (S) 案内係を務める魔法生物の紹介コーナー追加(文鎮フクロウ「ホーホー」・
      歯車ネズミ「カチカチ」・星兎「ルミナ」の3体)

- [x] (S) 案内役の魔法生物3体の mascot__avatar に実画像を反映(REQ-052〜054)

### 9. OGPアイキャッチ画像

- [x] (S) og:type/og:title/og:descriptionを主要8ページに追加

- [x] (S) 共通アイキャッチ画像(assets/images/og-image.jpg)をREQ-068として依頼・反映。
      時計塔と飛行船が浮かぶ夕景の一枚絵

### 12. 全ページ演出・体験強化

- [x] (M) トップページ: about-section・highlights-section・nav-cards-section・
      seasonal-events-section・ticket-info-section・access-summary-section・
      news-sectionの計7セクションに、IntersectionObserverベースのスクロール連動
      fade-in(`.reveal`クラス、`src/scroll-reveal.js`)を追加。about-section と
      ticket-info-section のセクション区切り(ornament)に、緩やかに回転する歯車
      グリフ(`.ornament-gear`、Unicode ⚙️、16s周期)を追加した。JS無効時は常に
      表示(body.js-revealが付かない)、prefers-reduced-motion時はtransition/
      animationを停止、印刷時も全セクション常時表示になるようbase.cssの
      `@media print`にも対応を追加。
      (2026-07-27追記: 実装後にユーザーから「歯車が小さすぎて見えない」
      「fade-inとhoverしかしていない」と指摘され、歯車を1.8rem/9s周期+光彩に
      強化し、以降のサブタスクはインタラクション性・キャラクターの動きを優先する
      方針に修正した)

- [x] (S) 学院案内: 既存の魔法生物マスコット3体(文鎮フクロウ「ホーホー」・歯車ネズミ
      「カチカチ」・星兎「ルミナ」)の`mascot__avatar`を`<button>`化し、クリックで
      一言セリフ(`mascot__speech`)がpop-inで開閉するインタラクションを追加。
      各avatarには常時ゆるやかな上下バウンド(`mascot-bob`、3体で位相をずらして
      同期させない)のidleアニメーションも追加。`src/mascot-speech.js`で
      aria-expanded/aria-controls/hiddenの標準的な開閉トグルを実装
      (既存の`src/guide-qa.js`と同じ設計)。prefers-reduced-motion時は
      bob/pop-inアニメーションを停止(hidden切替による表示自体は維持)。
      新規イラスト素材は使わず、既存のREQ-052〜054画像とCSS/JSのみで実装。

- [x] (M) トップページ: `worldview-check`(2026-07-27実施)で指摘された量産型
      パターン4件を、scale拡大・box-shadowの拡大(浮き上がり)・fadeのみの遷移を
      使わずに修正。
      1. `.reveal`のイージングを汎用的な`ease-out`から、opacityはexpo-out
         (`cubic-bezier(0.16, 1, 0.3, 1)`)、transformはわずかにオーバーシュートして
         収まる`cubic-bezier(0.34, 1.56, 0.64, 1)`に差し替え。
      2. カルーセルのスライド切り替えを`highlight-fade`(opacityのみ)から、
         回転+ズレの噛み合いから正位置に収まる`highlight-card-engage`
         (rotate+translateX)に変更。
      3. カルーセルのアクティブドットの`scale(1.2)`を、点灯する魔法陣の光点を
         想起させるbox-shadowの明滅(`dot-glow-pulse`、1.8s周期)に置き換え。
      4. nav-cardホバー時のアイコン`scale(1.15)`を、`text-shadow: 0 0 8px
         currentcolor`による発光(バリアント毎の色にcurrentColorで自動追従)に
         置き換え。
      いずれもprefers-reduced-motion時はアニメーションを停止(ドットは静的な
      glowにフォールバック)。

- [x] (M) 学院内探索(一覧+7エリア): 一覧の各エリアカードに「見どころをのぞく」
      トリガーボタンを追加し、クリックで2件の見どころ(各エリア詳細ページの
      attraction-listから既存コピーを再利用、新規テキスト無し)が展開する
      インタラクションを実装(`src/area-peek.js`、aria-expanded/aria-controls/
      hiddenの標準トグル)。カード本体のナビゲーションリンク(`.area-card__link`)
      とは別要素にすることで、クリック展開とページ遷移が競合しないようにした。
      展開時のアニメーション(`area-peek-open`)はトップページのカルーセル修正と
      同じ「回転+ズレの噛み合いから正位置に収まる」動きを再利用し、サイト全体で
      一貫した機械的な質感を持たせた(scaleは使わない)。カードのボーダー装飾を
      `.area-card__link`から`.area-card`自体に移し、キーボード操作時も
      `:focus-within`でハイライトされるようにした。

- [x] (M) 購買部(一覧+14店舗): エリアタブ切替に「切り替わった」実感を伝える演出を
      追加(HTML変更なし、CSSのみ)。
      1. `.tab-btn.is-active`に`tab-lock-in`(text-shadowの一瞬の発光フラッシュ)
         を追加。新しくis-activeが付いたタブだけで再生される
      2. `.tab-panel`に`tab-panel-engage`(学院内探索の`area-peek-open`・
         トップページの`highlight-card-engage`と同じ「回転+ズレの噛み合いから
         正位置に収まる」動き)を追加し、サイト全体で一貫した機械的な質感を継続
      3. dining.cssの`.dining-tabs .tab-btn`は独立した名前空間のため影響なし
         (学食・喫茶室は別サブタスクとして今後対応)
      店番キャラクター的な挿絵は、REQ-069として購買部共通の1体
      (`assets/images/shop/shopkeeper-mascot.png`)をASSET_REQUESTS.mdに依頼済み
      (素材到着後、タブナビ付近に配置する別サブタスクとして扱う)。
      prefers-reduced-motion時は両アニメーションを停止。

- [x] (M) 学食・喫茶室(一覧+7店舗): タブ切替と人気メニュープレビューの開閉に演出を
      追加(HTML変更なし、CSSのみ)。人気メニューのクリック開閉自体(`.menu-item__
      trigger` + `src/dining-menu.js`)は既存実装済みだったため、そこに欠けていた
      「動き」を追加する形で対応。
      1. `.dining-tabs .tab-btn.is-active`/`.dining-tabs .tab-panel`に、購買部と
         同じ動きの言語(`dining-tab-lock-in`の発光フラッシュ、
         `dining-tab-panel-engage`の噛み合い→正位置)を追加
      2. `.menu-item__panel`(中央学食タブ・各エリアの「人気メニュー」プレビュー
         両方で共有)に`menu-item-panel-engage`を追加し、詳細を開いた瞬間に
         同じ質感の動きが伝わるようにした
      いずれもscaleは使わず、prefers-reduced-motion時は3つとも停止。

- [x] (S) 学院祭・行事: 季節×エリアの複合フィルタに「絞り込みを発動した」実感を
      伝える演出を追加(HTML変更なし、CSSのみ)。
      1. `.event-filter__btn.is-active`に`event-filter-activate`(小さな魔法陣が
         展開して消えるリング状のbox-shadow、0→8px spreadでopacity 60%→0%)を追加。
         「浮き上がり」表現の静的box-shadowとは異なり、展開/収束する発光として
         意図的に設計
      2. `.event-card:not([hidden])`に`event-card-engage`(既存のtab-panel-engage
         /area-peek-openと同じ「噛み合って正位置に収まる」動き)を追加し、
         フィルタで新たに表示されたカードだけが動く(hidden属性が外れた瞬間のみ
         再生されるため、既に表示中のカードは動かない)
      いずれもscaleは使わず、prefers-reduced-motion時は両方停止。

- [x] (S) 入学願書(チケット案内): 料金シミュレーターの合計金額表示に、rAFベースの
      カウントアップ(0.4s、ease-out cubic)を追加。着地した瞬間にember色の発光
      フラッシュ(`sim-total-settle`)も加えた。
      - `src/ticket-sim.js`: `animateTotal()`を追加。`prefers-reduced-motion`時は
        即座に最終値を表示
      - **アクセシビリティ修正(local-reviewで検出・その場で対応)**: `#sim-result`は
        `aria-live="polite"`のため、そのままではカウントアップ中の中間値
        (1キー入力あたり最大24回程度)がすべて読み上げられてしまう不具合を発見。
        アニメーション中だけ`aria-live`を`off`にし、最終値が確定した瞬間に
        `polite`へ戻すことで、スクリーンリーダーには最終合計のみが1回読み上げ
        られるようにした(Playwrightでaria-live値の推移を確認済み)
      - scaleは使用していない(数値のカウントアップ自体が固有の演出のため)

- [x] (S) 学院への道のり: キャンパスマップのエリア選択に「ハイライト」と「案内役
      キャラクター」の両方を追加(HTML変更は最小限、新規イラストは使わず既存の
      guide/index.htmlのマスコット3体を再利用)。
      1. `.map-area.is-selected rect`(通常/`--center`とも)に、選択境界線が
         魔法陣のように描画されて現れる`map-area-trace`(stroke-dasharray/
         stroke-dashoffsetアニメーション、scaleは使わない)を追加
      2. `src/campus-map.js`に`data-area`から学院案内ページのマスコットを引く
         `MASCOTS`テーブルを追加。大図書館=ホーホー、時計塔=カチカチ、
         天文台=ルミナの3エリアを選択した時だけ、パネル上部に対応するアバター
         画像(`assets/images/guide/mascot-*.png`を再利用)と道案内の一言が
         `map-guide-engage`アニメーション付きで現れる。他5エリアでは非表示
      - **local-reviewで検出・その場で修正**: マスコット名が自己完結的に
        「」で囲まれている(例: 文鎮フクロウ「ホーホー」)のに、セリフ側にも
        JSで「」を追加していたため二重の括弧が並んで読みにくくなっていた。
        「：」区切りに変更して解消
      - `#map-panel`は元々`aria-live="polite"`だが、更新は1クリックにつき1回の
        同期的なDOM更新のみ(rAFによる連続更新は無い)なので、入学願書サブタスクで
        発生したような読み上げ過多の問題は生じない

- [x] (S) 学院内探索の7エリア詳細ページ: 「体験・見どころ」アコーディオン
      (`.attraction-item__panel`)の開閉が演出無しで瞬間的に表示/非表示される
      だけだったため、購買部・学食のタブパネルと同じ「回転+ズレの噛み合いから
      正位置に収まる」動き(`attraction-panel-engage`)を追加した。area-page.css
      は7エリアの詳細ページ全てで共有されているため、1箇所の編集で全ページに
      反映される。scaleは使わず、prefers-reduced-motion時は停止。

- [x] (S) 404ページ: 見出し「迷子の魔法陣」という言葉に対し実際のビジュアルが
      存在しなかったため、インラインSVGで魔法陣(円2重+六芒星)を追加した。
      各図形に`pathLength="1"`を設定して`stroke-dasharray`/`stroke-dashoffset`
      を正規化し、外周円→内周円→六芒星2枚の順にわずかな`animation-delay`差を
      付けて読み込み時にstroke描画されるようにした(学院への道のりページの
      `map-area-trace`と同じ技法)。装飾目的のためSVGは`aria-hidden="true"`、
      情報は既存の「迷子の魔法陣」テキストがそのまま担う。
      prefers-reduced-motion時はアニメーション無しで即座に描画済み状態。

- [x] (S) 入学願書・学院案内のQ&Aアコーディオン: `.qa-panel`(tickets.css・
      guide.css、両ページとも`src/guide-qa.js`共有)が開閉時に無演出だったため、
      前サイクルの学院内探索`.attraction-item__panel`と同じ「回転+ズレの
      噛み合いから正位置に収まる」動き(`qa-panel-engage`)を両ファイルに
      追加した。2ファイルは別ページでしか読み込まれないため同名キーフレームの
      重複による衝突は無い。scaleは使わず、prefers-reduced-motion時は停止。

- [x] (S) 学院祭・行事の「詳細を見る」展開パネル: `.event-card__panel`
      (events.css)がトリガーアイコンの回転のみでパネル自体には無演出だった
      ため、前サイクルまでのアコーディオン系ページと同じ「回転+ズレの噛み合い
      から正位置に収まる」動き(`event-panel-engage`)を追加した。絞り込み表示
      用の`event-card-engage`(カード自体がhidden解除された時に再生)とは別の
      トリガー(`.event-card.is-open`)・別要素のため、独立したキーフレームとして
      追加し、両者が干渉しないようにした。scaleは使わず、既存の
      prefers-reduced-motionブロックに追加する形で停止条件も揃えた。

- [x] (M) ナレーション・環境音の土台づくり: 主要3ページ(トップページ・学院内探索・
      入学願書)のナレーション候補をASSET_REQUESTS.mdへ依頼した(REQ-070〜072、
      Irodori-TTS、台詞は絵文字感情タグ表の範囲内のみ使用)。効果音は現行の3ツール
      (Midjourney/ChatGPT/Irodori-TTS)では生成に適さないため今回は見送り、
      別途ツールが決まった段階で再検討する。実装(再生ボタンの設置)は音源到着後の
      別タスクとして切り出した。

### 13. 隠し用語集ページ群

- [x] (M) 隠しページ候補の棚卸しを実施(2026-07-28)。全ページ本文中の「」括り
      固有名詞50件をgrepで抽出し、既に文中で十分説明されている物(メニュー名・
      商品名など)を除外して4件の候補を選定、`docs/ROADMAP.md`の「### 13」に
      一覧として記録した(魔法生物[承認済み・優先度最高]、永久運動術式、
      魔導88星座、歴代決闘王[以上3件は承認待ち])。候補一覧は今後の個別ページ
      実装で参照するため`docs/ROADMAP.md`側に残置(このファイルへは棚卸し
      タスク自体の完了記録のみ退避)。

- [x] (S) 棚卸し結果の1件目として `pages/glossary/mythical-creatures.html`
      (魔法生物図鑑)を新設(2026-07-28、ユーザー承認済みページ)。
      「準魔素生命体」という世界観設定を新たに定義し、文鎮フクロウ・歯車ネズミ・
      星兎の3体それぞれに分類・生息域・初報告(field guide形式のdl)と、由来・
      生態を掘り下げたlore文を書き下ろした。歯車ネズミの由来は`### 13`候補2の
      「永久運動術式」に触れる形で伏線的にクロスリファレンスした。アバター画像は
      `guide/index.html`と同じ既存3枚(REQ-052〜054)を再利用し新規素材は不要。
      idleのbobアニメーション(guide.cssのmascot-bobと同じ動きの言語)付き。

- [x] (S) `src/search-data.js` の検索インデックスに隠しページを追加
      (`category: '図鑑'`)。通常のヘッダーナビ・`pages/sitemap.html`には
      意図的に非掲載のままとし、両ファイルに「意図的な除外である」旨のコメントを
      追記して将来のサイクルが掲載漏れと誤解しないようにした。Playwrightで
      ヘッダーナビに含まれないこと・検索「魔法生物」で正しくヒットすることの
      両方を確認済み。

- [x] (S) 候補2「永久運動術式」を実装(2026-07-28、ユーザー承認済み)。
      `pages/glossary/perpetual-motion.html`を新設し、考案者グラハム・フィンレー
      の人物像(学院創立者アルノルド卿の最初の弟子、記録がほとんど残っていない
      謎めいた人物)と、永久運動術式の仕組み(魔力を消費せず循環させる原理、
      400年間無補給で稼働という実績、現代でも完全再現できていないという未解決の
      謎)の2エントリで構成。`exploration/clock-tower.html`側の既存の言及箇所は
      変更せず、説明を加えすぎないようにした。魔法生物図鑑(creature-entry)とは
      異なり顔となる画像アセットが無いテキスト中心の資料ページのため、新たに
      `.archive-entry`ブロック(glossary.css)を用意し、歯車グリフの緩やかな回転
      (`gear-spin`、index.cssのornament-gearと同じ9s周期)で装飾した
      (prefers-reduced-motion時は停止)。`src/search-data.js`・
      `pages/sitemap.html`双方に、魔法生物図鑑と同じ「意図的な除外」コメントを
      追記して隠しページとして登録した。

- [x] (S) 候補3「魔導88星座」を実装(2026-07-28、ユーザー承認済み)。
      `pages/glossary/starmap-fragments.html`(星図の断片)を新設し、88座のうち
      5座(鍵持ち座・硝子瓶座・振り子座・双光蛾座・忘れ潮座)にカタログ番号と
      短い逸話を付けて紹介。各逸話は既存エリア(錬金術研究棟・時計塔・決闘演武場・
      大図書館)や既存設定(星座紋解析台による魔法適性判定)にさりげなく紐付け、
      新規に矛盾する設定を持ち込まないようにした。「レイアウト多様化」方針に
      沿い、資料アーカイブ形式(`.archive-entry`)とは別の索引カード風レイアウト
      (`.fragment-entry`、カタログ番号バッジ+短い逸話)を新設。天文台関連コンテンツ
      向けに承認済みの`--azure`をアクセント色として使用(`docs/PALETTE.md`で
      「天文台(予定)」として既に許可されていた枠)。`exploration/observatory.html`
      側の既存言及は変更せず。`src/search-data.js`・`pages/sitemap.html`に
      隠しページ登録+除外コメントを追記。画像アセットなしのテキストページ。

- [x] (S) 候補4「歴代決闘王」を実装(2026-07-28、ユーザー承認済み)。
      `pages/glossary/dueling-champions.html`(決闘王列伝)を新設し、歴代決闘王
      5名を年表形式で紹介。伝説の一戦「第三閃光戦」(`exploration/dueling-ground.html`
      既出)の勝者エドモン・ヴェイルを最古の代として含め、既存設定と矛盾しない
      よう56年前と位置づけた。他4名(初の女子決闘王、最年少決闘王、29連勝記録
      保持者、直近の決闘王)は新規に書き下ろし、それぞれ得意技・逸話を添えた。
      「レイアウト多様化」方針に沿い、資料アーカイブ・星図断片とも異なる年表
      レイアウト(`.champion-timeline`、縦線+ドットの時系列表示)を新設。
      決闘演武場向けに承認済みの`--crimson`をアクセント色として使用。
      `shop/dueling-shop.html`・`shop/index.html`・`exploration/dueling-ground.html`
      の既存言及は変更せず。`src/search-data.js`・`pages/sitemap.html`に隠しページ
      登録+除外コメントを追記。画像アセットなしのテキストページ。
      これで承認済みだった候補2〜4はすべて実装完了(候補一覧は`docs/ROADMAP.md`
      「### 13」に引き続き残置、今後の新候補は5番以降として追加していく)。

- [x] (S) 未決事項を解消(2026-07-28): 検索結果一覧(`pages/search.html`)で
      隠しページが通常ページと見分けが付かなかったため、`src/search-data.js`の
      隠しページ4件に`hidden: true`フラグを追加し、`src/search.js`の描画処理で
      該当エントリにのみ「✦ 発見」バッジを付与するようにした。過度に目立たせない
      よう、ホバー時のみではなく常時のごく淡い発光(`text-shadow`)のみとし、
      pulseアニメーションは付けなかった(検索結果に複数ヒットした場合の視覚的な
      うるささを避けるため)。Playwrightで、隠しページ検索時のみバッジが表示され
      通常ページでは表示されないことを確認済み。

### 14. 提携宿泊施設

- [x] (M) `pages/access/lodging.html`(depth-1)を新設(2026-07-28、ユーザー承認済み
      ページ)。学院前旅籠「銀時計亭」・魔法街道ステーションホテル・郊外リゾート
      「星降る丘コテージ」の3施設それぞれに、客室タイプ・設備・提携特典の詳細・
      ご予約方法をdlリストで整理して掲載。既存の`access/index.html`カード
      (名称・距離・一行説明のみ)からは大幅に情報量を増やし、具体的な部屋数
      (12室/40室/8棟)・宿泊人数・料金帯など固有の数字を書き込んだ。
      レイアウトはエリアヒーロー(縦積みバナー)や購買部の商品リストとは
      あえて変え、画像+テキストの横並びメディアオブジェクトを3件連続で配置する
      構成にした(「レイアウト多様化」方針)。ヒーロービジュアルは新規に依頼せず、
      `access/index.html`の各カードで既に使われている実画像
      (`assets/images/access/lodging-{inn,hotel,cottage}.jpg`)を再利用。
- [x] (S) `access/index.html`の各宿泊施設カードに「客室・設備の詳細を見る →」
      リンクを追加し、新ページの対応セクション(アンカーID付き)へ誘導。
      カード自体は既存どおり非リンクのまま維持し、リンクは独立した要素として
      追加した。
- [x] (S) `pages/sitemap.html`の「その他のご案内」に新ページを掲載(隠しページ群
      とは異なり、意図的に発見しやすい通常ページとして追加)。`src/search-data.js`
      の検索インデックスにも追加。

### 15. ARG基盤・ノスティオン(旧称: コデックス)

- [x] (S) 断片依存順序の検証テスト(2026-07-28): `scripts/arg-design-utils.js`を
      新設し、`docs/ARG-DESIGN.md`4節の表をmarkdownテーブルとしてパースする
      関数群(`extractIdGraph`・`extractImplementedPaths`・
      `extractFragmentDependencies`)を実装。`tests/arg-design-consistency.test.js`
      で以下3点を機械的に検証する: (1) status「実装済み」の実ファイルパスが
      実在するか、(2) 表のどこかで参照されるP番号/PGATE/PFINALが表のどこかに
      実在する定義を持つか(網状構造の複数親・4-5節のチェーン表記にも対応)、
      (3) 「必要な断片」を持つ行がstatus「実装済み」の場合、その断片の産出元
      行も実装済みになっているか(依存順序違反の検出)。
      実装中、4-5節の単発チェーン行(矢印「→」を使わない`P47 | P48`のような
      1段だけの行)が「定義」として認識されず、P48/P50/P52が誤って
      「未定義への参照」判定される実バグを発見・修正した(3列固定の
      4-5節フォーマットでは2列目のIDトークンを常に新規定義とみなすよう
      パーサーを調整)。虚偽陽性・陰性が無いことを、存在しないP番号参照・
      存在しないファイルパス・依存順序違反の3パターンを意図的に作った
      一時データで動作確認済み。

- [x] (S) 複数キーワード対応(2026-07-28): `src/logic.js`の`filterSearchIndex`と
      `src/search.js`の`filterIndex`(file://対応のため複製、既存の`search.js`/
      `search-data.js`の関係と同じ設計)を、`title`+`category`に加えて
      `entry.keywords`配列も対象にした部分一致に拡張。`src/search-data.js`に
      `keywords`/`prereq`フィールドの使い方を説明するコメントを追記(既存4
      エントリへの実際のキーワード追加は別タスク)。重複検出テストとして
      `tests/search-data-consistency.test.js`を新設。`search-data.js`は
      `window.SEARCH_INDEX`へのグローバル代入というES module外の形式のため、
      Node標準の`vm`モジュールで`window`サンドボックスを作って読み込む方式にした。
      当初`title`/`category`/`keywords`をまとめて重複チェック対象にしたところ、
      `category`(「学食・喫茶室」等)は複数ページで共有される前提のラベルであり
      誤検知したため、`title`+`keywords`のみに絞って修正。
- [x] (S) 進捗の保持(2026-07-28): `src/logic.js`に`addSecretToProgress`・
      `addFragmentToProgress`・`markFragmentUsed`を純粋関数として実装
      (`{ secrets: string[], fragments: {id,foundAt,used}[] }`という
      `docs/ARG-DESIGN.md`2-2節の構造をそのまま操作)。`src/codex-progress.js`を
      新設し、`localStorage`キー`codex-memory`への実際の読み書きを担う
      (ロジックは`logic.js`と同内容を複製、DOM操作のみのスクリプトのため)。
      `data-page-path`属性でページ自身のpathを宣言してこのスクリプトを
      読み込むと、`document.currentScript`経由で自動的に「学院の秘密」へ
      記録される設計にし、既存の隠しページ4件(`pages/glossary/*.html`)に
      それぞれ対応する`data-page-path`付きで読み込みタグを追加した。
      `pages/search.html`にも(記録用ではなく読み取り用として、
      `data-page-path`無しで)読み込ませた。Playwrightで、訪問時の自動記録・
      再訪時の重複防止・search.html側での読み取り(自身は記録されない)を
      実ブラウザで確認済み。
- [x] (S) 検索ゲーティング(2026-07-28): `src/logic.js`に`isSearchEntryUnlocked`
      (純粋関数、`entry.prereq`と訪問済みpath配列を受け取る)を実装し、
      `src/search.js`にはDOM/`window.CodexProgress`経由で同じ判定を行う
      `isUnlocked`を実装、`render()`の結果に`.filter(isUnlocked)`を追加した。
      `CodexProgress`が読み込まれていないページでは判定をスキップし常に表示する
      フェイルオープン設計(パズル用のゲーティングであり、壊れた時に隠しすぎる
      より見せすぎる方を選んだ)。既存4エントリの`prereq`は`docs/ARG-DESIGN.md`
      の指示どおり未設定のまま(常に検索可能)。

- [x] (S) コデックスへの改名(2026-07-28): `pages/search.html`のtitleタグ・
      meta description・見出し(H1)を「サイト内検索」から
      「物知りの魔導書『コデックス』」に変更し、`partials/header.html`の
      ナビ表示名も「検索」から「コデックス」に変更(URLは`pages/search.html`
      のまま維持)。検索バー下にコデックスが一人称で語りかける誘導文
      (`.codex-hint`、「私について知りたいなら、まず『私』について聞いてみる
      とよいでしょう」)を追加し、次のP91実装の伏線を張った。
- [x] (S) P91・コデックス自身への自己言及(2026-07-28): `src/logic.js`に
      `isCodexSelfReferenceQuery`(「私」または「コデックス」を含む問いかけを
      判定する純粋関数)を実装し、`src/search.js`に同ロジックを複製した
      `isCodexSelfReference`+`renderSelfReferenceResponse`を実装。該当する
      検索語が入力されると、通常の検索結果の代わりにコデックスが一人称で
      語る特別な応答(`.search-result--codex`、既存の
      engage系アニメーションを再利用)を表示し、断片F13(個別名「本心の断片」、
      `src/fragment-names.js`に登録)を獲得、達成マーカー`codex-self-reference`を
      「学院の秘密」配列に記録する(実在ページではない合言葉的な達成のため、
      本来の隠しページpathとは別枠のマーカー文字列として扱う)。実装中に
      判明した注意点として、`docs/ARG-DESIGN.md`に「私」「コデックス」を
      今後のP番号ページの`title`/`keywords`に含めないよう注意書きを追記
      (自己言及の特別応答に横取りされてしまうため)。
- [x] (M) コデックスの記録表示(2026-07-28): `pages/search.html`に
      P91未達成の間は`hidden`な`#codex-memory-section`を追加し、
      `src/search.js`の`renderMemorySection`が`window.CodexProgress`の状態から
      内容を組み立てる。「学院の秘密」は分母(`SEARCH_INDEX`の`hidden:true`件数を
      動的カウント、ハードコードしない)付きの件数表示+タイトルリンク一覧、
      「手にした断片」は`src/fragment-names.js`の個別名一覧(使用済みは
      取り消し線でグレーアウト)。断片側は要求される総数などの具体的な残数は
      出さず「学院の奥深くに、まだ知らないことがありそうです……」という
      曖昧な一文に留めた(仕様どおり、達成感の答え合わせにしない)。
      自己言及の達成マーカー(`codex-self-reference`)は実際の隠しページpathでは
      ないため、「学院の秘密」の分母/分子カウントには含めないよう実装した
      (Playwrightで0/4のように正しく除外されることを確認)。
      Playwrightで、初回非表示・自己言及後の表示切替・リロード後の永続化・
      通常検索への非干渉を実ブラウザで確認済み。
- [x] (M) P91応答方式の変更・キャラクター名改名(2026-07-28): ユーザー指摘
      (「ノスティオンについて調べたらノスティオンのページがヒットして押すと
      遷移する感じがよかった」)を受け、`src/search.js`の`renderSelfReferenceResponse`
      (インラインテキスト表示)を廃止し、通常の検索結果と同じクリック可能な
      カード(`SELF_REFERENCE_ENTRY`、`hidden:true`で発見バッジも共通表示)に
      変更した。遷移先として`pages/glossary/nostion-memory.html`(ノスティオンが
      一人称で自身の記憶を語る散文形式の隠しページ、`.origin-story`レイアウトを
      新設)を作成。断片F13の獲得は`src/nostion-memory.js`(新設、そのページ固有の
      アクションとして分離)が担い、達成マーカー文字列`codex-self-reference`は
      廃止して実際のページpath(`glossary/nostion-memory.html`)を「学院の秘密」の
      解禁条件として使うよう`renderMemorySection`を簡素化した。不要になった
      `.search-result--codex`/`.codex-response`/`codex-response-appear`の
      CSSも削除。あわせてキャラクター名を「コデックス」から「ノスティオン」へ
      改名(検索ページ・ナビ・自己言及ギミックの判定ワード・`docs/ARG-DESIGN.md`を
      含め全面更新)。
