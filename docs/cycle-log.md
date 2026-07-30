# サイクル履歴

## 2026-07-31 05:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のP53→P54→P55の3段チェーン
  (食材のふるさと、学院に三つ/林檎栽培実験記録、目的だったのは林檎ではない/
  伝導率測定器台帳、型式から辿る実験の正体)をまとめて選定。
- 実装: P53(カード3)・P54(カード2)の2箇所で旧・定型フックの文言が使われて
  いた。「林檎園の世話を任されている研究生」という語り手を新設し、P53は
  研究生自身の発言として「林檎栽培実験記録」を、P54は同じ研究生が「次に
  調べる先を決めた」という体で「伝導率測定器台帳」を、それぞれ自然な文脈に
  埋め込み直した。3ページを通して同じ研究生が記録→台帳と辿っていく一貫した
  調査の流れにするため、P55の導入文にも軽く触れた。P55本文自体は既に許容
  形式・定型フック無しで適合済みのため変更なし。`docs/roadmap-done.md`
  「### 13」に詳細を追記し、`docs/ROADMAP.md`の対象リストを18件に更新。
- レビュー: OK(local-review観点で目視確認。検索キーワード「林檎栽培実験
  記録」「伝導率測定器台帳」が正しく残っていることを確認済み)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`four-elements-seal.html`
  (P56)とそのflavor`resonance-adjustment-log.html`(P57)・
  `stone-inspection-report.html`(P58、P56〜P58で唯一遡及修正を要さなかった
  との記録あり)の3段チェーンから着手。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 04:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のfestival-undertold.html(P51)と、
  そのflavor fortune-teller-selection.html(P52)をまとめて選定。
- 実装: P51は旧・定型フックの文言が一字一句そのまま使われていたケースだった。
  検索キーワード「占術師選定記録」を、現職の占術師本人への聞き取りという
  体裁に埋め込み直した(「見せてもらったことはない」と笑って答える占術師の
  言葉にすることで、次のページへの導線を自然な会話にした)。P52は既に許容
  形式・定型フック無しで、17代全員が「大点灯」当日生まれという新たな符合を
  残す形で意図的に完全解決を避けていたため変更なし。`docs/roadmap-done.md`
  「### 13」に詳細を追記し、`docs/ROADMAP.md`の対象リストを21件に更新。
- レビュー: OK(local-review観点で目視確認。検索キーワード「占術師選定記録」
  が正しく残っていることを確認済み)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`campus-harvest.html`
  (P53)とそのflavor`orchard-experiment-log.html`(P54)・
  `conductivity-instrument-log.html`(P55)の3段チェーンから着手。同様に
  旧・定型フック使用の疑いがある。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 04:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のfifth-headmaster.html(P49)と、その
  flavor portrait-gallery.html(P50)をまとめて選定。
- 実装: P49は旧・定型フックの文言が一字一句そのまま使われていたケースだった。
  検索キーワード「歴代学長肖像画帳」を、天文台の職員への聞き取りという体裁に
  埋め込み直し、「まだ確かめたことがない」と返す職員自身の言葉にすることで
  次のページへの導線を自然な会話の一部にした。P50は既に「誰の視点でもない
  客観的な資料の記述」という許容形式で書かれ、肖像画は描かれているのに略歴欄
  だけ空白という新たな謎を残す形で意図的に完全解決を避けており、定型フックも
  無かったため変更なし(P49→P50ともに1つのチェーンで書き直しが必要だったのは
  root側のみ、というケース)。`docs/roadmap-done.md`「### 13」に詳細を追記し、
  `docs/ROADMAP.md`の対象リストを23件に更新。
- レビュー: OK(local-review観点で目視確認。検索キーワード「歴代学長肖像画帳」
  が正しく残っていることを確認済み)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`festival-undertold.html`
  (P51)とそのflavor`fortune-teller-selection.html`(P52)から着手。同様に
  旧・定型フック使用の疑いがある。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 03:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のairship-symbols.html(P47)と、そのflavor
  anchor-feather-origin.html(P48)をまとめて選定。
- 実装: P47は旧・定型フックの文言(「もっとも、〜には〜が残っているという
  から、そこに手がかりがあるのかもしれない」)が一字一句そのまま使われていた
  ケースだった。検索キーワード「初代ドック長の航海日誌」を、現在のドック長
  自身の発言として埋め込み直した。P48も推測止まりの終わり方だったため、
  ドック長が実際に日誌を読んだ結果(意匠の由来は見つからなかったが、日誌
  最後の余白に碇と羽根の落書きだけ残っていた)を書き加え、P44→P45と同型の
  「調べたが部分的にしか解決しない」終わり方に変更。ノスティオンの独り言も
  この結末に合わせて書き直した。`docs/roadmap-done.md`「### 13」に詳細を
  追記し、`docs/ROADMAP.md`の対象リストを25件に更新。
- レビュー: OK(local-review観点で目視確認。検索キーワード「初代ドック長の
  航海日誌」が両ページに正しく残っていることを確認済み)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`fifth-headmaster.html`
  (P49)とそのflavor`portrait-gallery.html`(P50)から着手。同様に旧・定型
  フック使用の疑いがある。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 03:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のarnold-namesake.html(P44)と、そのflavor
  amber-heart-blueprint.html(P45)をまとめて選定。前回予告した「旧・定型フック
  使用の疑いがある8件」のうち最初のケースに該当。
- 実装: 予想通り、両ページとも旧・定型フック(「〜には〜が残っているという
  から、そこに手がかりがあるのかもしれない」の類型、検索キーワード
  「設計図台帳」がカード末尾の告知文として置かれていた)を使用していたため
  実質的な書き直しを実施。錬金術研究棟でこの蒸留器を保守する技師という語り手
  を新設し、P44側は技師の発言としてキーワードを本文中ほどに自然に埋め込み、
  P45側は技師が実際に台帳を調べに行った顛末(「原本、貸出中」の記載のみで
  貸出先・返却記録なし)を書き加えて、当初「今度確かめてみます」で止まって
  いた未解決の終わり方を、新たな謎(誰が借りたのか)を残す形に発展させた。
  ノスティオンの独り言もこの結末に合わせて書き直した。`docs/roadmap-done.md`
  「### 13」に詳細を追記し、`docs/ROADMAP.md`の対象リストを27件に更新。
- レビュー: OK(local-review観点で目視確認。検索キーワード「設計図台帳」が
  両ページに正しく残っていることを確認済み)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`airship-symbols.html`
  (P47)とそのflavor`anchor-feather-origin.html`(P48)から着手。同様に
  旧・定型フック使用の疑いがある。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 02:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭の3件が前回予告したP13→P14→P15の陣紋師
  チェーン(陣紋師という仕事/陣紋師任命記録、空白の一件/三つの「刻」との
  奇妙な符合)にちょうど一致していたため、まとめて選定。
- 実装: 3ページとも本文は既に「誰の視点でもない客観的な資料の記述」という
  許容形式で書かれ、定型フックも無かったため変更なし。3ページとも導入文のみ
  「広場管理事務所の事務員」という同一の書き手に統一し、同じ人物が陣紋師の
  仕事をまとめ→任命記録の空白に気づき→鐘の命名との符合に気づく、という
  一貫した調査の流れにした(同じチェーンは語り手を統一する方が自然、という
  SKILL.mdの方針に沿った)。`docs/roadmap-done.md`「### 13」に判断根拠を
  追記し、`docs/ROADMAP.md`の対象リストを29件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`arnold-namesake.html`
  (アルノルド卿の名前、三つの残り方)から着手。この行のflavor
  (amber-heart-blueprint.html、P45)は旧・定型フックの疑いがある8件の
  1つのため、そちらもあわせて確認する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 02:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭の3件(珍薬草「月草」/七代続く写本師
  一族/「魔法資質証明証」)をまとめて選定。
- 実装: 3ページとも本文(3〜4カード)は既に「誰の視点でもない客観的な資料の
  記述」という許容形式で書かれ、定型フックも無かったため各カードは変更なし。
  導入文のみ、それぞれの資料をまとめた書き手を明記した: 学食・購買部の
  仕入れ担当職員(moon-grass)/大図書館の司書(scribe-lineage)/魔導具店の
  店員(aptitude-certificate)。`docs/roadmap-done.md`「### 13」に判断根拠を
  追記し、`docs/ROADMAP.md`の対象リストを32件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`circle-warden.html`
  (陣紋師という仕事)から着手。P13→P14→P15の陣紋師チェーン
  (circle-warden→warden-registry→unnamed-warden)がこの並びで連続するため、
  まとめて処理できないか次回検討する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 01:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭の3件(品評会と段位、記録に残るもの/
  第2代学長フローラ・シルヴァーン、書簡と湿地/学院のどこにでもある、
  人知れない一角)をまとめて選定(root型ページが続いており固定コスト削減の
  ためまとめて処理)。
- 実装: 3ページとも本文(4〜8カード)は既に「誰の視点でもない客観的な資料の
  記述」という許容形式で書かれ、定型フックも無かったため各カードは変更なし。
  導入文のみ、それぞれの資料をまとめた書き手を明記した: 学院事務局の記録
  管理担当者(merit-records)/復刻版ペンを扱う写本堂の店主(second-headmaster)/
  六つの一角を巡り歩いた学生の課外活動記録(hidden-corners、8カードの
  大型ページ)。`docs/roadmap-done.md`「### 13」に判断根拠を追記し、
  `docs/ROADMAP.md`の対象リストを35件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`moon-grass.html`
  から着手。引き続きroot型ページが多いため軽微な差分が続く見込みだが、
  P44・P47・P49・P51・P53・P56・P59・P62系のflavor行に入り次第、
  より実質的な書き直しが必要になる。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 01:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭の3件(アルノルド卿が遺したもの/精霊、
  それぞれの現れ方/陣紋を刻み、守り継いだ記録簿)をまとめて選定。直近3サイクル
  連続で「root型ページは既に許容形式で適合済み、導入文のみ書き手を追加」という
  軽微な差分になっていたため、固定コスト削減のため3件まとめて処理した。
- 実装: 3ページとも本文(4〜6カード)は既に「誰の視点でもない客観的な資料の
  記述」という許容形式で書かれ、定型フックも無かったため各カードは変更なし。
  導入文のみ、それぞれの資料をまとめた書き手を明記した: 購買部の品揃え
  担当者(arnold-relics)/学院新聞部の取材記事(spirits-of-arnold、対話・
  問答寄りの取材形式)/後に陣紋師となる研究生の覚え書き(circle-ledgers、
  P13 circle-warden.htmlの陣紋師チェーンと自然に接続)。
  `docs/roadmap-done.md`「### 13」に判断根拠を追記し、`docs/ROADMAP.md`
  の対象リストを38件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`merit-records.html`
  から着手。残りは主にroot型ページが多いが、P44・P47・P49・P51・P53・
  P56・P59・P62の各flavor行(amber-heart-blueprint等)は旧・定型フックが
  実際に使われていた可能性が高く、そちらは軽微な差分では済まない見込み。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 00:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のbeyond-the-map.html(北方雲海と転移
  広場、地図の余白について、4カード構成)を選定。
- 実装: 4カード本文は既に「誰の視点でもない客観的な資料の記述」という
  許容形式(3節の語り手ルール参照)で書かれ、定型フックも無かったため変更
  なし。導入文(hero__desc)のみ、羅針堂で壁掛け地図の更新を担当する職員の
  覚え書きという書き手を明記した(koku-trioと同じ軽量な書き手付与パターン)。
  `docs/roadmap-done.md`「### 13」に判断根拠を追記し、`docs/ROADMAP.md`
  の対象リストを41件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`arnold-relics.html`
  (アルノルド卿が遺したもの、三つの資料、6カード構成)から着手。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 00:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭のkoku-trio.html(「刻」を名に持つ
  三つの装置、6カード構成)を選定。6カードあるため単独で1サイクルの単位とした。
- 実装: 6カード本文は既に「誰の視点でもない客観的な資料の記述」という
  許容形式(3節の語り手ルール参照)で書かれ、定型フックも無かったため各
  カードは変更なし。導入文(hero__desc)のみ、この比較資料をまとめた
  「学院史料編纂室の職員」という書き手を明記し、無記名の資料から一次資料
  としての体裁に寄せた。`docs/roadmap-done.md`「### 13」に判断根拠を
  追記し、`docs/ROADMAP.md`の対象リストを42件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`beyond-the-map.html`
  (北方雲海と転移広場、4カード構成)から着手。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-31 00:00
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`・`### 12`は引き続き素材待ちでスキップ。`### 13`書き直し
  タスクの続きとして、対象リスト先頭の3件(流れ星、という言葉/名を消された
  決闘王/よりしろ、という響き)を選定。前サイクルのP5〜P7チェーンの
  残り(P7の断片報酬・P8・P91の断片報酬)にあたる。
- 実装: shooting-star.htmlは根拠のない推測が誰の視点でもない地の文で書かれて
  いたため、手記を発見した資料整理係の余白書き込みという体裁に書き直し、
  同チェーンの他ページ(オーレン本人の日記、職人の言い伝え)とは別の語り手を
  追加した。erased-champion.htmlは既に「誰の視点でもない客観的な資料の
  記述」という許容形式(3節の語り手ルール参照)で書かれ定型フックも無かった
  ため変更なし。yorishiro-echo.htmlはノスティオン自身の真名にまつわる
  P91チェーンの最終ページであり、ノスティオン自身の声で書かれているのは
  意図的な例外として妥当と判断し変更なし。`docs/roadmap-done.md`
  「### 13」に3件分の完了記録(判断根拠つき)を追記し、
  `docs/ROADMAP.md`の対象リストを43件に更新。
- レビュー: OK(local-review観点で目視確認、指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しの続き。対象リスト先頭の`koku-trio.html`
  (「刻」三部作、6カード構成)から着手。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-30 23:50
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 4`(購買部)・`### 12`(演出強化)の残タスクは共に素材待ちで
  スキップ。`### 13`書き直しタスクの続きとして、対象リスト先頭のP5→P6→P7
  チェーン(見習い整備士の手記→光る符丁の正体→初代天文官シベル・オーレン→
  記録帳、最後の頁)を選定。
- 実装: 直前の手動チャットで方針確定した`docs/ARG-DESIGN.md`4節の各表に
  「形式」列(書籍/証言/未定、PGATEのみ特殊)を追加し、実装済み全行を分類。
  4-5節は個別列を持たない構成のため節冒頭に既定値(証言)を明記。あわせて
  「書籍」への改称、「掲示・銘板」「対話・問答」の2区分追加(将来使用の
  ための定義のみ、該当ページなし)も反映。列構成変更に伴い
  `scripts/arg-design-utils.js`の断片依存パーサーの列インデックスを補正
  (未修正だと`npm run test`がP92/P93等の依存関係チェックで失敗することを
  確認済み)。P5〜P8チェーンの4ページを確認したところ3ページ
  (gear-cipher/first-astronomer/final-entry)は既に一人称日記・職人の
  言い伝え形式で定型フックも無く適合済みだったため変更なし。
  apprentice-notes.htmlのみ1カードの語り手が手記本人から匿名の調査者に
  不自然に切り替わっていたため、同じ手記の書き込みとして書き直した。
  `docs/roadmap-done.md`「### 13」に4件分の完了記録を追記し、
  `docs/ROADMAP.md`の対象リストを46件に更新。
- レビュー: OK(local-review観点で目視確認。表の列ずれ・重複セルなし)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: `### 13`書き直しタスクの続き。対象リスト先頭の
  `shooting-star.html`から3〜4件を目安に継続。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-30 23:25
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: 直前の手動チャットで方針確定した「既存隠しページ54件の
  ライティング方針改訂に伴う全面書き直し」(docs/ARG-DESIGN.md 5節
  「フックの定型文使い回しは禁止」「語り手視点の多様化」)が`### 13`の
  最優先タスクとして追加されていたため着手。対象50件のうち先頭4件、
  P1〜P4(root行)を選定。
- 実装: `mythical-creatures.html`(魔法生物図鑑)・`perpetual-motion.html`
  (永久運動術式)・`starmap-fragments.html`(魔導88星座)・
  `dueling-champions.html`(決闘王列伝)の4ページ本文を書き直し。定型の
  「もっとも〜手がかりがあるのかもしれない」的な最後の一文での告知型フックを
  廃し、検索キーワード(修繕工房/静寂の一撃/シベル・オーレン/星座紋解析台/
  第三閃光戦)を証言・引用の自然な流れの中に埋め込み直した。語り手も
  ページごとに割り当て: 魔法生物図鑑は3体それぞれ別人物(司書・魔導機械科
  学生・天文台の観測記録)、永久運動術式は資料室記録・魔導機械科の調査記録・
  魔導文書研究会員の証言、魔導88星座は各星座にゆかりのある卒業生の日誌・
  回想、決闘王列伝は購買部の老店主の私家版記念帖という一貫した視点に統一。
  星座の暗号(ひらがな表記・番号)や検索インデックス(src/search-data.js)は
  一切変更していない。あわせて`docs/roadmap-done.md`「### 13」に書き直し
  完了の4行を記録し、`docs/ROADMAP.md`側の対象リストから該当4行を削除
  (残り50件)。
- レビュー: OK(local-review観点で目視確認。決闘王列伝の老店主の在職年数と
  56年前の逸話が矛盾していた点のみ、その場で「六十年近く」に修正して解消)。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 同タスクの続き。対象リスト先頭の`apprentice-notes.html`から
  3〜4件を目安に書き直しを継続。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-30 22:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 13`優先順位ルール3(既存root行の予約済みflavor枠の
  掘り下げ)に沿って、P62(hidden-ingredients.html)のflavor枠(P63→P64→P65
  の3段チェーン)のうち、まずP63に着手。
- 実装: P62の「魔力ナッツの収穫地が不明」というフックを継続し、
  `pages/glossary/nut-supply-record.html`を新設(2カード)。P59/P56/P51/
  P49/P44/P47実装時と同じ手順で、P62側のこのフックが当初「〜触れられて
  いない」という疑問文のままで検索可能語句を伴っていなかったことに気づき、
  P62の本文にも「魔力ナッツ仕入れ記録」という検索可能な具体語を手がかり
  として追記(P13→P14と同型の対応)。既存の3産地(P53学院農園・薬草園・
  研究棟の林檎園)とは別の仕入れ先「北の行商」の存在を示しつつ、「所在地が
  学院公式マップのどこにも記載されていない」という新たな謎を重ね、P64へ
  続く構成にした(P14→P15・P49→P50・P51→P52・P56→P57・P59→P60の「深める」
  パターンを踏襲)。`src/search-data.js`(prereq: hidden-ingredients.html)・
  `src/hint-data.js`(チェーン継続ヒント1件)・`docs/ARG-DESIGN.md` P62行を
  更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(565件) / build: ✓
- 次回予定: P62チェーンの続き(P63→P64→P65)、またはP16→P17(fragment F3、
  サイズL寄り)・P66→P67-69等のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 22:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: 前サイクル(P60)に続き、P59チェーンの最終段P61に着手し、
  P59→P60→P61のチェーンを完成させた。
- 実装: P60の「書き込みの主が誰かは筆跡照合でも特定できない」という
  フックを継続し、`pages/glossary/visitor-log-match.html`を新設(2カード)。
  P60側にも「来場者記帳簿」という検索可能な具体語を手がかりとして追記
  (P56〜P58と同じく新規実装のため当初からルールに沿って埋め込み、遡及
  修正は不要だった)。書き込みの「る」の筆跡の癖という具体的な特徴で、
  決闘演武場の来場者記帳簿に同じ癖を持つ記帳を見つけつつ、名前だけでは
  何者かまでは辿れないという形で謎を完全解決せず余韻を残して締めくくった
  (P53〜P55・P56〜P58と同様のパターン)。`src/search-data.js`(prereq:
  margin-note.html)・`src/hint-data.js`(チェーン継続ヒント1件)・
  `docs/ARG-DESIGN.md` P59行を更新し、`docs/ROADMAP.md`のflavor枠一覧から
  P59チェーンの記載を除去。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(562件) / build: ✓
- 次回予定: P16→P17(fragment F3、サイズL寄り)・P62→P63-65等の既存root
  flavor枠の掘り下げを継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 21:45
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: `### 13`優先順位ルール3(既存root行の予約済みflavor枠の
  掘り下げ)に沿って、P59(dueling-heritage.html)のflavor枠(P60→P61の
  2段チェーン)のうち、まずP60に着手。
- 実装: P59の「現在の決闘シグルの意匠と古語魔法文の関係が不明」という
  フックを継続し、`pages/glossary/margin-note.html`を新設(2カード)。
  P56/P51/P49/P44/P47実装時と同じ手順で、P59側のこのフックが当初「〜
  触れられていない」という疑問文のままで検索可能語句を伴っていなかった
  ことに気づき、P59の本文にも「法典余白の書き込み」という検索可能な具体語
  を手がかりとして追記(P13→P14と同型の対応)。P60では「この紋こそが、
  後の意匠の原型なり」という書き込みの内容で謎を一歩前進させつつ、
  「書き込みの主が誰かは筆跡照合でも特定できない」という新たな謎を重ね、
  P61へ続く構成にした(P14→P15・P49→P50・P51→P52・P56→P57の「深める」
  パターンを踏襲)。`src/search-data.js`(prereq: dueling-heritage.html)・
  `src/hint-data.js`(チェーン継続ヒント1件)・`docs/ARG-DESIGN.md` P59行を
  更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(559件) / build: ✓
- 次回予定: P59チェーンの続き(P60→P61)、またはP16→P17(fragment F3、
  サイズL寄り)・P62→P63-65等のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 21:15
- ブランチ: 引き続き`evolve/cycle-41`(未マージ)。
- タスク選定: 前サイクル(P57)に続き、P56チェーンの最終段P58に着手し、
  P56→P57→P58のチェーンを完成させた。
- 実装: P57の「儀式のたびに出力がずれる理由は記録の理由欄が空欄のまま」
  というフックを継続し、`pages/glossary/stone-inspection-report.html`を
  新設(2カード)。P57側にも「石材鑑定書」という検索可能な具体語を手がかり
  として追記(P56〜P58で唯一、新規実装のため当初からルールに沿って埋め込み、
  遡及修正は不要だった)。四元素石4つの鑑定結果は「異常なし」と示しつつ、
  鑑定士の所見「石以外の要因を検討されたい」で謎を完全解決せず余韻を残す
  形で締めくくった(P53〜P55と同様のパターン)。`src/search-data.js`
  (prereq: resonance-adjustment-log.html)・`src/hint-data.js`(チェーン
  継続ヒント1件)・`docs/ARG-DESIGN.md` P56行を更新し、`docs/ROADMAP.md`の
  flavor枠一覧からP56チェーンの記載を除去。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(556件) / build: ✓
- 次回予定: P16→P17(fragment F3、サイズL寄り)・P59→P60,P61・
  P62→P63-65等のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 20:50
- ブランチ: `evolve/cycle-40`はGitHub Actionsにより自動マージ・削除済み。
  `git switch main && git pull`で最新化し、新規`evolve/cycle-41`を作成。
- タスク選定: `### 13`優先順位ルール3(既存root行の予約済みflavor枠の
  掘り下げ)に沿って、P56(four-elements-seal.html)のflavor枠P57に着手。
- 実装: P56の「陣と四元素石がどう連動していたか説明なし」というフックを
  継続し、`pages/glossary/resonance-adjustment-log.html`を新設(2カード)。
  P51/P49/P44/P47実装時と同じ手順で、P56側のこのフックが当初「〜書かれて
  いない」という疑問文のままで検索可能語句を伴っていなかったことに気づき、
  P56の本文にも「連動調整記録」という検索可能な具体語を手がかりとして追記
  (P13→P14と同型の対応)。P57では連動の仕組み(共鳴術式)は明かしつつ、
  「儀式のたびに出力がずれる理由は記録の理由欄が空欄のまま」という新たな
  謎を重ね、P58へ続く構成にした(P14→P15・P49→P50・P51→P52・P53→P55の
  「深める」パターンを踏襲)。`src/search-data.js`(prereq:
  four-elements-seal.html)・`src/hint-data.js`(チェーン継続ヒント1件)・
  `docs/ARG-DESIGN.md` P56行を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(553件) / build: ✓
- 次回予定: P56チェーンの続き(P57→P58)、またはP16→P17(fragment F3、
  サイズL寄り)・P59→P60,P61・P62→P63-65等のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 20:30
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: 手動チャットで`docs/ROADMAP.md`「### 10」に追記された
  デバッグ用検索コマンド「!all」タスク(M)に着手。「進行中」に戻っていた
  同ページの唯一の未完了サブタスク。
- 実装: 検索窓に「!all」と入力すると、既存の「!reset」と同様の記号始まり
  裏コマンドとして扱われるが、通常の検索結果と同じ形の1件のカード
  (category: 「デバッグ」)として`pages/debug/search-graph.html`への案内を
  表示するようにした。遷移先は、SEARCH_INDEX(src/search-data.js)の
  hiddenエントリ一つひとつに、HINT_DATA(src/hint-data.js)側からそこへ
  向かうヒントの一覧を付加して表示する開発者向けの可視化ページ。
  root→flavorの木構造(prereqが複数の場合は両方の親の下に重複表示)、
  keywords、incoming hintsに加え、整合性チェック(ヒントが1件も無い
  孤立ページ・prereqの参照切れの検出)も表示する。プレイヤー向けのARG体験
  には含めない(hidden: false、meta robots noindex,nofollow、
  CodexProgressへの読み書き無し)。純粋関数は`src/logic.js`に実装しテスト
  追加(buildDebugGraphNodes/buildDebugGraphTree/findDebugGraphIssues/
  isDebugAllQuery)、`src/debug-graph.js`(ページ本体)・`src/search.js`
  (検索結果カード)には同じロジックを複製(file://対応、既存の
  isDebugResetQuery等と同じ設計方針)。
- レビュー: 実装直後にPlaywrightでのブラウザ動作確認を2回実施し、以下を
  発見・その場で修正: (1) buildDebugGraphTreeが3段以上のflavorチェーン
  (P53→P54→P55等)で孫ノードにchildrenプロパティを付与し忘れておりTypeError
  で木が空表示になる不具合(再発防止のテストケースを追加)、(2) 見出し・
  本文の文字色にvar(--ink)を誤用しておりサイト背景(bodyの背景色も
  var(--ink))と同化して文字が見えなくなる不具合(var(--brass)ベースに
  修正)。さらに実データでの再検証時、P91(nostion-memory.html、意図的に
  SEARCH_INDEX未登録)をprereqとするエントリがdangling-prereqとして誤検知
  される問題も発見し、既知の例外として除外する対応とテストを追加。
  再検証で全て解消を確認(コンソールエラー無し、隠しページ49件/root34件が
  正しくツリー表示、3段チェーンも正しくネスト、文字色も可読)。
- lint: ✓ / lint:css: ✓ / test: ✓(550件) / build: ✓
- 次回予定: `### 13`のP16→P17(fragment F3、サイズL寄り)・P49→P50は実装済み
  のため、P56→P57,P58等の既存root flavor枠の掘り下げを継続。
- blocked / partial: なし
- asset-pending: なし(デバッグ用ページのため、ビジュアルエリアは無し)

## 2026-07-30 19:45
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: 前サイクル(P54)に続き、P53チェーンの最終段P55に着手し、
  P53→P54→P55のチェーンを完成させた。
- 実装: P54の「本来の検証対象は記録の該当ページが破損して判読不能」
  というフックを継続し、`pages/glossary/conductivity-instrument-log.html`
  を新設(2カード)。P54側にも「伝導率測定器台帳」という検索可能な具体語
  を手がかりとして追記。台帳の貸出記録から、林檎園設立年に貸し出されて
  いた測定器が本来「異界微弱反応検知用」の特殊型式だったことを示し、
  単純な土壌検証ではなかった可能性を示唆する形で、チェーンを完全解決
  せず余韻を残して締めくくった(P14→P15と同様のパターン)。
  `src/search-data.js`(prereq: orchard-experiment-log.html)・
  `src/hint-data.js`(チェーン継続ヒント1件)・`docs/ARG-DESIGN.md` P53行を
  更新し、`docs/ROADMAP.md`のflavor枠一覧からP53チェーンの記載を除去。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(529件) / build: ✓
- 次回予定: P16→P17(fragment F3、サイズL寄り)・P56→P57,P58・
  P59→P60,P61・P62→P63-65等のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 19:15
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`優先順位ルール3(既存root行の予約済みflavor枠の
  掘り下げ)に沿って、P53(campus-harvest.html)のflavor枠(P54→P55の
  2段チェーン)のうち、まずP54に着手。
- 実装: P53の「研究棟の林檎だけ甘い理由が不明」というフックを継続し、
  `pages/glossary/orchard-experiment-log.html`を新設(2カード)。P51/P49/
  P44/P47実装時と同じ手順で、P53側のこのフックが当初「〜書かれていない」
  という疑問文のままで検索可能語句を伴っていなかったことに気づき、P53の
  本文にも「林檎栽培実験記録」という検索可能な具体語を手がかりとして追記
  (P13→P14と同型の対応)。P54では甘さの理由を明かさず、「林檎園はもともと
  土壌の魔力伝導率検証用の試験区画で、本来の検証対象が書かれたページは
  破損して判読不能」という新たな謎を重ね、P55へ続く構成にした(P14→P15・
  P49→P50・P51→P52の「深める」パターンを踏襲)。`src/search-data.js`
  (prereq: campus-harvest.html)・`src/hint-data.js`(チェーン継続ヒント
  1件)・`docs/ARG-DESIGN.md` P53行を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(526件) / build: ✓
- 次回予定: P53チェーンの続き(P54→P55)、またはP16→P17(fragment F3、
  サイズL寄り)・P56→P57,P58・P59→P60,P61等のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 18:45
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`優先順位ルール3(既存root行の予約済みflavor枠の
  掘り下げ)に沿って、P51(festival-undertold.html)のflavor枠P52に着手。
  同ページには3つの未解決フックがあったが、最も掘り下げやすい「歴代占術師
  の選定基準」を選んだ。
- 実装: P51の当該フックを継続し、`pages/glossary/fortune-teller-selection.html`
  を新設(2カード)。P49/P44/P47実装時と同じ手順で、P51側のこのフックが
  当初「〜語られていない」という疑問文のままで検索可能語句を伴っていな
  かったことに気づき、P51の本文にも「占術師選定記録」という検索可能な
  具体語を手がかりとして追記(P13→P14と同型の対応)。P52では選考基準を
  明かさず、「歴代17人全員が『大点灯』当日生まれ」という新たな符合を
  重ねる形にした(P14→P15・P49→P50の「深める」パターンを踏襲)。
  `src/search-data.js`(prereq: festival-undertold.html)・`src/hint-data.js`
  (チェーン継続ヒント1件)・`docs/ARG-DESIGN.md` P51行を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(523件) / build: ✓
- 次回予定: P16→P17(fragment F3、サイズL寄り)・P53→P54,P55・
  P56→P57,P58・P59→P60,P61等のflavor化を継続。P51に残る他2つの未解決
  フック(秋祭りから正式行事への格上げの契機/大点灯の詠唱タイミングを
  左右する要因)も、予約済みflavor枠が尽きた際の掘り下げ候補として残る。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 18:15
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `docs/ARG-WORDBANK.md`の候補一覧を使い切ったため、`### 13`の
  優先順位ルール3(既存root行の予約済みflavor枠の掘り下げ)に沿って、
  P49(fifth-headmaster.html)のflavor枠P50に着手。
- 実装: P49の「なぜこの学長だけ実名が伝わっていないのか」というフックを
  継続し、`pages/glossary/portrait-gallery.html`を新設(2カード)。P44/P47
  実装時と同じ手順で、P49側のこのフックが当初「〜見当たらない」という
  疑問文のままで検索可能語句を伴っていなかったことに気づき、P49の本文にも
  「歴代学長肖像画帳」という検索可能な具体語を手がかりとして追記
  (P13→P14・P44→P45・P47→P48と同型の対応)。P50では謎を解決せず、
  「肖像画は描かれているのに略歴欄だけ空白」という新たな謎を重ねる形にした
  (P14→P15の「深める」パターンを踏襲)。`src/search-data.js`(prereq:
  fifth-headmaster.html)・`src/hint-data.js`(チェーン継続ヒント1件)・
  `docs/ARG-DESIGN.md` P49行を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(520件) / build: ✓
- 次回予定: 他の実装済みroot(P16→P17[fragment F3、サイズL寄り]・
  P51→P52・P53→P54,P55・P56→P57,P58等)のflavor化を継続。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 17:50
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `docs/ARG-WORDBANK.md`「## 候補一覧」に残っていた最後の未使用3行
  (魔導機械科・見習い案内人・学院東駐車場)を消化。3語は出典ページも
  テーマも異なりグルーピングできないため、単語1つのみでroot 1ページに
  仕立てる方針(2026-07-30改訂)に沿って、それぞれ独立したrootページとして
  実装(3件を1サイクルにまとめて処理、無関係項目のバンドルでAPI使用量を
  抑える運用に沿った)。
- 実装: P104 `pages/glossary/machinery-department.html`(index.html「魔導機械科」
  から接続、2カード。フック「大時計塔保全記録」)。P106
  `pages/glossary/apprentice-guides.html`(tickets/index.html「見習い案内人」
  から接続、2カード。フック「正案内人認定簿」)。P108
  `pages/glossary/east-lot-history.html`(access/index.html「学院東駐車場」
  から接続、2カード。フック「旧地割図」)。いずれも当初からフックを検索
  可能な具体語として本文に埋め込んで実装(5節ルール、遡及修正は不要だった)。
  `src/search-data.js`(exactMatch 3件追加)・`src/hint-data.js`(root型ヒント
  3件追加)・`docs/ARG-DESIGN.md`(P104〜P109の3行追加、flavor枠P105/P107/P109
  は未着手のまま予約)・`docs/ARG-WORDBANK.md`(3行を使用済みに更新)・
  `docs/ROADMAP.md`(WORDBANK枯渇と新規root行の採番をP110以降にする旨を追記)
  を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、3ページとも検索可能な
  具体語のフックを本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(517件) / build: ✓
- 次回予定: P16→P17(fragment F3、サイズL寄り)・P49→P50・P51→P52・
  P53→P54,P55等、既存root行の予約済みflavor枠(P105・P107・P109を含む)の
  掘り下げを継続。WORDBANK候補は完全に消化済みのため、以降は`### 13`の
  優先順位ルール3(既存root flavor枠の掘り下げ)が実質的なデフォルトになる。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 17:20
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: 前サイクル(P45)に続き、既に実装済みroot行の予約済み
  flavor枠を掘り下げる方針を継続。P47(airship-symbols.html)の
  flavor枠P48に着手。
- 実装: P47の「図案の意味も、由来と同様はっきりしない」というフックを
  継続し、`pages/glossary/anchor-feather-origin.html`を新設(2カード)。
  P44/P45実装時と同じ手順で、P47側のこのフックが当初「〜はっきりし
  ない」という疑問文のままで検索可能語句を伴っていなかったことに気づき、
  P47の本文にも「初代ドック長の航海日誌」という検索可能な具体語を
  手がかりとして追記(P13→P14・P44→P45と同型の対応)。この語をそのまま
  P48のkeywordに使用した。`src/search-data.js`(prereq:
  airship-symbols.html)・`src/hint-data.js`(チェーン継続ヒント1件)・
  `docs/ARG-DESIGN.md` P47行を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(508件) / build: ✓
- 次回予定: 他の実装済みroot(P16→P17[fragment、F3。サイズL寄りのため
  慎重に見積もる]・P49→P50・P51→P52・P53→P54,P55等)のflavor化を継続、
  またはWORDBANK残り3件(魔導機械科・見習い案内人・学院東駐車場)からの
  root追加。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 16:45
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `docs/ARG-WORDBANK.md`の未使用行が残り3件(いずれも候補薄いと
  明記済み)まで減ったため、優先順位ルールに沿って既に実装済みroot行の
  予約済みflavor枠を掘り下げる方針に切り替え。P44(arnold-namesake.html)
  のflavor枠P45に着手。
- 実装: P44の「琥珀の心臓の設計図原本の所在は把握されていない」という
  フックを継続し、`pages/glossary/amber-heart-blueprint.html`を新設
  (2カード)。実装にあたり、P44側のこのフックが当初「〜は把握されて
  いない」という疑問文のままで検索可能語句を伴っていなかった(手動
  チャットで追記した5節ルール違反)ことに気づき、P44の本文にも「設計図
  台帳」という検索可能な具体語を手がかりとして追記(P13→P14実装時と
  同型の対応)。この語をそのままP45のkeywordに使用した。
  `src/search-data.js`(prereq: arnold-namesake.html)・`src/hint-data.js`
  (チェーン継続ヒント1件)・`docs/ARG-DESIGN.md` P45行を更新。
- レビュー: OK(local-review、指摘なし。P番号重複なし、フックは検索可能
  語句として本文に埋め込み済みであることを事前に自己チェック)
- lint: ✓ / lint:css: ✓ / test: ✓(505件) / build: ✓
- 次回予定: 他の実装済みroot(P16→P17[fragment、F3。サイズL寄りのため
  慎重に見積もる]・P47→P48・P49→P50・P51→P52・P53→P54,P55等)の
  flavor化を継続、またはWORDBANK残り3件(魔導機械科・見習い案内人・
  学院東駐車場)からのroot追加。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 16:15
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P102(root、flavor: P103)として
  `pages/glossary/starfall-fortune.html`を新設(2カード)。単語1つ
  (`dining/observatory-dining.html`「星屑ソーダ『流星の軌跡』」、銀糖が
  溶ける速さで運を占う学生風習)を「ソーダそのもの」「占いの風習」の
  2つの切り口に掘り下げて実装。フックには新規語を発明せず、既存の
  P49(fifth-headmaster.html)で使用済みの「流星記録石板」を自然な形で
  再登場させ、占いの結果が実際の観測記録と照らし合わせられるかもしれない
  という繋がりを示唆した。`src/search-data.js`・`src/hint-data.js`
  (observatory-dining.htmlから1件)・`docs/ARG-DESIGN.md` P102行・
  `docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし。P番号重複・フック検索可能性を
  事前に自己チェック済み)
- lint: ✓ / lint:css: ✓ / test: ✓(501件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・見習い
  案内人・学院東駐車場、いずれも候補薄いと明記済み)からのroot追加、
  または各実装済みrootのflavor化を優先的に検討する。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 15:50
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P98(root、flavor: P101)として
  `pages/glossary/summoning-theory.html`を新設(2カード)。単語1つ
  (`shop/books.html`「召喚術理論体系」全3巻セット、著者レヴィン・
  オルトウェル教授)を「三巻に込められた40年」「四巻目はあるのか」の
  2つの切り口に掘り下げて実装。フックには「召喚学科準備室」(未刊の
  第4巻草稿を保管しているという)という検索可能な具体語を本文に埋め込み
  (前サイクルの反省を踏まえ、抽象的な疑問文のままにしない)、P89/P90の
  ときと同様、新規P番号(P98)が既存の個別予約行(4-6節等)と重複しないか
  事前に確認してから採番した。`src/search-data.js`・`src/hint-data.js`
  (books.htmlから1件)・`docs/ARG-DESIGN.md` P98行・
  `docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし。P番号重複・フック検索可能性の
  両観点を事前に自己チェック済み)
- lint: ✓ / lint:css: ✓ / test: ✓(498件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・星屑ソーダで
  運を占う学生風習・見習い案内人・学院東駐車場)からのroot追加、または
  各実装済みrootのflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 15:20
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P99(root、当初P90を仮採番したが既存の別枠[季節×エリア絞り込み
  ギミック]と衝突していたため採番し直し)として
  `pages/glossary/garigne-unit.html`を新設(2カード)。単語1つ
  (`shop/magical-tools.html`「独自単位『ガリグネ』」)を「測定器そのもの」
  「単位の由来」の2つの切り口に掘り下げて実装。実装中、フックを「誰が
  定めたか不明」という文章のまま書いてしまい、直前サイクルで追記した
  「フックは検索可能な語句として残すこと」ルールに違反していることを
  ユーザーに指摘され、「度量衡制定記録」という具体的な検索可能語句を
  本文に追加して修正した。`src/search-data.js`・`src/hint-data.js`
  (magical-tools.htmlから1件)・`docs/ARG-DESIGN.md` P99行・
  `docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘2件対応 — P90番号衝突、フック文章化
  ルール違反。いずれもユーザー指摘を受けて実装中に修正)
- lint: ✓ / lint:css: ✓ / test: ✓(495件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・レヴィン・
  オルトウェル教授・星屑ソーダで運を占う学生風習・見習い案内人・学院東
  駐車場)からのroot追加、または各実装済みrootのflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 15:00
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: 既存隠しページの改修(手動チャットでユーザーが発見した
  「類例カード」の演出過剰と、通常ページ既出語への不要なprereqゲーティング
  という2つの問題への対応)。バグ修正セクションには未記載だったが、
  「### 13」に記録済みの改修タスクとして着手。
- 実装: P81チェーン(P82〜P86)の個別ページ5つ(affinity-circle.html・
  sealed-stone-vault.html・forbidden-books-room.html・weathervane-shrine.html・
  underground-network.html)を`hidden-corners.html`(P81)へ全面統合・削除。
  対話の中でP81(触媒保管庫・予備歯車庫)も含め全7項目が同一カテゴリだと
  判明したため、6つの「立入禁止・非公開区画」カード+「地下でつながって
  いるか」という手がかり系2カードの計8カード構成にし、後者2カードは
  `.archive-list`を分けて視覚的にも区切った。`src/search-data.js`の
  該当5エントリを削除し、`hidden-corners.html`の`keywords`に7語を統合、
  prereqなしのroot型に一本化。あわせて`apprentice-notes.html`
  (keywords: 修繕工房)の不要なprereqも削除。`src/hint-data.js`の旧
  チェーン継続ヒントを、各keywordの出典ページから直接向かうヒントに
  置き換え。手動チャットでの指摘に基づき、時計塔設計図の販売店を
  「時刻堂」から正しい店名「歯車細工所」に訂正。`docs/ARG-DESIGN.md`
  5節に「フックは検索可能な語句として残すこと」ルールも追記。
- レビュー: OK(実装中にユーザーからの追加指摘を都度反映。ローカル
  レビューでの新規指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(492件、5ページ削除分の階層・footer・
  絶対パステストが減少) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・独自単位
  「ガリグネ」・レヴィン・オルトウェル教授・星屑ソーダで運を占う学生風習・
  見習い案内人・学院東駐車場)からのroot追加、または各実装済みrootの
  flavor化。
- blocked / partial: なし
- asset-pending: なし(コード・ドキュメントのみの変更)

## 2026-07-30 14:20
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。`docs/ARG-DESIGN.md`4-5節の最初のバッチ(P47〜P81)が全て
  実装済みになったため、新規root行としてP87(flavor: P88)を追加。
- 実装: P87(root)として`pages/glossary/eldcloth-fabric.html`を新設
  (2カード)。単語1つ(`shop/uniforms.html`「魔法繊維『エルドクロス』」)を
  「制服を仕立てる生地」「魔力拡散を抑える機能」の2つの切り口に掘り下げて
  実装。「繊維の産地・製法が不明」という未解決フックを残した。
  `src/search-data.js`・`src/hint-data.js`(uniforms.htmlから1件)・
  `docs/ARG-DESIGN.md`(4-5節にP87行を新規追加、最初のバッチ枯渇を
  明記)・`docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(507件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・独自単位
  「ガリグネ」・レヴィン・オルトウェル教授・星屑ソーダで運を占う学生風習・
  見習い案内人・学院東駐車場、計6件)から単語1つでもroot追加を継続
  (新規root行はP89以降に追加)、または各実装済みrootのflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 13:50
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定。単語1つでもroot 1ページにしてよい運用に沿う)。
- 実装: P75(root、4-5節のroot→flavor5段枠)として
  `pages/glossary/time-path-interference.html`を新設(2カード)。単語1つ
  (`exploration/clock-tower.html`「時間経路実験室」「時間経路干渉」)を
  「実験室の仕組み」「自然発生する現象そのもの」の2つの切り口に掘り下げて
  実装。実験室は自然現象の再現実験にすぎないという既存本文の記述から、
  「学院内のどこで自然発生しているか不明」という未解決フックを立てた。
  `src/search-data.js`・`src/hint-data.js`(clock-tower.htmlから1件)・
  `docs/ARG-DESIGN.md` P75行・`docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(504件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・魔法繊維
  「エルドクロス」・独自単位「ガリグネ」・レヴィン・オルトウェル教授・
  星屑ソーダで運を占う学生風習・見習い案内人・学院東駐車場、計7件)から
  単語1つでもroot追加を継続、または各実装済みrootのflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 13:20
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装。前サイクル終了時点でWORDBANK未使用行が
  残り9件まで減り、いずれも他候補と組み合わせにくい単独ページ言及のみ
  だったため、手動チャットでユーザーと「単語1つでもroot 1ページにして
  よい(ただしカード数2〜3枚は維持)」という運用緩和を合意。
  `docs/ROADMAP.md``### 13`にこの方針を追記済み(このサイクルでコミット
  に含める)。
- 実装: P70(root、4-5節のroot→flavor4段枠)として
  `pages/glossary/memory-books.html`を新設(2カード)。単語1つ
  (`exploration/grand-library.html`「記憶を持つ本」)を「反応の仕組み」
  「答えたくない問いの謎」の2つの切り口に掘り下げて実装。ノスティオン
  自身の設定(問いに応答する魔導書)と響き合う内容のため、独り言でそれと
  なく示唆した。`src/search-data.js`・`src/hint-data.js`
  (grand-library.htmlから1件)・`docs/ARG-DESIGN.md` P70行・
  `docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(501件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・時間経路
  実験室・魔法繊維「エルドクロス」・独自単位「ガリグネ」・レヴィン・
  オルトウェル教授・星屑ソーダで運を占う学生風習・見習い案内人・学院東
  駐車場、計8件)から単語1つでもroot追加を継続、または各実装済みrootの
  flavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 12:50
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P66(root、4-5節のroot→flavor3段枠)として
  `pages/glossary/champions-prizes.html`を新設(2カード)。
  `events/index.html`の「飛行船競技大会」(旗艦『アルノルド号』の年間
  優先搭乗権)と「錬金術品評会」(『錬金術師の指輪』)をグルーピングし、
  学院祭の優勝者に贈られる副賞という切り口にした。`src/search-data.js`・
  `src/hint-data.js`(events/index.htmlから2件)・
  `docs/ARG-DESIGN.md` P66行・`docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(498件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の未使用行が残り9件(魔導機械科・
  時間経路実験室・記憶を持つ本・魔法繊維「エルドクロス」・独自単位
  「ガリグネ」・レヴィン・オルトウェル教授・星屑ソーダで運を占う学生風習・
  見習い案内人・学院東駐車場)まで減っており、いずれも単独ページのみの
  言及で組み合わせにくい。次サイクル以降は各実装済みroot(P44/P47/P49/
  P51/P53/P56/P59/P62/P66)のflavor化を優先的に検討する。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 12:20
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P62(root、4-5節のroot→flavor3段枠)として
  `pages/glossary/hidden-ingredients.html`を新設(3カード)。
  `dining/index.html`「学院定番 魔道師ハヤシ」(安息薬草)・「魔力チャージ
  マフィン」(魔力ナッツ)・エルダーフラワー(星詠みハーブティー/
  エルダーフラワーソーダ)、`dining/alchemy-dining.html`「温薬草ポション
  『安息のいちばん』」(安息草)をグルーピングし、主役メニューを陰で支える
  隠し材料という切り口にした(P53「食材のふるさと」が産地視点だったのに
  対し、こちらは個別メニューでの使われ方視点)。`src/search-data.js`・
  `src/hint-data.js`(dining/index.htmlから2件、dining/alchemy-dining.html
  から1件)・`docs/ARG-DESIGN.md` P62行・`docs/ARG-WORDBANK.md`該当箇所を
  更新。
- レビュー: OK(local-review、指摘1件対応 — `dining/alchemy-dining.html`
  の店名を「蒸留工房喫茶室」と誤記していたため、正しい店名「秘薬スタンド」
  に修正)
- lint: ✓ / lint:css: ✓ / test: ✓(495件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・
  独自単位「ガリグネ」・見習い案内人など)からのroot追加、または各実装済み
  root(P44/P47/P49/P51/P53/P56/P59/P62)のflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 11:50
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P59(root、4-5節のroot→flavor2段枠)として
  `pages/glossary/dueling-heritage.html`を新設(3カード)。
  `exploration/dueling-ground.html`「演武場床『カルネ岩』」、
  `shop/dueling-shop.html`「決闘シグル」(季節ごとの缶バッジ)、
  `shop/dueling-gear.html`「学院魔法決闘規定法典」(200年前制定)を
  グルーピングし、決闘文化が床材・紋様・法典という三つの形で受け継がれて
  いるという切り口にした。`src/search-data.js`・`src/hint-data.js`
  (3ページから各1件)・`docs/ARG-DESIGN.md` P59行・
  `docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘1件対応 — `shop/dueling-shop.html`への
  ヒントが1件漏れていたため追加。あわせて`shop/dueling-gear.html`の
  正式名称「魔法武具展示室」を確認しヒント文言を修正)
- lint: ✓ / lint:css: ✓ / test: ✓(492件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔導機械科・
  時間経路実験室・記憶を持つ本など)からのroot追加、または各実装済みroot
  (P44/P47/P49/P51/P53/P56/P59)のflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 11:20
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P56(root、4-5節のroot→flavor2段枠)として
  `pages/glossary/four-elements-seal.html`を新設(2カード)。
  `exploration/summoning-plaza.html`の「四元素石」(広場四隅の属性石)と
  `shop/summoning-circle.html`の「大結界召喚陣」(広場の実演で実際に
  使用された陣の設計図ポスター)をグルーピングし、召喚陣の力がどこから
  来るのかという切り口にした。`src/search-data.js`・`src/hint-data.js`
  (summoning-plaza.html・summoning-circle.htmlから各1件)・
  `docs/ARG-DESIGN.md` P56行・`docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(489件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔法繊維「エルドクロス」・
  見習い案内人・学院東駐車場など)からのroot追加、または各実装済みroot
  (P44/P47/P49/P51/P53/P56)のflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 10:45
- ブランチ: 引き続き`evolve/cycle-40`(未マージ)。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P53(root、4-5節のroot→flavor2段枠)として
  `pages/glossary/campus-harvest.html`を新設(3カード)。
  `dining/index.html`の「学院農園」「薬草園」「鉄皮林檎」(錬金術研究棟の
  林檎園)をグルーピングし、学食メニューに繰り返し登場する3つの食材産地を
  掘り下げた。学院農園・薬草園は`shop/groceries.html`の紹介文からも
  接続可能な網状構造にした。`src/search-data.js`・`src/hint-data.js`
  (dining/index.html・shop/groceries.htmlから各1件)・
  `docs/ARG-DESIGN.md` P53行・`docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(486件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔法繊維「エルドクロス」・
  見習い案内人・エルダーフラワーなど)からのroot追加、またはP44/P47/P49/
  P51/P53のflavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 10:15
- ブランチ: `evolve/cycle-39`がPR #49でmainへ自動マージ・削除済みを確認。
  `main`を最新化し、新しく`evolve/cycle-40`を作成。
- タスク選定: `### 13`root行の実装(`docs/ARG-WORDBANK.md`の未使用行から
  選定)。
- 実装: P51(root、4-5節の単発チェーン枠)として
  `pages/glossary/festival-undertold.html`を新設(3カード)。
  `events/index.html`の「旧称『秋祭り』」「『大点灯』の開始時刻が前日まで
  確定しない理由」「占術師(現職17代目)」をグルーピングし、学院祭・行事の
  豆知識にさりげなく書かれているだけの3つの事実を掘り下げた。
  `src/search-data.js`・`src/hint-data.js`(events/index.htmlから1件)・
  `docs/ARG-DESIGN.md` P51行・`docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(483件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(魔法繊維「エルドクロス」・
  学院農園・見習い案内人など)からのroot追加、またはP44/P47/P49/P51の
  flavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 09:45
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: `### 15`の未完了サブタスク(「つながり(N)」件数の修正、
  手動チャットでユーザーが指摘・タスク化していたもの)に着手。
- 実装: 「これまでの記録」欄のツリー表示にある「つながり(N)」の件数を、
  直下の子の数だけでなくネスト最下層まで含めた子孫の総数に変更。
  `src/logic.js`の`buildSecretsTree`が返す各ノードに`descendantCount`
  (新設の純粋関数`countTreeDescendants`で算出)を持たせ、`src/search.js`の
  `renderSecretsTree`(file://環境向けの複製ロジック)の表示をそれに
  差し替えた。既存の`buildSecretsTree`テストの期待値を`descendantCount`
  込みに更新し、魔導88星座→シベル・オーレン→観測記録帳→流れ星の4段
  チェーンで「つながり(3)」になることを検証する新規テストを追加。
  `### 15`はこれで未完了サブタスクが無くなったためstatusを完了に戻した。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(480件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(占術師・学院農園など)
  からのroot追加、またはP44/P47/P49のflavor化。
- blocked / partial: なし
- asset-pending: なし(コードのみの変更)

## 2026-07-30 09:15
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: `### 13`root行の実装(前サイクルで表形式化した
  `docs/ARG-WORDBANK.md`の未使用行から選定)。
- 実装: P49(root、4-5節の単発チェーン枠)として
  `pages/glossary/fifth-headmaster.html`を新設(3カード)。
  `exploration/observatory.html`の「アルノルドの眼」「流星記録石板」
  「第5代学長」(実名は本文中に記載なし)をグルーピングし、天文台を建てた
  第2代学長フローラ・シルヴァーンとの対比で「なぜこの学長だけ実名が
  伝わっていないのか」というフックを軸にした。`src/search-data.js`・
  `src/hint-data.js`(observatory.htmlから1件)・`docs/ARG-DESIGN.md` P49行・
  `docs/ARG-WORDBANK.md`該当箇所を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(476件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の残り未使用行(占術師・学院農園・
  時間経路実験室など)からのroot追加、またはP44→P45・P47→P48・P49→P50の
  flavor化。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 08:50
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: `### 13`の表形式化タスク(手動チャットでユーザーが優先順位を
  root実装より先に変更済み)に着手。
- 実装: `docs/ARG-WORDBANK.md`を全面的に表形式へ再構成。旧「セクション
  見出し+箇条書きの生の棚卸し(8セクション、64個の`- `箇条書き+prose中の
  2候補)」を、「ワード / 出典ページ / 元セクション / グループ(A〜H) /
  使用状況 / 使用先ページID」の単一表(全65行)に統合した。旧ファイルの
  該当範囲から`- `箇条書きを全数抽出し、表の行数と突き合わせて漏れが
  ないことを確認済み。末尾の「グルーピング候補」節(グループA〜Hの詳細な
  採用経緯)はそのまま残し、表の「グループ」列と相互参照できるようにした。
  `docs/ROADMAP.md``### 13`のroot選定手順も、「## 1〜## 8を直接見て
  照合する」という旧手順から「## 候補一覧の表で未使用行を確認する」手順に
  書き換えた。完了したサブタスクは`docs/roadmap-done.md`へ退避。
- レビュー: OK(local-review、旧ファイルの箇条書き64件+prose2候補=66件を
  全数照合し、新表65行との対応漏れがないことを確認)
- lint: ✓ / lint:css: ✓ / test: ✓(473件) / build: ✓
- 次回予定: この表を使ってP47/P44の残りflavor枠(P48・P45)、または表の
  未使用行(占術師・学院農園・時間経路実験室など)からのroot追加。
- blocked / partial: なし
- asset-pending: なし(ドキュメントのみの変更)

## 2026-07-30 08:35
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: `### 13`root行の実装を継続(改訂した優先順位ルールに沿い、
  `docs/ARG-WORDBANK.md`の生の棚卸しから直接グルーピング)。
- 実装: P47(root、4-5節の単発チェーン枠)として
  `pages/glossary/airship-symbols.html`を新設(3カード)。「## 2. 学院内
  探索」の「竜鱗布」「旗艦『アルノルド号』係留ドック」(いずれも
  airship-dock.html)と「## 4. 購買部」の「ドックのシンボルマーク
  『碇と羽根』」(airship-gear.html)をグルーピングし、飛行船を陰から
  支える「素材・設備・意匠」という切り口にした。`src/search-data.js`・
  `src/hint-data.js`(airship-dock.htmlから2件、airship-gear.htmlから1件)・
  `docs/ARG-DESIGN.md` P47行・`docs/ARG-WORDBANK.md`該当箇所を更新。
  本文中に「『碇と羽根』の由来は公式には示されていない」というフックを
  残し、P48のflavor化余地とした。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(473件) / build: ✓
- 次回予定: 他の実装済みroot(P16→P17[fragment、F3]等)の予約済み枠、
  P44→P45・P47→P48のflavor化、または`docs/ARG-WORDBANK.md`の残り未使用
  候補(占術師・学院農園・時間経路実験室など)からのroot追加。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 08:20
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: 3項目まとめて着手。(1)`### 13`root行の実装(改訂した優先順位
  ルールに沿い、生の棚卸しから直接)、(2)`### 17`(季節限定フィルタ)の削除、
  (3)`### 19`(発見数カウンター)のP91達成後の重複表示解消。(2)(3)は手動
  チャットでユーザーからタスク追記済みだった小さめの独立項目のため、
  APIコスト削減のためまとめた。
- 実装:
  (1) P44(root)として`pages/glossary/arnold-namesake.html`を新設(3カード)。
      `docs/ARG-WORDBANK.md`「## 1. トップページ」の「エルンスト・フォン・
      アルノルド卿」「『アルノルド卿の丘』駅」と「## 2. 学院内探索」の
      「大蒸留器『琥珀の心臓』」をグルーピングし、P16(購買部で買える遺品)
      とは異なる「名が残る場所」という切り口にした。`src/search-data.js`・
      `src/hint-data.js`(index.htmlから2件、alchemy-tower.htmlから1件)・
      `docs/ARG-DESIGN.md` P44行・`docs/ARG-WORDBANK.md`該当箇所を更新。
  (2) `src/product-season-filter.js`を削除、8ショップページから`<script>`・
      `.product-filter`ボタンを除去、`styles/shop-page.css`の関連スタイルと
      `src/logic.js`の`shouldShowProduct`・対応テストを削除。`### 17`の
      statusを完了に戻し、roadmap-done.mdへ退避。
  (3) `src/logic.js`に`shouldShowSearchProgress(foundCount, achieved)`を
      追加しテスト済み。`src/search.js`の`updateSearchProgressDisplay()`で
      P91達成後は`#search-progress`を隠すようにした。`### 19`のstatusを
      完了に戻し、roadmap-done.mdへ退避。
- レビュー: OK(local-review、指摘なし。`docs/cycle-log.md`内の削除済み
  WORDBANKセクションへのダングリング参照を1件発見・修正)。
- lint: ✓ / lint:css: ✓ / test: ✓(470件) / build: ✓
- 次回予定: 他の実装済みroot(P16→P17[fragment、F3]・P23→P24〜P25・
  P28→P29〜P30・P35→P36〜P38・P41→P42〜P43・P44→P45)の予約済み枠、
  または`docs/ARG-WORDBANK.md`の残り未使用候補(占術師・学院農園・
  竜鱗布など)からのroot追加。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30(手動チャットでの訂正・追記)
- evolveサイクルではなく、ユーザーとの手動チャットでの訂正。
- 2026-07-30 06:20付エントリ等で「WORDBANKのグルーピング候補・未分類候補が
  出尽くした」と記録したのは、`docs/ARG-WORDBANK.md`冒頭の生の棚卸し
  (「## 1.」〜「## 8.」)まで遡らず、グルーピング済み(グループA〜H)と
  末尾の未分類リストだけを見た不完全な判断だった。ユーザー指摘により
  再照合し、大蒸留器「琥珀の心臓」・エルンスト・フォン・アルノルド卿など
  root候補になり得る未使用の単語が20語近く残っていたことを確認(その後の
  サイクルで一部を`docs/ARG-DESIGN.md` P44として使用済み)。
- 対応: `docs/ROADMAP.md``### 13`の標準ルールを改訂し、グループA〜Hだけで
  なく生の棚卸しもグループA〜Hと同格の有効な候補として扱うことを明記した
  (既存rootの予約済みflavor枠の掘り下げより優先)。
- コード変更なし(ドキュメントのみ)。

## 2026-07-30 07:20
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: P12(koku-trio.html)から始まるroot→flavorチェーンの最終段
  P15に着手。これでP12〜P15の予約枠を完全に使い切る。
- 実装: P14(warden-registry.html)の「陣紋師任命記録の空白の一件はおおよそ
  開校50周年前後」という推定時期を、P12本文で既に確立済みの「大鐘『刻の声』
  も開校50周年記念に鋳造・命名され、命名理由は式典記録に残っていない」
  という事実と重ね合わせ、`pages/glossary/unnamed-warden.html`(三つの
  「刻」との奇妙な符合)を新設(2カード)。「名を記されなかった陣紋師」と
  「理由を記されなかった鐘の命名」という2つの謎を並べ、断定はせず独り言で
  余韻を残して締めくくった。P14側に手がかり文を追加。`src/search-data.js`
  でprereqゲーティング(exactMatch: trueで「相応しい名を」を合言葉に)、
  `src/hint-data.js`に発見の連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`
  P15行・`docs/ARG-WORDBANK.md`グループAの記載を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(465件) / build: ✓
- 次回予定: 他の実装済みroot(P16→P17[fragment、F3。暗号ギミック設計が
  必要でサイズ大きくなりやすい]・P23→P24〜P25・P28→P29〜P30・
  P35→P36〜P38・P41→P42〜P43)の予約済み枠を継続して掘り下げる。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 06:50
- ブランチ: 引き続き`evolve/cycle-39`(未マージ)。
- タスク選定: 前サイクルの方針(既存rootの予約済みflavor枠を掘り下げる)に
  沿って、P13(circle-warden.html)のflavor2段目P14に着手。
- 実装: 「陣紋師の選定基準は公式には示されていない」というP13のフックを、
  学院の各所に既にある「記録簿」モチーフ(陣紋補修記録簿・刻の書等)を
  踏襲した新しい記録物「陣紋師任命記録」で継続。`pages/glossary/warden-registry.html`
  を新設(2カード)。400年分の記録のうち一件だけ任命された者の名の欄が
  空白という具体的な謎を配置した。P13側に手がかりカードを追加。
  `src/search-data.js`でprereqゲーティング、`src/hint-data.js`に発見の
  連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`P14行・`docs/ARG-WORDBANK.md`
  グループAの記載を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(461件) / build: ✓
- 次回予定: P12チェーンの最後の1段(P15)、または他の実装済みroot
  (P16→P17[fragment、F3]・P23→P24〜P25・P28→P29〜P30・P35→P36〜P38・
  P41→P42〜P43)の予約済み枠を継続して掘り下げる。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 06:20
- ブランチ: `evolve/cycle-38`がPR #48でmainへ自動マージ・削除済みを確認。
  `main`を最新化し、新しく`evolve/cycle-39`を作成。
- タスク選定: `docs/ARG-WORDBANK.md`のグルーピング候補・未分類候補、
  「今後のタスク候補」がいずれも出尽くしたため、既存の実装済みroot
  (P12・P33)に残っていた予約済みflavor枠を掘り下げる方向に転換。
  #4(購買部アイコン)・#12(ナレーション音声)の素材到着も確認したが
  未着(assets/images/shop/にproduct-*.pngが3種のみ、assets/audio/自体が
  存在せず)、引き続きblocked。
- 実装: P12(koku-trio.html「刻の輪」カード)とP33(circle-ledgers.html
  「陣紋補修記録簿」カード)の双方に「陣紋師」という同じ役職名が既に
  登場していたことに着目し、`pages/glossary/circle-warden.html`を新設
  (2カード)。P6と同型の網状構造(P12・P33いずれか一方の訪問でOK)に
  した。`src/search-data.js`にprereq OR配列で1エントリ追加、
  `src/hint-data.js`に発見の連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`
  P13行・`docs/ARG-WORDBANK.md`グループAの記載を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(457件) / build: ✓
- 次回予定: 同様に、他の実装済みroot(P16→P17[fragment、F3産出]・
  P23→P24〜P25・P28→P29〜P30・P35→P36〜P38・P41→P42〜P43)に残る
  予約済みflavor/fragment枠も、各rootの本文中の未解決フックを使って
  1件ずつ掘り下げていく方針。特にP16→P17はFRAGMENT(F3)を産出する
  唯一未着手の単純枠で、PGATEに必要な10断片のうち現在F1・F2・F13の
  3つしか実装されていないため優先度が高いが、暗号ギミックの設計が
  必要でサイズが大きくなる可能性があり、着手前に慎重な見積もりが必要。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 05:50
- ブランチ: `evolve/cycle-37`がPR #47でmainへ自動マージ・削除済みを確認。
  `main`を最新化し、新しく`evolve/cycle-38`を作成。
- タスク選定: 「今後のタスク候補」最後の1件「ノスティオン: 発見数の周回
  カウンター表示」に着手。これで同セクションの候補が尽きた。
- 実装: `### 19`(新規セクション)として、検索窓の下に「学院の秘密をN件
  発見しました」の進捗表示を追加。既存の「これまでの記録」欄はP91達成まで
  非表示のままだが、こちらは「学院の秘密」を1件以上見つけた時点でさりげなく
  表示する軽量な進捗表示(updateHintLinkVisibilityと同じ表示条件)。新規
  データ構造は追加せず、既存のCodexProgress・SEARCH_INDEXから機械的に算出。
  `countFoundSecrets`・`formatDiscoveryProgressText`を`src/logic.js`に
  純粋関数として実装しテスト済み。local-reviewで、下書き段階の
  `var(--emerald)`のdark背景上テキスト誤用を発見・修正。
  `docs/ARG-WORDBANK.md`の「未分類のまま残る候補」サマリーも最新状態に更新。
- レビュー: 指摘1件対応(var(--emerald)の禁止用法を修正)
- lint: ✓ / lint:css: ✓ / test: ✓(453件) / build: ✓
- 次回予定: 「今後のタスク候補」が0件になったため、次回は`### 13`の隠しページ
  候補出し(`docs/ARG-WORDBANK.md`「未分類のまま残る候補」の残り1件「7番試薬」
  の検討、または全ページ本文の再棚卸し)から着手する必要がある。
- blocked / partial: なし
- asset-pending: なし(テキストのみの進捗表示、新規ビジュアルエリア無し)
- 補足: UIはブラウザでの実機確認ができなかった(ブラウザ操作ツール無し)。
  単体テスト・ビルド出力の確認・コードの目視確認で検証した。

## 2026-07-30 04:50
- ブランチ: `evolve/cycle-36`がPR #46でmainへ自動マージ・削除済みを確認。
  `main`を最新化し、新しく`evolve/cycle-37`を作成。
- タスク選定: `### 13`は事実上手が止まっているため、「今後のタスク候補」から
  「学院内探索: エリアページに「豆知識」欄を追加」に着手。
- 実装: `### 18`(新規セクション)として、学院内探索の7エリアページ全てに
  `.area-trivia`コールアウトを追加。各エリアの「エリアについて」直後に、
  既存設備にまつわる小ネタを2件ずつ(計14件)追加。既存本文で確立済みの
  数字・固有名詞を裏付けに使いつつ、軽い書き足しで読み物に仕立てた。
  既存の「ご案内」ボックス(`.area-info`)とは異なる質感(左ボーダー+
  淡い背景)にして視覚的に区別。色は`var(--ember)`・`var(--brass)`の
  既存トークンのみ使用。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(446件) / build: ✓
- 次回予定: 「今後のタスク候補」の残り1件(ノスティオンの発見数カウンター)
  に着手する見込み。それも完了すれば候補が尽きるため、`### 13`の新規棚卸し
  を検討する必要がある。
- blocked / partial: なし
- asset-pending: なし(テキストのみのコールアウト、新規ビジュアルエリア無し)
- 補足: UIはブラウザでの実機確認ができなかった(ブラウザ操作ツール無し)。
  ビルド出力の確認とコードの目視確認で検証した。

## 2026-07-30 04:20
- ブランチ: 引き続き`evolve/cycle-36`(未マージ)。
- タスク選定: `### 13`は事実上手が止まっているため、「今後のタスク候補」から
  「購買部: 季節限定商品だけの絞り込みフィルタ」に着手。
- 実装: `### 17`(新規セクション)として、季節限定タグを持つ商品が実在する
  8店舗(蒸留工房店・歯車細工所・決闘記念品店・食料品店・夜空雑貨店・
  みやげ店・召喚素材専門店・制服店)の「取扱商品」欄に、季節限定のみに
  絞り込むトグルボタンを追加。該当商品が無い残り11店舗には設置していない。
  判定ロジック(`shouldShowProduct`)は`src/logic.js`に純粋関数として実装
  しテスト済み。`src/product-season-filter.js`が`.product-tag--season`の
  有無を見て表示切替(file://環境向けの既存パターンを踏襲)。ボタンの
  配色は既存の`.product-tag--season`と同じ`var(--arcane)`トークンを再利用。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(444件) / build: ✓
- 次回予定: 「今後のタスク候補」の残り2件(学院内探索の豆知識欄、ノスティオンの
  発見数カウンター)から1件着手する見込み。`### 13`のP番号ページも、
  もし新しい候補が見つかれば優先的に再検討する。
- blocked / partial: なし
- asset-pending: なし(既存の`.product-tag--season`配色を再利用、新規
  ビジュアルエリア無し)
- 補足: UIはブラウザでの実機確認ができなかった(ブラウザ操作ツール無し)。
  単体テスト・手動でのロジック検証・ビルド出力確認のみで検証した。

## 2026-07-30 03:55
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `docs/ARG-WORDBANK.md`のグルーピング候補・未分類候補が
  出尽くし`### 13`が事実上手が止まったため、「今後のタスク候補」から
  既存候補「学院祭・行事: 次回開催日までのカウントダウン表示」に着手。
  あわせて新規候補3件を同セクションに追記(優先順位ルールに従い、
  `### 13`が尽きた場合の予備欄として運用)。
- 実装: `### 16`(新規セクション)として、学院祭・行事の各カードに
  「あとN日」のカウントダウンバッジを追加。8行事の日付表記(「第1土曜」
  「最終週末」「新月の夜」等)を3種類のルールに還元し、`src/logic.js`の
  純粋関数(`nthWeekdayOfMonth`・`lastWeekdayOfMonth`・`resolveEventDate`・
  `daysUntilNextEvent`)で計算、年またぎも自動繰り越し。厳密な計算式に
  還元できない表記(中旬/下旬/新月/冬至等)は期間内の代表日で近似(架空
  行事のフレーバーのため精度より安定した挙動を優先)。
  `src/event-countdown.js`が`data-countdown-*`属性を読み取ってバッジを
  挿入(file://環境向けにsrc/logic.jsと同じロジックを複製)。
  `styles/events.css`にバッジスタイルを追加(コアカラーのみ)。
  local-reviewで、ROADMAP.mdへの新規セクション追加漏れ(運用ルール)を
  発見・修正。
- レビュー: 指摘1件対応(### 16セクションの追加漏れ)
- lint: ✓ / lint:css: ✓ / test: ✓(440件) / build: ✓
- 次回予定: `### 13`は事実上手が止まっているため、次回も「今後のタスク
  候補」(購買部の季節限定フィルタ、学院内探索の豆知識欄、ノスティオンの
  発見数カウンター)から1件着手する見込み。
- blocked / partial: なし
- asset-pending: なし(テキストのみのバッジ表示、新規ビジュアルエリア無し)
- 補足: UIの見た目はブラウザでの実機確認ができなかった(このセッションに
  ブラウザ操作ツールが無いため)。単体テスト・手動でのロジック検証・
  ビルド出力の確認のみで検証した。モバイル幅(60px列)でバッジ文字列が
  はみ出さないよう、font-size・paddingを保守的に設定し`white-space: nowrap`
  は使わず折り返し可能にしてある。

## 2026-07-30 03:20
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `docs/ARG-WORDBANK.md`「未分類のまま残る候補」から
  「魔法資質証明証」を選定。
- 実装: `pages/glossary/aptitude-certificate.html`を新設(3カード)。既存の
  `exploration/observatory.html`「魔法適性」ワークショップ設定(星座紋
  解析台・学院入試の参考資料)との関連を示唆する形で厚みを持たせた。
  本文中の「証明証を持たない場合の扱いが不明」等flavor化の余地がある
  と判断し、予約済みのroot→flavor 2段枠P41〜P43へ最初から当てはめて
  実装。`src/search-data.js`に1エントリ追加、`src/hint-data.js`に
  root型ヒント1件を追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`
  を更新。残る「7番試薬」は他ページとの接続点が見当たらず素材不足の
  ため保留とした。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(427件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の候補は「7番試薬」1件のみ残るが素材
  不足で保留中。次回はROADMAP.mdの指示通り全ページの本文を棚卸しして
  新しい候補を追加するフェーズに入る見込み。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 02:55
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `docs/ARG-WORDBANK.md`「未分類のまま残る候補」から
  「七代続く写本師一族」を選定。
- 実装: `pages/glossary/scribe-lineage.html`を新設(4カード)。実装時、
  既存の実装済みページ2件(P16 arnold-relics.htmlの「創魔の書」複製、
  P28 second-headmaster.htmlの葦ペン復刻)がどちらも同じ写本師一族の
  仕事だったことが判明し、当初「他候補と重複」としていた懸念とは逆に、
  既存2ページを裏でつなぐ一族そのものとして独立に成立する形にできた。
  本文中の「初代の名は公式に記録されていない」等flavor化の余地がある
  と判断し、予約済みのroot→flavor 3段枠P35〜P38へ最初から当てはめて
  実装。`src/search-data.js`に1エントリ追加(2つの表記ゆれを両方
  exactMatch keywordsに登録)、`src/hint-data.js`にroot型ヒント2件を
  追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(423件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の「未分類のまま残る候補」は残り2件
  (魔法資質証明証・7番試薬)。それぞれ単体では弱いため、次回は活用を
  検討するか、それでも難しければROADMAP.mdの指示通り全ページの本文を
  棚卸しして新しい候補を追加する。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 02:25
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装。グループA〜Hを使い切ったため、
  `docs/ARG-WORDBANK.md`末尾の「未分類のまま残る候補」から
  「時計塔設計図の『地下の魔法陣接続部』」を選定。
- 実装: 完了済みグループC「立入禁止・非公開区画」の締めくくりとなる補遺
  として`pages/glossary/underground-network.html`を新設。P85
  (weathervane-shrine.html)から連なるflavor5段目とし、設計図に記された
  「地下の魔法陣接続部」を軸に、6つの一角が地下でつながっているかもしれ
  ないという可能性だけを示し、断定はせず問いのまま終える形にした。
  `src/search-data.js`でprereqゲーティング、`src/hint-data.js`に発見の
  連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を
  更新し、グループCをroot+flavor5段の完全完了として記録。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(419件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の「未分類のまま残る候補」は残り3件
  (魔法資質証明証・七代続く写本師一族・7番試薬)。個別には弱いため、
  次回はこれらの活用を検討するか、それでも難しければROADMAP.mdの指示
  通り全ページの本文を棚卸しして新しい候補を追加する。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 02:00
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループG
  「月草/月光草の混同ネタ」(最後の未使用グループ)。
- 実装: 学食・購買部の6ページに散らばる「月草」の記述をまとめ、この薬草
  自体を説明する`pages/glossary/moon-grass.html`を新設(3カード)。既存
  ギミック(検索窓そのもの)を使い、名前が紛らわしい「月光草」
  (grand-library.html、魔法インクの原料、別の植物)で検索してしまうと、
  通常の「見つかりませんでした」ではなく専用の応答を返すようにした
  (P91の`isNostionMemoryWrongCandidate`と同型だが、ページ訪問済みかどうか
  は問わない)。`src/logic.js`に`isMoonGrassWrongCandidate`を新設しテスト
  追加、`src/search.js`に同じロジックを複製。fragment化は見送り、root型の
  単純な発見ページとして実装(新しい断片を追加するとPGATEの必要断片数を
  拡張する構造的判断になるため、ユーザー確認後の課題として残した)。
  local-reviewで、本文カードに実在しない架空の商品名を書いていた誤りを
  発見・修正(実際のメニュー名に訂正)。`docs/ARG-WORDBANK.md`に
  グループA〜H全て使用済みのステータスを明記。
- レビュー: 指摘1件対応(架空の商品名を実在の名称に修正)
- lint: ✓ / lint:css: ✓ / test: ✓(416件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`のグループA〜Hは全て使用済み。次は
  「未分類のまま残る候補」(魔法資質証明証・七代続く写本師一族・地下の
  魔法陣接続部・7番試薬)を検討するか、それも尽きればROADMAP.mdの指示
  通り全ページの本文を棚卸しして新しい候補を追加する。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 01:35
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループC
  「立入禁止・非公開区画」の最後の1件(P85)。
- 実装: P84(`pages/glossary/forbidden-books-room.html`)から連なる
  flavor4段目として、魔法陣召喚広場の「風見の祠」(summoning-plaza.html)を
  扱う`pages/glossary/weathervane-shrine.html`を新設。これでグループC全6件
  (root=P81+flavor4段=P82〜P85)が完成。既存のP23(spirits-of-arnold.html)
  のシルフィ契約設定と矛盾しない範囲で、祠そのものの構造・名の由来に焦点を
  当てた。チェーン最後の独り言で6件全ての一角を並べ、余韻を残す形で締めた。
  P84側に「風見の祠」への言及を追加して最後の手がかりとした。
  `src/search-data.js`でprereqゲーティング、`src/hint-data.js`に発見の
  連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を
  更新し、グループC完了を記録。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(408件) / build: ✓
- 次回予定: グループG(月草/月光草の混同、fragment向き)が最後の未使用
  グループとして残っている。fragment型のため新しいギミック設計が必要
  (単純なroot発見型とは異なる)。グループCが完了したことで、
  `docs/ARG-WORDBANK.md`のグルーピング候補はグループGのみに。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 01:05
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループC
  「立入禁止・非公開区画」のflavor3段目(P84)。
- 実装: P83(`pages/glossary/sealed-stone-vault.html`)から連なるflavor3段目
  として、大図書館の「禁書閲覧室」(grand-library.html)を扱う
  `pages/glossary/forbidden-books-room.html`を新設。既存本文の「展示87冊中
  12冊は表紙すら非公開」という数字と、禁書指定理由「存在を知られると困る
  人物がいる」を軸に構成し、独り言でそれとなく強調した。P83側に「禁書
  閲覧室」への言及を追加して手がかりとした。`src/search-data.js`でprereq
  ゲーティング、`src/hint-data.js`に発見の連鎖型ヒントを1件追加。
  `docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(405件) / build: ✓
- 次回予定: グループCの最後の1件(P85: 契約精霊の棲家「風見の祠」)を実装
  すればグループC完了。その後はグループG(月草/月光草の混同、fragment向き)
  が未使用のまま残っている。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 00:40
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループC
  「立入禁止・非公開区画」のflavor2段目(P83)。
- 実装: P82(`pages/glossary/affinity-circle.html`)から連なるflavor2段目
  として、決闘演武場の「魔封石保管庫」(dueling-ground.html)を扱う
  `pages/glossary/sealed-stone-vault.html`を新設。既存本文の「魔封石
  ギャラリー」(展示20試合)との対比を軸に、保管庫には未展示分を含め
  2,000個以上あるという構成にし、独り言でP8「名を消された決闘王」を
  それとなく暗示した。P82側に「魔封石保管庫」への言及を追加して手がかり
  とした。`src/search-data.js`でprereqゲーティング、`src/hint-data.js`に
  発見の連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`
  を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(402件) / build: ✓
- 次回予定: グループCのflavor続き(P84: 禁書閲覧室、P85: 契約精霊の棲家)。
  グループG(月草/月光草の混同、fragment向き)も未使用のまま残っている。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-30 00:10
- ブランチ: 引き続き`evolve/cycle-35`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループC
  「立入禁止・非公開区画」のflavor1段目(P82)。
- 実装: root(`pages/glossary/hidden-corners.html`)から連なるflavor1段目
  として、大図書館の「蔵書親和魔法陣」(grand-library.html)を扱う
  `pages/glossary/affinity-circle.html`を新設。root側に「蔵書親和魔法陣」
  への言及を新しいカードとして追加し、次の手がかりとした。
  `src/search-data.js`でhidden-corners.htmlへの訪問をprereqとしてゲーティング、
  `src/hint-data.js`に発見の連鎖型ヒントを1件追加。`docs/ARG-DESIGN.md`・
  `docs/ARG-WORDBANK.md`を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(399件) / build: ✓
- 次回予定: グループCのflavor続き(P83: 魔封石保管庫、以降P84: 禁書閲覧室、
  P85: 契約精霊の棲家)。グループG(月草/月光草の混同、fragment向き)も
  未使用のまま残っている。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-29 23:20
- ブランチ: `evolve/cycle-34`がPR #44でmainへ自動マージ・削除済みを確認。
  `main`を最新化し、新しく`evolve/cycle-35`を作成。
- タスク選定: (1) 解消済みバグ2件のroadmap-done.mdへの退避(bookkeeping)、
  (2) `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループC
  「立入禁止・非公開区画」のroot部分。
- 実装:
  1. `docs/ROADMAP.md`のバグ修正セクションから解消済み2件(学院創立者の
     表記矛盾・学長/学院長の表記ゆれ)を`docs/roadmap-done.md`へ退避、
     お知らせ文を削除。
  2. グループC root: 「なぜどのエリアにも人知れない一角があるのか」を
     掲げる`pages/glossary/hidden-corners.html`を新設(4カード)。6件中
     触媒保管庫(alchemy-tower.html)・予備歯車庫(clock-tower.html)の
     2件を採用。グループCは1ページに詰め込まず`docs/ARG-DESIGN.md`4-5節
     のroot→flavorチェーン形式で実装する方針のため、残り4件(蔵書親和
     魔法陣・魔封石保管庫・禁書閲覧室・契約精霊の棲家)はP82〜P85として
     骨組みだけ追記し、次回以降のサイクルで1件ずつ着手する(サイズLの
     ため今回はrootのみ実装)。
  `src/search-data.js`に1エントリ、`src/hint-data.js`にroot型ヒント2件を
  追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(396件) / build: ✓
- 次回予定: グループCのflavor(P82: 蔵書親和魔法陣、以降P83〜P85)を
  1件ずつ実装。グループG(月草/月光草の混同、fragment向き)も未使用のまま
  残っている。
- blocked / partial: なし(グループCの残り4件はサイズL分割のため
  `docs/ARG-DESIGN.md`に骨組みのみ記載、blockedではなく計画的な分割)
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-29 22:50
- ブランチ: 引き続き`evolve/cycle-34`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループD
  「天文台の2人の学長級人物」。実装中に世界観バグ(「学長」「学院長」の
  表記ゆれ)を発見したため、あわせて修正。
- 実装:
  1. 学院トップの役職名「学長」「学院長」の表記ゆれを「学長」に統一
     (`shop/library-shop.html`・`glossary/erased-champion.html`・
     `glossary/koku-trio.html`の3ファイル)。`docs/ROADMAP.md`のバグ修正
     セクションに記録、お知らせ文も両方の修正内容を含む形に書き直した。
  2. グループD「天文台の2人の学長級人物」: 第2代学長フローラ・
     シルヴァーンの現存する書簡・学院湿地区画(shop/library-shop.html)を
     `pages/glossary/second-headmaster.html`に統合(4カード)。本文に
     flavor向きの謎(筆記具の寸法を書簡に記した理由不明、湿地区画の
     管理者不明)を含めたため、予約済みのroot→flavor 2段枠P28〜P30へ
     最初から当てはめて実装。
  `src/search-data.js`に1エントリ追加、`src/hint-data.js`にroot型ヒント
  1件追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(393件) / build: ✓
- 次回予定: `### 13`のP番号ページ実装を継続。`docs/ARG-WORDBANK.md`の
  グループC(立入禁止・非公開区画、6件の深いflavor連鎖に向く最有力候補、
  未着手のまま)・グループG(月草/月光草の混同、fragment向き、未着手のまま)
  が未使用で残っている。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-29 22:30
- ブランチ: 引き続き`evolve/cycle-34`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装、`docs/ARG-WORDBANK.md`グループB
  「記録簿モチーフ」を2ページに分割して実装。
- 実装:
  1. B-1「陣紋の保守記録」: 魔法陣刻印記録簿(alchemy-tower.html)・
     陣紋補修記録簿(summoning-plaza.html)を
     `pages/glossary/circle-ledgers.html`に統合(4カード)。
  2. B-2「実績・認定の記録」: 錬金術研究棟の記録簿(events/index.html)・
     考査記録室(dueling-ground.html)を`pages/glossary/merit-records.html`
     に統合(4カード)。
  両ページとも、本文にflavor向きの素材(初代の署名欄が判読不能、副賞の
  指輪が選ばれた理由不明、等)を含めたため、新規ID追記ではなく前サイクルで
  明文化した方針(`docs/ARG-DESIGN.md`4節)に沿って、予約済みのroot→flavor
  1段枠(P33〜P34・P39〜P40)へ最初から当てはめて実装した。
  `src/search-data.js`に2エントリ追加(「記録簿」という共通語を含むため
  両方`exactMatch: true`で衝突回避)、`src/hint-data.js`にroot型ヒント4件
  追加。`docs/ARG-DESIGN.md`・`docs/ARG-WORDBANK.md`を更新。
- レビュー: OK(local-review、指摘なし)
- lint: ✓ / lint:css: ✓ / test: ✓(389件) / build: ✓
- 次回予定: `### 13`のP番号ページ実装を継続。`docs/ARG-WORDBANK.md`の
  グループC(立入禁止・非公開区画、6件の深いflavor連鎖に向く最有力候補)・
  グループD(天文台の2人の学長級人物)・グループG(月草/月光草の混同、
  fragment向き)が未使用のまま残っている。
- blocked / partial: なし
- asset-pending: なし(既存の`.archive-list`パターン流用のみ、新規ビジュアル
  エリア無し)

## 2026-07-29 21:35
- ブランチ: 引き続き`evolve/cycle-34`(未マージ)。
- タスク選定: 「バグ修正」の唯一の未対応項目(library-shop.htmlの学長表記
  矛盾)と、`### 13`のP番号ページ実装(グループF)をまとめて実装。
- 実装:
  1. `pages/shop/library-shop.html`の商品説明「第三代学院長アルノルド卿」を
     「創立者アルノルド卿」に修正(他の全ページで確立された創立者[初代]
     設定との矛盾を解消)。
  2. P105〜P107として新規3ページを追加(グループF「異次元・精霊との
     接触」):
     - P105(root)`pages/glossary/otherworld-presence.html`「異次元存在、
       その正体をめぐって」← `shop/summoning-shop.html`の降霊護符説明
     - P106(root)`pages/glossary/sylphe-dialogue.html`「契約精霊シルフィ、
       水面の返答」← `exploration/summoning-plaza.html`の対話コーナー
     - P107(root)`pages/glossary/starfield-spirit.html`「星界の精霊、
       新月の夜にだけ」← `events/index.html`の精霊観測会
     3ページとも「精霊」と「異次元存在」が同じものを指すのか別物なのか
     という謎を各ページの独り言でそれとなく示唆する形にしたが、
     断片やprereqによる強制接続はせず独立したroot行のまま実装。
  `docs/ARG-WORDBANK.md`グループFを使用済みに。`src/hint-data.js`に3件の
  root行ヒントを追加。
- レビュー: OK(local-review相当のセルフチェックを実施。narration rule・
  自己言及ワード回避・keyword衝突なしを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(409件、+12) / build: ✓
- 次回予定: `### 13`の次のP番号ページ(グループG、月草/月光草の混同ネタ。
  fragment種別の謎解きページで、他グループより設計に時間がかかる想定)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 21:29
- ブランチ: 引き続き`evolve/cycle-34`(未マージ)。
- タスク選定: `### 13`のP番号ページ実装。`docs/ARG-WORDBANK.md`グループH
  「アルノルド卿にまつわる物証」(3項目、root優先方針にも合致)を選択。
- 実装: P102〜P104として新規3ページを追加。
  - P102(root)`pages/glossary/arnold-crest.html`「紋章『双頭の鷲と魔法陣』、
    その意味」← `shop/souvenirs.html`のバッジ商品説明
  - P103(root)`pages/glossary/arnold-manuscript.html`「研究手稿、余白に
    残された走り書き」← `shop/books.html`の商品説明
  - P104(root)`pages/glossary/founding-grimoire.html`「創魔の書、第四章に
    ついて」← `shop/library-shop.html`の商品説明
  いずれも断片を産出しない純粋なフレーバー層。keywordは各ページの商品名に
  含まれる特徴的な語句を採用し、「アルノルド」のような既存エントリ
  (トップページ)と衝突しうる汎用的な接頭辞は避けた。`src/hint-data.js`に
  3件のroot行ヒントを追加。`docs/ARG-WORDBANK.md`グループHを使用済みに。
- 副産物: P104実装中に`shop/library-shop.html`の商品説明が、他の全ページで
  確立された「創立者(初代)アルノルド卿」設定と矛盾する「第三代学院長」
  表記になっている世界観の不整合を発見。今回は修正せず
  `docs/ROADMAP.md`「## バグ修正」にtodoとして記録。
- レビュー: OK(local-review相当のセルフチェックを実施。narration rule・
  自己言及ワード回避・keyword衝突なしを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(397件、+12) / build: ✓
- 次回予定: バグ修正todo(library-shop.htmlの学長表記矛盾)、または
  `### 13`の次のP番号ページ(グループF・Gから選定)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 20:29
- ブランチ: 引き続き`evolve/cycle-34`(未マージ)。
- タスク選定: `### 15`最後の残タスク「発見済みページに対するヒントを
  非表示化」(M)を実装。
- 実装: 各`HINT_DATA`エントリに`leadsTo`(このヒントが導く先の隠しページ、
  表示には一切使わないフィルタ専用の値)を追加。`hintFor`(見出し表示用、
  答えを出してはならない)とは役割が異なり、`leadsTo`は答えのページを
  指しても構わない設計にした。`src/logic.js`に純粋関数
  `filterActiveHints(hintData, visitedPaths)`(テスト付き)を新設し、
  `filterUnlockedHints`に加えて`leadsTo`が既に「学院の秘密」に含まれる
  エントリを除外するようにした。`src/hint-book.js`に同じロジックを複製。
  全14エントリの`leadsTo`値を`src/search-data.js`のprereqチェーンと
  突き合わせて検証済み。`### 15`にこれで未完了サブタスクが無くなったため
  statusを完了に変更。
- レビュー: OK(local-review相当のセルフチェックを実施。leadsToが表示系
  関数[resolveHintPageTitle/hintFor]に一切渡っていないこと、全エントリの
  leadsTo値が正しいことを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(385件、+4) / build: ✓
- 次回予定: `### 13`の次のP番号ページ(グループF〜H)、または新たな候補出し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 20:02
- ブランチ: `evolve/cycle-33`はPR #42のマージ済みを確認、`main`をpullした上で
  新規`evolve/cycle-34`ブランチを作り直して継続。
- ドキュメント整理: `evolve/cycle-33`で解消したバグ修正4件(news.json自動
  生成・ヒント見出しの後退・「刻」keyword衝突・ヒント重複表示)がorigin/main
  に取り込み済みであることを確認できたため、`docs/roadmap-done.md`へ退避。
- タスク選定: `### 13`のP番号ページ実装(グループE)と、直前の手動チャットで
  記録した「学院の秘密」ツリーのスマホ誤タップ対策をまとめて実装。
  1. P100(root)`pages/glossary/northern-cloud-sea.html`「北方雲海、その先
     について」← `shop/airship-shop.html`の航路図みやげ商品説明
  2. P101(root)`pages/glossary/transit-plaza.html`「魔法陣転移広場、王都の
     もう一つの顔」← `index.html`のアクセス案内。keyword「魔法陣転移広場」
     は既存の「魔法陣召喚広場」系4エントリと接頭辞が重複するため
     `exactMatch: true`に設定
     (`docs/ARG-WORDBANK.md`グループE「キャンパスの外側」を使用済みに)
  3. 「学院の秘密」ツリーの「つながり(n)」開閉トグルと前後のページリンクの
     誤タップ対策: `@media (width <= 600px)`でタップ領域(padding)を広げ、
     トグルの上マージンも増やした(`styles/search.css`)
- レビュー: OK(local-review相当のセルフチェックを実施。新規2ページの
  narration rule・自己言及ワード回避・keyword衝突を確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(381件、+8) / build: ✓
- 次回予定: `### 15`残り1件(発見済みページのヒント非表示化、M)、または
  `### 13`の次のP番号ページ(グループF〜H)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 19:32
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。
- タスク選定: 「バグ修正(最優先)」セクションの唯一の未対応項目
  (`data/news.json`自動生成お知らせが壊れる不具合、前サイクルで調査済み)。
- 実装: 実際のコミット履歴を1つずつ検証し、当初の仮説(`origin/main`参照が
  古い)は誤りと判明。実際の原因は2つ:
  1. `extractBugfixSection`の`> お知らせ:`・`extractPages`の`> 紹介文:`が
     2行目以降を黙って切り捨てていた(継続行連結処理`collectWrappedLine`を
     新設、テスト付き)。バグ修正項目の説明文(識別子として1行目のみ使う
     設計)は意図的に対象外のまま維持。
  2. `update-news.js`が、同じ日付の既存バグ修正エントリに`items`を追記
     する際`note`を更新していなかったため、その日最初の解消時点の
     お知らせ文が固定表示され続けていた(実際の不具合の主因)。
     マージ処理を`upsertBugfixNewsEntry`(テスト付き)に切り出し、
     追記のたびに`note`も最新化するよう修正。
  これで`## バグ修正`セクションの未解消項目が0件になったため、
  世界観に沿った(ARG用語を含まない)お知らせ文を追記。
- レビュー: OK(diffを確認、node.jsスクリプトなのでbuild成果物への影響
  なしを確認)。
- lint: ✓ / lint:css: ✓ / test: ✓(373件、+8) / build: ✓
- 次回予定: グループE(北方雲海・魔法陣転移広場)の新規Pページ実装。
  次にこのバグ修正4件がorigin/mainへの取り込みを確認できたサイクルで
  docs/roadmap-done.mdへまとめて退避すること。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 19:23
- ブランチ: 引き続き`evolve/cycle-33`。
- 経緯: ユーザーから「ヒントページ、今一ページに一つしかないけどこれ
  一ページに複数あればちゃんと問題なく動く?」との質問。確認したところ、
  P2「永久運動核」・P98「刻の書」のように複数のヒントエントリが同じ
  `hintFor`(`exploration/clock-tower.html`「時計塔」)を持つケースが
  既にデータ上存在しており、実際に確認すると見出し「時計塔」が重複して
  2つ並んでしまう不具合だった。
- 実装: `src/logic.js`に純粋関数`groupHintsByHintFor(hints, searchIndex,
  extraEntries)`(テスト付き)を新設し、同じ見出しのエントリを1つの
  `<details>`にまとめてヒント本文を複数の`<p>`として並べる形に変更
  (`src/hint-book.js`に同じロジックを複製)。`styles/hint-book.css`に
  2件目以降の`.hint-book__entry-text`の間隔用スタイルを追加。
  `docs/ARG-DESIGN.md`4-8節・`docs/ROADMAP.md`に記録。
- レビュー: OK。
- lint: ✓ / lint:css: ✓ / test: ✓(365件、+3) / build: ✓
- 次回予定: `scripts/roadmap-utils.js`のお知らせ生成不具合の調査・修正、
  その後グループE(北方雲海・魔法陣転移広場)の新規Pページ実装。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 19:15
- ブランチ: 引き続き`evolve/cycle-33`。
- 経緯: ユーザーから「『刻の』ですべて検索結果出るのダメかも」との指摘。
  P97〜P99のkeyword「刻の輪」「刻の書」「刻の声」が全て「刻の」という
  共通の接頭辞を持ち、部分一致のままだと2文字打つだけで3件まとめて
  見つかってしまい、各エリアページを個別に読んで一つずつ発見していく
  設計が崩れていた。
- 実装: `src/search-data.js`のP97〜P99エントリ3件を`exactMatch: true`に
  変更し、完全一致でのみヒットするようにした。`docs/ARG-DESIGN.md`4-1節の
  P99行に経緯を追記、`docs/ROADMAP.md`にバグ修正として記録。
- レビュー: OK。
- lint: ✓ / test: ✓(362件、変更なし) / build: ✓
- 次回予定: `scripts/roadmap-utils.js`のお知らせ生成不具合の調査・修正、
  その後グループE(北方雲海・魔法陣転移広場)の新規Pページ実装。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 19:09
- ブランチ: 引き続き`evolve/cycle-33`。
- 経緯: ユーザーがスクリーンショットで、ヒントの手引きの見出し(「魔法生物
  図鑑」「刻の輪、四百年の来歴」等)がそのまま謎解きの答えになっている
  ことを報告。前サイクルの`hintFor`修正が、実は逆方向の重大な後退
  だったと判明(発見の連鎖型・root行のヒントで、まだ見ぬ答えのページの
  titleをそのまま見出しに表示していた)。
- 実装: `hintFor`を例外なく「プレイヤーが安全に開示されてよい、既に
  持っている情報」だけを指すよう`src/hint-data.js`全エントリを修正。
  暗号解読型(F1・F2・F13)は変更なし、発見の連鎖型は`requiresPage`と
  同じ既訪問の前段ページに戻し、root行は手がかりの文言が実際に書かれて
  いる通常ページ(`guide/index.html`「学院案内」等)に変更。
  `docs/ARG-DESIGN.md`4-8節に「答えの隠しページそのものを`hintFor`に
  しない」ことを絶対条件として明記。バグ修正としてdocs/ROADMAP.mdに記録
  (既に他の未解消バグがあるため、お知らせは今回自動生成されない)。
- レビュー: OK(全14エントリのhintForが答えの隠しページを指していない
  ことを目視確認)。
- lint: ✓ / test: ✓(362件、変更なし) / build: ✓
- 次回予定: `scripts/roadmap-utils.js`のお知らせ生成不具合の調査・修正、
  その後グループE(北方雲海・魔法陣転移広場)の新規Pページ実装。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 18:57
- ブランチ: 引き続き`evolve/cycle-33`。前回サイクルのpush後、PR #40が
  自動マージされ`data/news.json`に不具合修正お知らせが公開されたが、
  ARGのヒント・手がかりを示唆するメタ的な文言(かつ内容も無関係な過去の
  断片テキスト)になっていたとユーザーから指摘を受けた。
- 対応: ユーザー許可のもと`data/news.json`を例外的に直接手動訂正
  (`main`は直接push不可のブランチ保護があったため`fix/news-json-arg-meta-language`
  ブランチ経由でPR #41を作成、マージはユーザー判断に委ねた)。
  あわせて根本原因を調査し、`scripts/roadmap-utils.js`の2つの不具合
  (複数行の`> お知らせ:`/`- [x]`項目が1行目で切り捨てられる、
  `getMainRoadmap()`が参照する`origin/main`が更新直後で古い可能性)を
  `docs/ROADMAP.md`「## バグ修正」に記録。前サイクルの「ヒントの手引き
  見出し」バグ修正は`origin/main`への取り込みを確認できたため
  `docs/roadmap-done.md`へ退避した。
- レビュー: スキップ(ドキュメント記録のみ、コード変更なし)。
- lint: ✓(変更なし) / lint:css: ✓(変更なし) / test: ✓(362件、変更なし) / build: ✓
- 次回予定: `scripts/roadmap-utils.js`のお知らせ生成不具合の調査・修正
  (優先)、その後グループE(北方雲海・魔法陣転移広場)の新規Pページ実装。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 18:48
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。origin/mainがPR #39で
  cycle-33の一部(P97-P99実装前まで)を取り込み済みだったが、直近の
  P97-P99コミットは未マージのままブランチに残っていたため、新規ブランチは
  作らずそのまま継続。
- タスク選定: 当初`### 13`の「独り言→本文への語句移設」todoとグループE
  新規ページを予定していたが、着手直後にユーザーからヒントの手引き周りの
  実地フィードバックを複数受けたため、そちらを優先(グループEは次回に
  延期)。
- 実装:
  1. 独り言→本文への語句移設(予定していたtodo): `dueling-champions.html`
     (「静寂の一撃」)は`.champion-note`を新設して移設、
     `perpetual-motion.html`(「修繕工房」)は既存の`archive-entry__lore`に
     一文追記する形で移設。両ページの独り言は語句を含まない一文に書き改め。
  2. ヒントの手引き見出しの不具合修正: `entry.requiresPage`(解禁条件)を
     見出しにも流用していたため、発見の連鎖型ヒントで見出しと手がかりの
     指す先が食い違っていた(例: 見習い整備士の手記の発見ヒントなのに
     見出しが「永久運動術式」)。`requiresPage`とは別に見出し専用の
     `hintFor`フィールドを新設して分離。バグ修正として`docs/ROADMAP.md`
     「## バグ修正」に記載。
  3. root行(P1-P4・P97・P98)へのヒント6件を追加: 前提ページが無い
     root行は`requiresPage`省略で常時解禁扱いになるよう
     `filterUnlockedHints`を拡張。
  4. 断片F2の個別名を「記帳の断片」→「星の断片」に変更(ギミックの実態
     [星図の座標解読]に合わせて)。
  `docs/ARG-DESIGN.md`4-8節・4-1節(P5・P8行)・3節(F2の例示)を整合。
- レビュー: OK(local-review相当のセルフチェックを実施。移設後の独り言に
  検索語句が残っていないこと、root行ヒントが常時解禁されること、
  hintForとrequiresPageの分離が全エントリで一貫していることを確認。
  指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(362件、+1) / build: ✓
- 次回予定: グループE(北方雲海・魔法陣転移広場)の新規Pページ実装。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 18:33
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。
- タスク選定: `### 13`の未着手P番号ページタスク(前サイクルで着手条件が
  解除済み)。`docs/ARG-WORDBANK.md`グルーピング候補のグループA「刻」三部作
  (3項目ちょうど、root優先方針にも合致)を選択。
- 実装: P97〜P99として新規3ページを追加。
  - P97(root)`pages/glossary/time-ring-record.html`「刻の輪、四百年の来歴」
    ← `exploration/summoning-plaza.html`の「大魔法陣『刻の輪』」
  - P98(root)`pages/glossary/time-ledger.html`「刻の書、十二代の写し」
    ← `exploration/clock-tower.html`の「管理台帳『刻の書』」
  - P99(flavor)`pages/glossary/time-bell.html`「刻の声、その一撞き」
    ← P97・P98いずれか一方の訪問で解禁(広場と時計塔の2エリアから接続
    できる網状構造。prereqはOR配列)
  P97・P98それぞれの本文に「刻の声」という語を仕込み、P99への発見経路を
  確保。断片は産出しない純粋なフレーバー層。`src/search-data.js`にkeyword
  登録(`刻の輪`/`刻の書`/`刻の声`、既存エントリと重複なし確認済み)、
  `src/hint-data.js`にもP99発見用のヒントを1件追加(前サイクルで拡大した
  ヒント対象の運用を踏襲)。`docs/ARG-DESIGN.md`4-2節に該当行を追記、
  `docs/ARG-WORDBANK.md`のグループAを使用済みとしてマーク。
- 実装中のユーザー指摘への対応: 「次に検索すべき語句を『ノスティオンの
  独り言』に置きたくない、本文側に置くべき」との好みを受け、P97/P98の
  独り言にあった「刻の声」を本文(縁石の銘・欄外の走り書き)へ移設し、
  独り言側は語句を含まない一文に書き改めた。方針を`docs/ARG-DESIGN.md`
  3節に追記。既存の`dueling-champions.html`(独り言に「静寂の一撃」)・
  `perpetual-motion.html`(独り言に「修繕工房」を含む一文)の2件が同じ
  問題を抱えたまま残っていることも判明したため、`docs/ROADMAP.md`
  「### 13」にtodoとして追記(このサイクルではスコープ外として着手せず)。
- レビュー: OK(local-review相当のセルフチェックを実施。本文の語り手ルール
  [独り言以外は客観描写]・自己言及ワード回避・keyword重複なしを確認。
  hidden pageのためsitemap.html/ASSET_REQUESTS.mdの対象外であることも確認。
  指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(361件、+12) / build: ✓
- 次回予定: 独り言→本文への語句移設todo(既存2ページ)、`### 13`の次の
  P番号ページ(グループB〜Hから選定)、またはP91以外の新規タスク候補の棚卸し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 18:28
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。
- タスク選定: `### 15`最後の残タスク「ヒントの手引きの対象拡大」(M)を実装。
  これで`### 13`のP番号ページ実装タスクにあった「13,15の他タスクが終わる
  まで着手しない」という条件が解除された。
- 実装: `window.HINT_DATA`(元はP5・P7・P91の暗号解読3件のみ)に、
  `prereq`を持つがヒント未整備だった4件を追加(`apprentice-notes.html`・
  `first-astronomer.html`・`final-entry.html`・`erased-champion.html`)。
  OR-prereqページ(first-astronomer.htmlは魔法生物図鑑/魔導88星座どちらから
  でも到達可)に対応するため、`entry.requiresPage`が文字列に加えて
  string[]も受け付けるよう`filterUnlockedHints`・`resolveHintPageTitle`
  (`src/logic.js`、テスト付き)を拡張し、`src/hint-book.js`にも複製。
  ついでに、F13のヒント文言が前サイクルの候補5択化に追随できておらず
  「三つの候補」のままだった表記ずれも修正。
  `### 15`にこれで未完了サブタスクが無くなったため、statusを`完了`に変更。
- レビュー: OK(local-review相当のセルフチェックを実施。OR配列のfallback
  (文字列のみのケース)が既存3件のヒントで壊れていないことを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(349件、+2) / build: ✓
- 次回予定: `### 13`の未着手Pページ実装(条件解除済み、グループA「刻」三部作
  など)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 18:20
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。
- タスク選定: `### 13`の新規Pページ実装タスクは「13,15の他タスクが終わる
  まで着手しないこと」との注記が付いたため見送り、`### 13`のP91対策(M)と
  `### 15`の断片取得エフェクト第2弾(M)を実装。
  1. P91「本心の断片」総当たり対策: `nostion-memory.html`の候補を3つ→5つに
     増やし(『刻みの守人』『詠み子』追加)、それぞれに矛盾の手がかりを追記。
     誤った候補を検索した際(ページ訪問済みの場合のみ)は専用の応答
     「……その響きには、聞き覚えがありません。」を返すようにした
     (`src/logic.js`: `isNostionMemoryWrongCandidate`、テスト付き)。
  2. 断片取得エフェクト第2弾: 1つ目のバナー消滅後に断片名を明かす2つ目の
     バナーを追加。`.fragment-effect__glyph`の内側意匠を断片ごとに変更
     (F1=六角形/F2=五芒星/F13=菱形、未登録IDは円形にフォールバック)。
     3つの断片到達ページに`fragment-names.js`の読み込みを追加。
  `docs/ARG-DESIGN.md`のP91行にも変更内容を反映。
- レビュー: OK(local-review相当のセルフチェックを実施。誤答フィードバックが
  ページ未訪問時には発火しないこと、SVGのpathLength正規化が新しい意匠でも
  機能することを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(347件、+4) / build: ✓
- 次回予定: `### 15`残り1件(ヒント対象拡大[M])、または`### 13`の未着手Pページ
  (13,15の他タスクが片付いたため次回から着手可)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 18:10
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。
- タスク選定: ユーザーから「`### 15`の残タスクを優先してほしい」と直接指摘
  を受け、新規Pページ実装(`### 13`)への着手を取りやめ、`### 15`の
  `src/hint-book.js`/`pages/glossary/hint-book.html`まわりで関連性の強い
  S規模タスク3件をまとめて実装。
  1. 各ヒントを`<details>`(デフォルト閉)で開閉式に変更。
  2. ヒントの見出しを断片の個別名(ネタバレになる)から、謎解きがある
     ページ自体のタイトルに変更。`src/logic.js`に`resolveHintPageTitle`を
     新設(テスト付き)。`hint-book.html`に`search-data.js`の読み込みを追加、
     不要になった`fragment-names.js`の読み込みは削除。
  3. `pages/search.html`のヒントリンク文言「謎解きに行き詰まったら」を
     「迷える者への、小さな手引き」に変更し、「ここはヒントを集めた場所
     です」という説明は`hint-book.html`の`.page-hero__desc`側に寄せた。
  `docs/ARG-DESIGN.md`4-8節にも変更内容を反映。
- レビュー: OK(local-review相当のセルフチェックを実施。`<details>`のデフォルト
  状態が閉であること、P91のようにSEARCH_INDEX未登録ページの見出しも
  `resolveHintPageTitle`で解決できることを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(343件、+3) / build: ✓
- 次回予定: `### 15`残り2件(断片取得エフェクト第2弾[M]・ヒント対象拡大[M])、
  または`### 13`の「未着手」P番号ページ・P91三択対策。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 17:50
- ブランチ: 引き続き`evolve/cycle-33`(未マージ)。
- タスク選定: `### 15`(ARG基盤・ノスティオン)から、いずれも`src/search.js`/
  `pages/search.html`まわりの近い領域を触る独立したS規模タスク3件をまとめて
  実装(ユーザーからチャットで提案・追加された「デバッグ用検索機能」を含む)。
  1. デバッグ用の発見履歴リセット機能: ノスティオンの検索窓に裏コマンド
     `!reset`を入力すると`codex-memory`を削除してリロードする。判定は
     `src/logic.js`の`isDebugResetQuery`(テスト付き)、リセット処理は
     `src/codex-progress.js`に`CodexProgress.reset()`を新設。
  2. 「学院の秘密」欄全体の折りたたみ: `<details>`/`<summary>`で包み
     デフォルト閉に(`pages/search.html`・`styles/search.css`)。
  3. 「謎解きに行き詰まったら」リンクの表示条件: 「学院の秘密」を1件以上
     見つけた後にのみ表示するよう変更。判定は`src/logic.js`の
     `shouldShowHintLink`(テスト付き)。
  あわせて`docs/ARG-DESIGN.md`のヒントリンク説明(「常時設置」の記述)を
  新しい表示条件に合わせて更新。
- レビュー: OK(local-review相当のセルフチェックを実施。3件とも独立して
  動作すること、`<details>`のデフォルト状態が閉であること、bfcache復元時にも
  `updateHintLinkVisibility`が呼ばれることを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(340件、+8) / build: ✓
- 次回予定: `### 15`残りタスク(ヒント手引きの開閉式化・見出し変更・断片
  エフェクト第2弾・ヒントページ導線文言・ヒント対象拡大)、または`### 13`の
  「未着手」P番号ページ・P91三択対策。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 17:35
- ブランチ: `evolve/cycle-32`はすでに`origin/main`に取り込み済み(PR #38、
  `chore: update news for completed pages [skip ci]`コミット`5bcca74`)
  だったため、`main`をpullした上で新規`evolve/cycle-33`ブランチを
  作り直して継続(手順通り)。
- ドキュメント整理: `evolve/cycle-32`で解消したバグ修正2件(ツリー安定化・
  発見バッジ)が`origin/main`に取り込み済みであることを確認できたため、
  `docs/ROADMAP.md`の「## バグ修正」セクションから`docs/roadmap-done.md`の
  「バグ修正(解消済み)」欄へ退避し、お知らせ行を削除。
- タスク選定: `### 13`のレビュー待ちタスクから、独立して着手できる小規模
  (S)修正3件をまとめて実装。
  1. P8「名を消された決闘王」のkeyword見直し: 元のkeyword「さらに古い時代の
     決闘王」が文章そのものかつ「決闘王」がP4・P8のタイトルと重複していた
     問題を、P8本文に既出の一文「一撃で場を静める」への変更で解消
     (`src/search-data.js`・`pages/glossary/dueling-champions.html`・
     `docs/ARG-DESIGN.md`)。
  2. P2「フィンレー式記譜法」対応表のスマホ表示修正: `@media (width <= 600px)`
     で1列に戻っていた`.archive-entry__profile--cipher`を2列
     (`repeat(2, max-content 1fr)`)に変更(`styles/glossary.css`)。
  3. P5・P7の語り手ルール違反修正: 書き手が知りようのない「ノスティオンに
     尋ねてみて」という直接的な呼びかけを、検索機能の名を出さない推測の
     一文に書き改めた(`pages/glossary/apprentice-notes.html`・
     `pages/glossary/final-entry.html`)。
- レビュー: OK(local-review相当のセルフチェックを実施。各修正が意図通りの
  差分に収まっていること、P8の新keywordがP8本文に実在すること、モバイル
  グリッドの列数変更が他のブレークポイントと衝突しないことを確認。指摘なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(332件) / build: ✓
- 次回予定: `### 13`の「未着手」P番号ページの新規実装、またはP91の三択
  総当たり対策(M)。
- blocked / partial: なし
- asset-pending: なし(今回は既存ページのテキスト・CSS修正のみで新規
  ビジュアルエリアの追加なし)

## 2026-07-29 17:20
- ブランチ: 前回の`evolve/cycle-31`はすでに`origin/main`に取り込み済み
  だったため、`main`をpullした上で新規`evolve/cycle-32`ブランチを
  作り直して継続(手順通り)。
- タスク選定: 「バグ修正(最優先)」の2件(「学院の秘密」ツリーの親子関係が
  遡って変わる[M]・発見済みページでも「発見」バッジが出る[S])をまとめて
  着手。
- 実装: (ツリー安定化) ROADMAP.md記載時点では`codex-progress.js`の拡張
  (prereq情報を新たに持たせる)が必要と見積もっていたが、実装時に
  もっと軽量な修正で解決できると判明: `buildSecretsTree`の親候補の絞り込み
  条件に「そのページ自身より前に訪問されていること」を追加するだけで、
  データスキーマ変更なしに解決した(`visitedPaths`が追記専用のため、この
  条件を満たす候補集合は将来の訪問で変化しない)。再現テストを追加。
  (発見バッジ) `src/logic.js`に純粋関数`shouldShowDiscoveryBadge`を新設
  (テスト付き)、`src/search.js`の結果描画に反映。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。
  ツリー安定化の再現テスト(魔導88星座→シベル・オーレン→魔法生物図鑑の
  順で訪問しても親子関係が変わらないこと)を重点確認。既存テストが
  全て新しい絞り込み条件でも通ることも確認。世界観・keywords重複無し・
  絶対パス無し・コアカラーのみ(今回はCSS変更なし)もあわせて確認、
  指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(332件) / build: ✓
- 次回予定: レビューで溜まっている`### 15`・`### 13`のタスク群(ヒント
  ページの開閉式化・断片取得エフェクトの第2弾・ヒント導線の文言見直し等)
  から着手。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 16:34
- タスク選定: `### 15`の残り2件(「手にした断片」欄へのギミック元ページ記録[M]・
  断片獲得時の演出[M])をまとめて着手。両方とも断片の表示・獲得体験という
  同じ領域のため、比較・統一感を重視してまとめた。
- 実装: (ギミック元ページ記録) 各断片が元々持っていた`foundAt`(獲得元ページ
  のpath)を、`src/logic.js`の新設`buildFragmentDisplayList`(テスト5件)で
  対応タイトルと突き合わせ、`src/search.js`で断片名の下にリンク表示する形に
  変更。(獲得演出) `gear-cipher.js`・`shooting-star.js`・`yorishiro-echo.js`
  という3つのほぼ同一の断片付与スクリプトを、共通の`src/fragment-effect.js`
  (`data-fragment-id`/`data-found-at`属性で対象指定)に統合。新規獲得時のみ
  二重の魔法陣がstroke描画で一度だけ浮かび上がる演出バナーを表示(回転し
  続けるスピナー等は避けた)。`prefers-reduced-motion`では単純なフェードに
  縮退。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。
  fragment-effect.jsで新規/再訪問の判定順序(addFragment呼び出し前に
  既存チェック)をコードトレースで確認。codex-progress.js→
  fragment-effect.jsのスクリプト読み込み順序(defer順)も確認。
  ブラウザでの実機確認は、この環境にPlaywright等が未セットアップのため
  スキップ(コードトレースで代替、前回までと同様)。世界観・keywords重複無し・
  絶対パス無し・コアカラーのみもあわせて確認、指摘なし。
- `### 15`(ARG基盤・ノスティオン)の未完了サブタスクが0件になったため
  statusを`完了`に変更。これに伴い`### 13`側の「`### 15`優先」のゲート記述
  も解消し、未着手P番号ページの実装に進めるようにした。
- lint: ✓ / lint:css: ✓ / test: ✓(329件) / build: ✓
- 次回予定: `docs/ARG-DESIGN.md`4節の「未着手」P番号ページを1行選んで実装
  (`docs/ARG-WORDBANK.md`のグルーピング候補を優先的に検討)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 15:33
- タスク選定: `### 15`から2件(「学院の秘密」欄のツリー構造化[M]・検索クエリの
  最低文字数[S])をまとめて着手。`### 13`のP番号未着手タスクは引き続き
  `### 15`優先のゲート待ちのため見送り。
- 実装: (ツリー構造化) `src/logic.js`に純粋関数`buildSecretsTree`を新設
  (テスト7件)。網状構造で複数の親候補が訪問済みの場合は最も後に訪問された
  方を親として採用し、未訪問の親候補の存在は一切推測させない。
  `src/search.js`に同じロジックを複製し、`<details>/<summary>`で
  折りたためるツリー表示に変更(リンクは`<summary>`外に配置し遷移と
  開閉のクリックを分離)。(最低文字数) `MIN_SEARCH_QUERY_LENGTH = 2`を
  `src/logic.js`・`src/search.js`両方に導入し、自己言及トリガー
  (「私」等1文字)だけは対象外にしつつ、それ以外の短いクエリには
  専用の案内メッセージを表示するようにした。ついでに`docs/ROADMAP.md`の
  古い`origo-echo.html`参照を`yorishiro-echo.html`に修正。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。
  buildSecretsTreeのテストで、網状構造(複数親候補)・未訪問親の非表示・
  未知エントリのスキップを重点確認。自己言及クエリ「私」が最低文字数制限の
  対象外であることをコードトレースで確認。ブラウザでの実機確認は、
  この環境にPlaywright等が未セットアップのためスキップ(コードトレースで
  代替、前回サイクルと同様)。世界観・keywords重複無し・絶対パス無し・
  コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(324件) / build: ✓
- 次回予定: 「手にした断片」欄へのギミック元ページ記録、または断片獲得時の
  演出追加(いずれも`### 15`)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 14:34
- タスク選定: `### 13`から「謎解きのヒント専用ページを設ける」(M、
  ユーザー提案)に着手。P-番号未着手行の実装タスクは`### 15`優先の
  ゲート待ちのため見送り。
- 実装: `pages/glossary/hint-book.html`(「ヒントの手引き」)を新設。
  `src/hint-data.js`の`window.HINT_DATA`(id/requiresPage/hintの配列)と、
  `src/logic.js`の新設純粋関数`filterUnlockedHints(hintData, visitedPaths)`
  (テスト付き)で、訪問済み(「学院の秘密」)の謎だけヒントを表示する
  仕組みにした。`SEARCH_INDEX`には登録せず、`pages/search.html`の誘導文
  下に小さな控えめリンク(`.search-hint-link`)を常設して導線とした。
  P7(`final-entry.html`)の埋め込みヒントを移設・削除、P5・P91にも
  ヒントを新規追加。`styles/hint-book.css`新設、`styles/search.css`に
  リンク用スタイル追加(stylelintのno-descending-specificity対応で
  `.search-hint-link__anchor`という独立クラスに変更)。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。
  filterUnlockedHintsのロジックをコード上で追跡し、初期状態(非表示)→
  該当ページ訪問後(表示)の流れを確認。codex-progress.jsの実装も
  確認し、hint-book.html自体は「学院の秘密」に記録されないこと
  (data-page-path未指定)を確認。ブラウザでの実機確認は、この環境に
  Playwright等のブラウザ自動化ツールが未セットアップのためスキップ
  (コードレベルのトレースで代替)。世界観・keywords重複無し・
  絶対パス無し・コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(315件) / build: ✓
- 次回予定: 「学院の秘密」欄のツリー構造化、または「手にした断片」欄への
  ギミック元ページ記録(`### 15`)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 13:32
- ブランチ: 前回まで作業していた`evolve/cycle-30`は、直近のPR自動マージ
  (#36)によりすでに`origin/main`に取り込み済みだったため、`main`を
  pullした上で新規`evolve/cycle-31`ブランチを作り直して継続(手順通り)。
- タスク選定: `### 13`から、関連する3件(P91の合言葉候補の作り直し[M]・
  P2対応表の並び替え/レイアウト調整[S]・P5の語り口矛盾の修正[S])を
  まとめて着手。まず解消済みバグ(P91「学院の秘密」欄の不具合、既に
  origin/mainへマージ済みを確認)を`docs/roadmap-done.md`へ退避。
- 実装: (P91) 候補名をラテン語(MEMORIA/VERITAS/ORIGO)から自然な日本語
  (はじまりの書/みちしるべ/よりしろ)に変更、矛盾づけロジックは踏襲。
  到達先ページを`yorishiro-echo.html`に改名。(P2) 対応表をアルファベット順
  に並び替え、`styles/glossary.css`に`.archive-entry__profile--cipher`
  モディファイアを新設し3列グリッド化(先頭の説明行はフル幅、600px以下は
  1列に戻す)。(P5) 「気がするが」という主観表現を削除し、語り手の矛盾を解消。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。P91の
  矛盾づけロジックが実際に機能するか(はじまりの書・みちしるべがそれぞれ
  既出事実と矛盾し、よりしろのみ残ること)を再確認。origo-echo関連の
  ファイル・参照が残っていないことも確認。世界観・keywords重複無し・
  絶対パス無し・コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(308件) / build: ✓
- 次回予定: 謎解きヒント専用ページの設計・実装、または
  「学院の秘密」欄のツリー構造化。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 12:32
- タスク選定: 「バグ修正(最優先)」セクションの未対応項目
  (「学院の秘密」欄にP91が乗らない)に着手。
- 実装: `pages/glossary/nostion-memory.html`が`window.SEARCH_INDEX`未登録
  (自己言及トリガー専用の`SELF_REFERENCE_ENTRY`でのみ扱われる)ため、
  「学院の秘密」欄の描画ロジックがこのページを見つけられずスキップして
  いたのが原因。`SEARCH_INDEX`自体は変更せず(通常検索でヒットさせたくない
  ため)、`src/logic.js`に純粋関数`buildHiddenEntryList(searchIndex,
  extraEntries)`を新設し、`src/search.js`の`renderMemorySection`で
  `SEARCH_INDEX`のhiddenエントリ+`SELF_REFERENCE_ENTRY`を合流させた一覧を
  リスト表示・進捗の分母カウント両方に使うよう修正。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。修正が
  `filterIndex`/`isUnlocked`(通常検索の到達可否)に影響していないこと
  (P91は引き続き自己言及トリガー経由でのみ到達可能)を確認。世界観・
  keywords重複無し・絶対パス無し・コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(306件) / build: ✓
- 次回予定: P91の合言葉候補(ラテン語)を自然な日本語に作り直すタスク、または
  P2対応表の並び替え・レイアウト調整タスク。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 11:31
- タスク選定: `### 13`から、ユーザーレビューで判明したP5(M)・P7(S)の合言葉
  訂正タスクをまとめて着手(いずれも同一レビューに起因する関連修正のため)。
  P91分は同種だが規模が大きい(候補語の全面作り直し)ため次回に見送り。
- 実装: (P5) P2の「フィンレー式記譜法」を1記号=1モーラ(4種)から1記号=1
  アルファベット(1文字)+ダミー6種の計12種対応表に作り直し、PGATE再利用に
  耐える規模にした。歯車の符丁を4枚歯から8枚歯(「haguruma」8文字分)に
  拡張。検索窓に入力させる最終的な合言葉をローマ字「HAGURUMA」から自然な
  単語「歯車」に変更。(P7) 位置・配置方式のギミックは変更せず、合言葉のみ
  ローマ字「MODORIBA」からひらがな「もどりば」に戻した。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。歯車の
  符丁8記号をP2の対応表で正しく1文字ずつ解読すると「haguruma」になり
  「歯車」に到達することを手計算で確認。副作用として「歯車」の部分一致で
  既存の「歯車細工所」「歯車喫茶」も検索結果に混ざるようになる点を発見
  したが、単語自体はユーザー指定のため対応不要と判断(exactMatchの謎解き
  側は完全一致のため誤って解錠されることはない)。世界観・keywords重複無し・
  絶対パス無し・2階層ルール・コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(305件) / build: ✓
- 次回予定: P91「最初の記憶」の合言葉候補(現在ラテン語『MEMORIA』
  『VERITAS』『ORIGO』)を自然な日本語の候補語に作り直す。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 10:31
- タスク選定: `### 13`(隠し用語集ページ群)から、前回予告どおりP91「最初の記憶」
  の作り直し(M)に着手。これでP5〜P8・P91の既存ARGページ作り直しタスクが
  全て完了する節目のサイクル。
- 実装: P5(対応表方式)・P7(位置・配置方式)のいずれとも異なる「選択・消去
  方式」を採用。`nostion-memory.html`に3段落目を追加し、ノスティオンの古名
  候補として『MEMORIA』『VERITAS』『ORIGO』の3つを提示。前段落までに語られた
  事実(創立時の記録が一切無い/常に大図書館にいて他所から運ばれた形跡が無い)
  と矛盾する2候補を本文中の記述で自然に消去でき、矛盾のない「ORIGO」だけが
  残る構成にした(答えを直接書かず、候補+矛盾点だけを提示)。断片F13の獲得を
  単純訪問での自動獲得(`src/nostion-memory.js`、削除)から、「ORIGO」を検索
  して新設ページ`glossary/origo-echo.html`(`src/origo-echo.js`)に到達する
  形に変更。ノスティオン自身への自己言及という入口(検索欄への「私」
  「ノスティオン」の入力)は変更なし。`exactMatch: true`設定・
  `docs/ARG-DESIGN.md`4-3節のP91行を更新。ROADMAP.mdの「既存ARGページの
  作り直し」ブロックを完了扱いにして圧縮。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。P5・P7とは
  構造的に異なるギミックか、候補の矛盾づけが実際に一意に解けるか(MEMORIA/
  VERITASがそれぞれ前段落の記述と矛盾し、ORIGOのみ矛盾なく残る)を重点確認。
  削除した`src/nostion-memory.js`への参照が他に残っていないことも確認
  (履歴ファイル内の過去ログ以外に参照なし)。世界観・keywords重複無し・
  絶対パス無し・2階層ルール・コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(305件) / build: ✓
- 次回予定: `### 15`(ARG基盤・ノスティオン)の残タスク(「学院の秘密」欄の
  ツリー構造化、「手にした断片」欄へのギミック元ページ記録)。それが済み次第、
  `docs/ARG-DESIGN.md`4節の「未着手」P番号ページの新規実装に戻れる。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 09:30
- タスク選定: `### 13`(隠し用語集ページ群)から、前回予告どおりP7「記録帳、
  最後の頁」の謎解き再修正(M)に着手。
- 実装: P5と同じ「記号→文字の対応表」方式は使わず、位置・配置方式(頭文字
  抽出/アクロスティック)を採用。P6(`first-astronomer.html`)に新項目
  「観測日誌、書き出しの癖」を追加し、毎晩の書き出しに使う4つの定型句
  (もっとも/どの夜も/りんとした/ばらばらだった)を列挙。P7
  (`final-entry.html`)側の符丁は「・」の数(一つ目〜四つ目という位置指定)
  のみを示し、答えの文字そのものは書かない形に変更(答えを本文に直接書いて
  いた不具合を修正)。答えをひらがな「もどりば」からローマ字「MODORIBA」に
  変更し、`return-mark.html`(タイトル含む)・`src/return-mark.js`・
  `src/search-data.js`(exactMatch: true設定含む)を合わせて更新。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。P5と
  構造的に異なるギミック(対応表ではなく頭文字抽出)になっているか、
  パズルとして実際に解けるか(P6の4行→もどりば→MODORIBAの導出手順)を
  重点確認。世界観・keywords重複無し・絶対パス無し・2階層ルール・
  コアカラーのみもあわせて確認、指摘なし。
- lint: ✓ / lint:css: ✓ / test: ✓(301件) / build: ✓
- 次回予定: P91「最初の記憶」の作り直し(P5の対応表方式・P7の位置・配置方式
  いずれとも異なるギミックを選ぶ。数値・計算方式/選択・消去方式/記号→記号
  方式などから検討)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 08:53
- タスク選定: `### 13`(隠し用語集ページ群)から、優先度の高い順に(1)謎解きの
  合言葉を完全一致で判定する仕組み(S)、(2)P5「見習い整備士の手記」の謎解き
  再修正(M)の2件をまとめて着手。両者は「exactMatchをP5に設定する」で
  直接つながっているため同サイクルにまとめた。
- 実装:
  - `src/logic.js`の`filterSearchIndex`・`src/search.js`の`filterIndex`に
    `entry.exactMatch`対応を追加(true時のみtitle/category/keywordsの完全一致、
    通常は従来通り部分一致)。`docs/ARG-DESIGN.md`2-1節・`src/search-data.js`の
    フィールド説明コメントに追記。
  - P5の謎解きを作り直し: P2(`perpetual-motion.html`)に新項目「フィンレー式
    記譜法」を追加し、四大元素になぞらえた錬金術記号(🜂🜄🜃🜁)と読み
    (HA/GU/RU/MA)の対応表を提示。P5(`apprentice-notes.html`)側は記号のみを
    提示し読みは書かない形に変更(答えを本文に直接書いていた不具合を修正)。
    答えをひらがな「はぐるま」からローマ字「HAGURUMA」に変更し、
    `gear-cipher.html`・`src/gear-cipher.js`・`src/search-data.js`
    (`exactMatch: true`設定含む)を合わせて更新。
- レビュー: local-review skillを実行(手順に沿って自己レビュー)。世界観
  (コアカラーのみ・記号は錬金術モチーフで単純図形回避)・keywords重複無し・
  ヘッダー/フッターのプレースホルダー・絶対パス無し・2階層ルールを確認。
  exactMatchはtitleの完全一致でも解錠される既存挙動(P5に限らず全隠しページ
  共通の仕様)を確認したが、今回の変更による新規の不具合ではなく、
  ARG-DESIGN.md 2-1節に既述の仕様通りのため対応不要と判断。
- lint: ✓ / lint:css: ✓ / test: ✓(301件、+3) / build: ✓
- 次回予定: P7「記録帳、最後の頁」の謎解き再修正(P5と同じ「記号→文字」方式は
  使わない別方式を検討)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 07:27
- ブランチ: evolve/cycle-30は未マージのため継続(前サイクルの未pushコミット1件
  も含めてまとめてpush)。
- タスク選定: `### 13`の作り直しタスクからP8(名を消された決闘王)に着手。
- 実装: 項目を1個から3個に増やした(魔封石の欠片[グループC「魔封石保管庫」と
  関連づけ]、決闘規定法典の一文[名前消去が学院長の正式決裁だったことを示す])。
  断片を産出しないページのため謎解き対応は不要。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要。実ブラウザで表示確認済み)
- lint: ✓ / lint:css: ✓ / test: ✓(298件) / build: ✓
- 次回予定: P91「最初の記憶」の作り直し(作り直しタスクの最後の1件)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 06:28
- ブランチ: evolve/cycle-30は未マージのため継続。
- タスク選定: `### 13`の作り直しタスクからP7(記録帳、最後の頁)に着手。
- 実装: 既存の2段落に2段落追加(符牒の謎解き「もどりば」・発見場所の詳細)。
  断片F2の獲得を単純訪問から謎解き必須に変更。新規ページ
  `pages/glossary/return-mark.html`を新設し、暗号を解いて「もどりば」を
  検索しないと到達できないようにした。「もどりば」の正体は明かさず
  将来への伏線として残した。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要。Playwrightで謎解きゲーティング・断片獲得の一連の流れを
  実ブラウザで確認)
- lint: ✓ / lint:css: ✓ / test: ✓(298件) / build: ✓
- 次回予定: P8「名を消された決闘王」の作り直し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 05:27
- ブランチ: evolve/cycle-30は未マージのため継続。
- タスク選定: `### 13`の作り直しタスクからP6(初代天文官 シベル・オーレン)
  に着手。
- 実装: 項目を1個から3個に増やした(着任の経緯[第2代学長フローラ・
  シルヴァーンが招聘]、立体天球儀の初代[非公開倉庫に保管、グループC
  モチーフの反復])。あわせて、オーレンの着任時期(創立15年後)と
  observatory.htmlの天文台建設時期(創立50年後)が矛盾していた既存の
  不整合を発見・修正した。断片を産出しないページのため謎解き対応は不要。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要。実ブラウザで表示確認済み)
- lint: ✓ / lint:css: ✓ / test: ✓(294件) / build: ✓
- 次回予定: P7「記録帳、最後の頁」の作り直し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 04:30
- ブランチ: evolve/cycle-30は未マージのため継続。
- タスク選定: `### 13`の作り直しタスクからP5(見習い整備士の手記)に着手。
- 実装: 項目を1個から3個に増やし(手記本体・歯車型暗号「はぐるま」・
  予備歯車庫との関連づけflavor)、断片F1の獲得を単純訪問から謎解き必須に
  変更。新規ページ`pages/glossary/gear-cipher.html`を新設し、暗号を解いて
  「はぐるま」を検索しないと到達できないようにした。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要。Playwrightで謎解きゲーティング・断片獲得の一連の流れを
  実ブラウザで確認)
- lint: ✓ / lint:css: ✓ / test: ✓(294件) / build: ✓
- 次回予定: P6「初代天文官 シベル・オーレン」の作り直し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 03:27
- ブランチ: evolve/cycle-30は未マージのため継続。
- タスク選定: `### 13`の最後のタスク、語彙候補のグルーピング作業に着手。
- 実装: `docs/ARG-WORDBANK.md`の候補群(約55件)を横断的に見直し、8グループに
  整理(A「刻」三部作、B記録簿モチーフ、C立入禁止・非公開区画[6件、
  root→flavor連鎖が最適]、D天文台の2人の学長級人物、Eキャンパスの外側、
  F異次元・精霊との接触、G月草/月光草の混同ネタ[謎解き必須方針との相性
  良好]、Hアルノルド卿にまつわる物証)。P番号の割り当てはまだ行わず、
  実装着手時まで見送り。
- レビュー: スキップ(ドキュメントのみの変更のため)。
- lint: ✓ / lint:css: ✓ / test: ✓(290件) / build: ✓
- 次回予定: `docs/ARG-DESIGN.md`4節の「未着手」P番号ページの実装(root優先
  方針、今回のグルーピング結果から選ぶ)、またはP5〜P8・P91の作り直しタスク。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 02:29
- ブランチ: evolve/cycle-29はPR #34でmain取り込み・削除済みを確認。
  main pull後、evolve/cycle-30を新規作成。
- 前提: バグ修正セクションの解消済み項目(大魔法陣の直径不一致)が
  origin/mainへの取り込み・news反映を確認できたため、docs/roadmap-done.mdへ退避。
- タスク選定: `### 13`の語彙棚卸し再確認タスクから最後の1分類(購買部)を実施。
- 実装: `shop/`全20ページを改めて読み直し、`docs/ARG-WORDBANK.md`に8件を追記
  (魔法資質証明証・北方雲海等キャンパス外の存在を示す記述・七代続く写本師
  一族・第二代学院長の現存する書簡・学院湿地区画・「地下の魔法陣接続部」・
  異次元存在等)。これで8分類全ての一次〜再確認が完了。
- レビュー: スキップ(ドキュメントのみの変更のため)。
- lint: ✓ / lint:css: ✓ / test: ✓(290件) / build: ✓
- 次回予定: `docs/ARG-WORDBANK.md`の候補群を横断的に見直すグルーピング作業
  (`### 13`のMタスク)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 01:29
- ブランチ: evolve/cycle-29は未マージのため継続。
- タスク選定: バグ修正セクションの唯一の項目(大魔法陣の直径不一致)に着手。
  あわせて`### 13`の語彙棚卸し再確認タスクから学院内探索・学院祭の2件を実施
  (学院祭は手動チャットで既読了だったためstatus更新のみ)。
- 実装: `pages/index.html`の大魔法陣の直径を20m→30mに修正し
  `exploration/summoning-plaza.html`と統一。`exploration/`全7ページ
  (alchemy-tower・airship-dock・clock-tower・grand-library・dueling-ground・
  observatory、summoning-plazaは前サイクル確認済み)を読み直し、
  `docs/ARG-WORDBANK.md`に10件を追記。「立入禁止・一般非公開の保管庫」が
  ほぼ全エリアに存在するという学院共通モチーフを発見。
- レビュー: OK(バグ修正は1行のテキスト修正のみで影響範囲は限定的。
  ドキュメント変更は該当なし)
- lint: ✓ / lint:css: ✓ / test: ✓(290件) / build: ✓
- 次回予定: `### 13`残り1分類(購買部の再確認)、または語彙のグルーピング作業。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-29 00:29
- ブランチ: evolve/cycle-29は未マージのため継続(前サイクルのコミット1件が
  未pushだったため、このサイクルの成果とまとめてpush)。
- タスク選定: `### 4`・`### 12`は素材未着でスキップを再確認。`### 13`の
  語彙棚卸しタスク(8分類)のうち、小規模な5分類(トップ・学食の残り2ページ・
  入学願書・学院への道のり・学院案内)をまとめて実施。
- 実装: 5ページ/分類を読み直し、`docs/ARG-WORDBANK.md`に結果を記載。
  トップページから「アルノルド卿直系」の魔導機械科・「魔法陣転移広場」等の
  候補を発見。入学願書・学院への道のり・学院案内の3分類は実用情報中心で
  候補が薄いことを確認(「候補なし」も成果として明記)。副産物として、中庭の
  大魔法陣の直径がindex.html(20m)とsummoning-plaza.html(30m)で食い違って
  いる既存バグを発見し、バグ修正セクションに追記した。
- レビュー: スキップ(ドキュメントのみの変更のため、コード面のレビュー観点は
  該当なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(290件) / build: ✓
- 次回予定: `### 13`残り3分類(学院内探索・学院祭・購買部)の再確認、または
  バグ修正(大魔法陣の直径表記統一)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 22:29
- ブランチ: evolve/cycle-29は未マージのため継続。
- タスク選定: `### 4`・`### 12`は素材未着でスキップを再確認。`### 13`の常設
  タスクからP7(fragment、P6経由)・P8(flavor、P4経由)の2件をまとめて実施
  (いずれも既実装ページから直接辿れるため依存順序上問題なし)。
- 実装:
  1. P7: P6の「観測記録帳」から辿り着く`pages/glossary/final-entry.html`
     (記録帳、最後の頁)。オーレンが「89番目の星」を見た夜を最後に記録が
     途切れるという伏線(スポイラーセーフ)。断片F2(記帳の断片)を獲得。
  2. P8: P4の独り言「さらに古い時代の決闘王」から辿り着く
     `pages/glossary/erased-champion.html`(名を消された決闘王)。P4最古参
     よりさらに古い、勝者名だけが消された決闘記録。断片なし。
  実装時、P8の年代表記に矛盾する二重の時間軸表現(「約90年前」と「学院創立
  から約90年後」の混在)を書いてしまい、レビュー前に自己点検で発見・修正した。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要。Playwrightで両ページのゲーティング・断片獲得・遷移を
  実ブラウザで確認)
- lint: ✓ / lint:css: ✓ / test: ✓(290件) / build: ✓
- 次回予定: `docs/ARG-DESIGN.md`4-1節が全行実装済みとなったため、次回は
  4-2節「通常ページ発の新規ルート群」(P10〜、たどり着き方が「通常ページ
  (未定)」のroot行)から、実際のサイト本文を棚卸しして着手する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 21:29
- ブランチ: evolve/cycle-29は未マージのため継続。
- タスク選定: `### 4`(商品アイコン)・`### 12`(ナレーション音声)は素材未着で
  スキップを再確認。`### 13`の常設タスクからP6(flavor、P1・P3から到達)を選定。
- 実装: `docs/ARG-DESIGN.md`のP6を実装。P1(魔法生物図鑑)のルミナ「初報告」欄と
  P3(星図の断片)のヒーロー導入文に、共通の人物名「初代天文官シベル・オーレン」
  を軽微な追記で接続(既存設定は変更せず属性情報を1件追加)。新規隠しページ
  `pages/glossary/first-astronomer.html`を新設。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要。Playwrightで、P1のみ訪問・P3のみ訪問のどちらの経路でも
  OR判定によりP6が解禁されることを確認)
- lint: ✓ / lint:css: ✓ / test: ✓(282件) / build: ✓
- 次回予定: `docs/ARG-DESIGN.md`4節の次の未着手P番号(P7かP8)。P7はP6実装済みに
  より着手可能に、P8はP4(実装済み)から直接到達可能。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 20:29
- ブランチ: evolve/cycle-28はPR #33でmain取り込み・削除済みを確認。
  main pull後、evolve/cycle-29を新規作成。
- タスク選定: `### 15`が完了したため`### 13`の2タスクが着手可能に。
  (1) P1〜P4へのkeywords追加、(2) ARG-DESIGN.md未着手P番号ページの実装、
  の2件をまとめて実施。
- 実装:
  1. P1(魔法生物図鑑)にホーホー/カチカチ/ルミナ、P2(永久運動術式)に
     フィンレー、P3(星図の断片)に星座紋解析台、P4(決闘王列伝)に
     第三閃光戦をkeywordsとして追加。
  2. P5(fragment、F1産出)を実装。P2の既存の独り言「修繕工房には…研究し
     続ける学生」から辿り着く新規隠しページ`pages/glossary/apprentice-notes.html`
     (見習い整備士の手記)を新設し、断片F1(刻の断片)の獲得を
     `src/apprentice-notes.js`で行うようにした。既存本文の改変なし。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  画像アセット不要のテキストページ。Playwrightで、P2未訪問時は検索
  ゲーティングにより非表示・P2訪問後はヒット→クリック→遷移→断片獲得の
  一連の流れを実ブラウザで確認)
- lint: ✓ / lint:css: ✓ / test: ✓(278件) / build: ✓
- 次回予定: `docs/ARG-DESIGN.md`4節の次の未着手P番号(P6かP8、いずれもP1/P3/P4
  という既実装rootから辿れるためすぐ着手可能)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 19:34
- ブランチ: evolve/cycle-27はPR #32でmain取り込み・削除済みを確認。
  main pull後、evolve/cycle-28を新規作成。
- 前提: バグ修正セクションの解消済み項目(ノスティオンの記録欄のbfcache不具合)が
  origin/mainへの取り込み・news反映を確認できたため、docs/roadmap-done.mdへ退避。
- タスク選定: 「現在進行中のページの未完了サブタスク」の優先順で確認したところ、
  `### 4`(商品アイコン)・`### 12`(ナレーション音声)はいずれも素材到着待ちで
  スキップ、`### 13`の2タスクは`### 15`の土台整備完了待ちのためスキップ。
  `### 15`(ARG基盤・ノスティオン)の唯一の未完了タスク=P91応答方式の変更に着手。
- 実装: `src/search.js`の自己言及応答(インラインテキスト)を廃止し、通常の
  検索結果と同じクリック可能なカードとして表示、専用の隠しページ
  `pages/glossary/nostion-memory.html`(新設、.origin-storyレイアウト)へ遷移する
  形に変更。断片F13の獲得を`src/nostion-memory.js`(新設)に分離し、達成マーカー
  文字列を廃止して実ページpathで「記録」欄の解禁条件を判定するよう簡素化。
  不要になったCSS(`.search-result--codex`等)を削除。`docs/ARG-DESIGN.md`の
  P91行を更新。`### 15`の全サブタスクが完了したためstatusを`完了`に戻した。
- レビュー: OK(コアカラーのみ使用、絶対パスなし、3階層目のページ新設なし、
  ビジュアルアセット不要、Playwrightで検索→クリック→遷移→断片獲得→記録欄反映
  の一連の流れを実ブラウザで確認)
- lint: ✓ / lint:css: ✓ / test: ✓(274件) / build: ✓
- 次回予定: `### 15`完了により`### 13`のP1〜P4へのkeywords追加タスクに着手可能。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 18:32
- ブランチ: evolve/cycle-26はPR #31でmain取り込み・削除済みを確認。
  main pull後、evolve/cycle-27を新規作成。
- 前提: 手動チャットで実施済み・テスト済みだった以下の変更を1コミット目として
  含めた(evolveサイクル自体の選定タスクではない、既存の承認済み作業の反映):
  - キャラクター名を「コデックス」から「ノスティオン」へ改名(検索ページ・
    ナビ・自己言及ギミック・ARG-DESIGN.md含め全面更新)
  - 隠しページ4つ(魔法生物図鑑・永久運動術式・星図の断片・決闘王列伝)末尾の
    意味深な一文を「ノスティオンの独り言」ラベル付き演出に変更
  - CLAUDE.mdに手動チャットでの実装方針・返答言語の方針を追記
- タスク選定: 「バグ修正(最優先)」セクションの唯一の項目(ノスティオンの
  記録欄がbfcache経由の戻る操作で更新されない不具合)に着手。
- 実装: `src/search.js`に`pageshow`イベント(`event.persisted`)のリスナーを
  追加し、bfcache復元時に記録欄(`renderMemorySection()`)を再描画するように
  修正。
- 検証: ヘッドレスChromium(Playwright)では`goBack()`がbfcacheを使わず
  スクリプトごと再実行される挙動だったため、有り無しの自動比較テストでは
  差分を確認できなかった(`window.__marker`が復元後に消えていることから
  再実行を確認)。`pageshow`/`event.persisted`は本バグの標準的な対処
  パターンであるため、コードレベルの妥当性を確認した上で採用。
- レビュー: OK(コアカラー変更なし、絶対パスなし、3階層目のページ新設なし、
  アセット依頼漏れなし)
- lint: ✓ / lint:css: ✓ / test: ✓(271件) / build: ✓
- 次回予定: `### 13`のP1〜P4への`keywords`追加、または`docs/ARG-DESIGN.md`
  4節の「未着手」P番号ページの実装。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 17:33
- ブランチ: evolve/cycle-26 は未マージのため継続。
- タスク選定: `### 15`(ARG基盤・コデックス)の残り3タスク(コデックスへの改名・
  P91・記録表示)。前サイクルの検索基盤(keywords対応・進捗保持・ゲーティング)の
  上に積む形で、依存順どおりまとめて実装。
- 実装:
  1. コデックスへの改名: `pages/search.html`のtitle/見出し・
     `partials/header.html`のナビ表示名を「検索」から「物知りの魔導書
     『コデックス』」に変更(URLは維持)。一人称の誘導文を追加。
  2. P91(コデックス自身への自己言及): 「私」「コデックス」を含む検索語に
     反応する特別応答を実装し、断片F13(個別名「本心の断片」)を獲得できる
     ようにした。`src/fragment-names.js`を新設(断片ID→個別名の対応表、
     今後の断片産出ページ実装時に追記していく運用)。
  3. コデックスの記録表示: P91達成後にのみ表示される「これまでの記録」
     セクションを実装(「学院の秘密」の分母付き件数表示、「手にした断片」の
     個別名一覧)。
  これで`### 15`の全6タスクが完了し、statusを`完了`に更新。
  Playwrightで一連の動作(初回非表示→自己言及→表示切替→リロード後の永続化→
  通常検索への非干渉)を実ブラウザで確認済み。
- レビュー: local-review実施。指摘0件(今回の変更が原因の不具合は無し)。
  レビュー後、自発的に`docs/ARG-DESIGN.md`へ「私」「コデックス」を今後の
  P番号ページの命名に使わないよう注意書きを追記(将来の衝突予防)。
- lint: ✓ / lint:css: ✓ / test: ✓(271件) / build: ✓
- 次回予定: `### 15`が完了したため、次は`### 13`のP番号ページ本体
  (`docs/ARG-DESIGN.md`4節の表)に着手する。まずはP1〜P4への`keywords`追加
  (ホーホー・フィンレー等)が優先度順で先頭。
- blocked / partial: なし
- asset-pending: なし(新しい視覚要素なし)

## 2026-07-28 16:50
- ブランチ: evolve/cycle-26 は未マージのため継続。前サイクルはユーザーとの
  ARG設計対話セッション(docs/ARG-DESIGN.md新設等、docsのみのcommit)だったため、
  今回が設計後初の実装サイクル。
- タスク選定: `### 15`(ARG基盤・コデックス)が`### 13`のP番号実装より最優先の
  ため、6タスク中の最初の3つ(複数キーワード対応・進捗の保持・検索ゲーティング、
  いずれも検索基盤として密接に関連)をまとめて着手。
- 実装:
  1. 複数キーワード対応: `src/logic.js`の`filterSearchIndex`と`src/search.js`の
     `filterIndex`を`keywords`配列も対象にした部分一致に拡張。重複検出テスト
     `tests/search-data-consistency.test.js`を新設(`vm`モジュールで
     `window.SEARCH_INDEX`のグローバル代入を読み込む方式)。
  2. 進捗の保持: `src/logic.js`に`addSecretToProgress`・`addFragmentToProgress`・
     `markFragmentUsed`を純粋関数として実装。`src/codex-progress.js`を新設し
     `localStorage`(キー`codex-memory`)への実読み書きを担当。`data-page-path`
     属性で宣言したページを自動的に「学院の秘密」へ記録する設計にし、既存の
     隠しページ4件と`pages/search.html`に読み込みタグを追加。
  3. 検索ゲーティング: `src/logic.js`に`isSearchEntryUnlocked`、`src/search.js`に
     `window.CodexProgress`経由で同じ判定を行う`isUnlocked`を実装し、検索結果に
     フィルタとして適用。`CodexProgress`未読み込み時はフェイルオープン
     (常に表示)。
  Playwrightで実ブラウザ動作を確認(訪問時の自動記録・再訪時の重複防止・
  search.html側での読み取り専用動作・既存の通常検索への非破壊を確認)。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(266件) / build: ✓
- 次回予定: `### 15`残り3タスク(コデックスへの改名・P91・記録表示)。改名が
  P91の前提のため、改名から着手する見込み。
- blocked / partial: なし
- asset-pending: なし(新しい視覚要素なし)

## 2026-07-28 13:20
- ブランチ: evolve/cycle-25 が origin/main に自動マージ済みを確認、main を
  最新化して evolve/cycle-26 を新規作成。
- タスク選定: ### 4/### 12は素材到着待ちを再確認(変化なし)。### 13の承認済み
  候補は前サイクルまでに実装済みで「今後のタスク候補」欄も空だったため、
  既存実装を見直し新規タスク案を3件追加(次回開催日カウントダウン・印刷スタイル
  拡充・検索キーボードショートカット)。ただし「検索結果の隠しページ発見ヒント
  表示」は### 13の未決事項そのものの解消にあたるため、候補欄ではなく### 13へ
  直接サブタスクとして追記し、このサイクルで着手した。
- 実装: `src/search-data.js`の隠しページ4件に`hidden: true`を追加し、
  `src/search.js`の描画処理で該当エントリにのみ「✦ 発見」バッジ(淡い発光、
  pulseなしの静的表示)を付与。Playwrightで隠しページのみバッジが表示される
  ことを確認。### 13の「未決事項」を解消済みとして更新。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(230件) / build: ✓
- 次回予定: 「今後のタスク候補」に残る3件(次回開催日カウントダウン・印刷
  スタイル拡充・検索キーボードショートカット)から次を選定。### 4/### 12は
  引き続き素材待ち。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 12:19
- ブランチ: evolve/cycle-25 は未マージのため継続。
- タスク選定: ### 13の承認済み候補はすべて実装済みとなったため、次の優先順位
  「未着手ページの最初のサブタスク」に進み、### 14(提携宿泊施設、ユーザー承認済み)
  に着手。### 4/### 12(ナレーション)は引き続き素材到着待ちを再確認。
- 実装: `pages/access/lodging.html`(depth-1)を新設。学院前旅籠「銀時計亭」・
  魔法街道ステーションホテル・郊外リゾート「星降る丘コテージ」の3施設に、
  客室タイプ・設備・提携特典・ご予約方法の詳細を追加(既存の`access/index.html`
  カードは名称・距離・一行説明のみだった)。画像+テキストの横並び
  メディアオブジェクトを採用し、既存の縦積みヒーローバナー系レイアウトとは
  変化をつけた。ヒーロービジュアルは新規依頼せず、`access/index.html`の各カード
  で既に使われている実画像(`assets/images/access/lodging-*.jpg`)を再利用。
  `access/index.html`の各カードに詳細ページへの「客室・設備の詳細を見る →」
  リンクを追加。`pages/sitemap.html`「その他のご案内」・`src/search-data.js`にも
  通常ページとして登録(隠しページとは異なり発見しやすい位置)。全サブタスクが
  完了したため、### 14のstatusを`完了`に更新し紹介文を追記。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(230件) / build: ✓
- 次回予定: ### 4/### 12(ナレーション)は引き続き素材待ちで進行不可。
  「今後のタスク候補」欄が空のため、次サイクルで既存実装を見直し新規タスク案を
  3〜5個追加する予定。
- blocked / partial: なし
- asset-pending: なし(既存画像を再利用したため新規依頼なし)

## 2026-07-28 11:18
- ブランチ: evolve/cycle-25 は未マージのため継続。
- タスク選定: ### 13の承認済み候補、優先度順4番目(最後)「歴代決闘王」に着手。
  ### 4/### 12(ナレーション)は引き続き素材到着待ちを再確認。
- 実装: `pages/glossary/dueling-champions.html`(決闘王列伝)を新設(隠しページ)。
  歴代決闘王5名を年表形式で紹介。伝説の一戦「第三閃光戦」
  (`exploration/dueling-ground.html`既出)の勝者を最古の代(56年前)として矛盾なく
  組み込み、他4名は新規に書き下ろした。資料アーカイブ・星図断片とも異なる
  年表レイアウト(`.champion-timeline`、縦線+ドット)を新設し、決闘演武場向けに
  承認済みの`--crimson`をアクセント色に使用。既存ページの言及箇所は変更せず、
  `src/search-data.js`・`pages/sitemap.html`に隠しページ登録。
  これで承認済み候補2〜4はすべて実装完了。
- レビュー: local-review実施。指摘0件(前サイクルのaria-hidden誤用を教訓に、
  実内容を含む要素には付けず、装飾のみの`::before`は空contentのままにした)。
- lint: ✓ / lint:css: ✓ / test: ✓(226件) / build: ✓
- 次回予定: ### 13の承認済み候補はすべて実装済み(今後は候補5以降が承認され
  次第対応)。次は### 14(提携宿泊施設、未着手)に着手予定。### 4/### 12
  (ナレーション)は引き続き素材待ち。
- blocked / partial: なし
- asset-pending: なし(画像を使わない設計のため新規依頼なし)

## 2026-07-28 10:18
- ブランチ: evolve/cycle-25 は未マージのため継続。
- タスク選定: ### 13の承認済み候補、優先度順3番目「魔導88星座」に着手。
  ### 4/### 12(ナレーション)は引き続き素材到着待ちを再確認。
- 実装: `pages/glossary/starmap-fragments.html`(星図の断片)を新設(隠しページ)。
  88星座のうち5座(鍵持ち座・硝子瓶座・振り子座・双光蛾座・忘れ潮座)にカタログ
  番号+短い逸話を付けて紹介。前サイクルの資料アーカイブ形式(`.archive-entry`)
  とはあえてレイアウトを変え、索引カード風の`.fragment-entry`を新設(単調な
  繰り返しを避ける「レイアウト多様化」方針に沿う)。天文台向けに承認済みの
  `--azure`をアクセント色に使用。`exploration/observatory.html`の既存言及は
  変更せず、`src/search-data.js`・`pages/sitemap.html`に隠しページ登録。
- レビュー: local-review実施。指摘1件対応(カタログ番号`第07番`等に
  `aria-hidden="true"`が付いており、装飾ではなく実内容(88座中の通し番号)
  なのにスクリーンリーダーから読み上げられなくなっていたのを削除して修正)。
- lint: ✓ / lint:css: ✓ / test: ✓(223件) / build: ✓
- 次回予定: ### 13候補4「歴代決闘王」に着手予定。### 4/### 12(ナレーション)は
  引き続き素材待ち。### 14(提携宿泊施設)も未着手のまま残っている。
- blocked / partial: なし
- asset-pending: なし(画像を使わない設計のため新規依頼なし)

## 2026-07-28 09:19
- ブランチ: evolve/cycle-25 は未マージのため継続。
- タスク選定: ユーザーが候補2〜4(永久運動術式・魔導88星座・歴代決闘王)を
  一括承認済みのため、### 13(進行中ページ)の未完了サブタスクとして優先度順
  (2→3→4)の1件目「永久運動術式」に着手。### 4/### 12(ナレーション)は
  引き続き素材到着待ちを再確認。
- 実装: `pages/glossary/perpetual-motion.html`を新設(隠しページ、ヘッダーナビ・
  サイトマップには非掲載)。考案者グラハム・フィンレーの人物像と、永久運動術式
  (魔力を消費せず循環させる原理)の2エントリで構成。`exploration/clock-tower.html`
  の既存言及は変更せず。画像アセットの無いテキスト中心の資料ページのため、
  glossary.cssに新規`.archive-entry`ブロックを追加し、歯車グリフの緩やかな回転
  (index.cssのornament-gearと同じ9s周期)で装飾。`src/search-data.js`・
  `pages/sitemap.html`に隠しページ登録+除外コメントを追記。
- レビュー: local-review実施。指摘1件対応(装飾グリフを`::before`直書きから
  `aria-hidden`付きspanに変更し、スクリーンリーダーへの読み上げを防止)。
- lint: ✓ / lint:css: ✓ / test: ✓(220件) / build: ✓
- 次回予定: ### 13候補3「魔導88星座」に着手予定。### 4/### 12(ナレーション)は
  引き続き素材到着待ち。### 14(提携宿泊施設)も未着手のまま残っている。
- blocked / partial: なし
- asset-pending: なし(このページは画像を使わない設計のため新規依頼なし)

## 2026-07-28 08:17
- ブランチ: evolve/cycle-25 は未マージのため継続。
- タスク選定: ### 4(購買部)・### 12(ナレーション)・### 13(隠しページ候補2〜4)は
  素材到着・承認とも未到着で進行不可を再確認。`aria-expanded`を横断grepし、
  同種の「アコーディオン開閉が無演出」の穴を学院祭・行事の詳細展開パネル
  (`.event-card__panel`)にも発見(トリガーアイコンの回転のみ実装済みで、
  パネル自体には動きが無かった)。
- 実装: `.event-card.is-open .event-card__panel`に`event-panel-engage`
  (回転+ズレの噛み合いから正位置に収まる動き)をevents.cssに追加。絞り込み
  表示用の`event-card-engage`とは別要素・別トリガーのため独立したキーフレーム
  として追加し、干渉しないようにした。scaleは使わず、既存の
  prefers-reduced-motionブロックにまとめて追加。新規アセット依頼は不要。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(216件) / build: ✓
- 次回予定: ### 4/### 12(ナレーション)/### 13(候補2〜4)は引き続き素材・承認
  待ち。`aria-expanded`要素は一通り確認し尽くしたため、次回は他の観点
  (hover-onlyのリンクカード等)で無演出箇所が残っていないか確認する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 07:17
- ブランチ: evolve/cycle-25 は未マージのため継続。
- タスク選定: ### 4(購買部)・### 12(ナレーション)・### 13(隠しページ候補2〜4)は
  素材到着・承認とも未到着で進行不可を再確認(REQ-058〜067・REQ-069・
  REQ-070〜072いずれも未着荷)。既存の完了ページを調査し、前サイクルの
  `.attraction-item__panel`と全く同じ「アコーディオン開閉が無演出」の穴を
  入学願書・学院案内の`.qa-panel`にも発見(tickets.css/guide.css、
  `src/guide-qa.js`共有)。
- 実装: `.qa-item.is-open .qa-panel`に`qa-panel-engage`(回転+ズレの
  噛み合いから正位置に収まる動き)をtickets.css・guide.css両方に追加。
  scaleは使わず、prefers-reduced-motion時は停止。新規アセット依頼は不要。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(216件) / build: ✓
- 次回予定: ### 4/### 12(ナレーション)/### 13(候補2〜4)は引き続き素材・承認
  待ち。他の完了ページにも同種の「無演出アコーディオン/トグル」が残っていないか
  引き続き確認する(shop-page.cssは商品リストが静的でトグル要素自体が無いため、
  演出を足すには新規UI追加が必要になり今回は見送り)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 06:23
- ブランチ: evolve/cycle-24 は origin/main に自動マージ済みを確認、
  main を最新化して evolve/cycle-25 を新規作成。
- タスク選定: ### 4(購買部)・### 12(ナレーション)・### 13(隠しページ候補2〜4)は
  いずれも素材到着待ち・承認待ちで進行不可(REQ-058〜067・REQ-070〜072とも
  未着荷を再確認)。既存実装を調査し、### 12「全ページ演出」の範囲でまだ手を
  付けていない2箇所を見つけて着手。
- 実装:
  1. 学院内探索の7エリア詳細ページ(area-page.css共有): 「体験・見どころ」
     アコーディオンの開閉が無演出だったため、購買部・学食と同じ
     engage系の動き(`attraction-panel-engage`)を追加。
  2. 404ページ: 見出し「迷子の魔法陣」に対応する実際のビジュアルが無かったため、
     インラインSVGの魔法陣(円2重+六芒星)を追加し、`pathLength="1"`を使った
     stroke描画の登場演出(`map-area-trace`と同技法)を実装。
  いずれもscaleは使わず、prefers-reduced-motion時はアニメーション停止。
  新規アセット依頼は不要(コード生成のSVG・既存動きの流用のため)。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(216件) / build: ✓
- 次回予定: ### 4/### 12(ナレーション)/### 13(候補2〜4)は引き続き素材到着・
  承認待ち。購買部・学食の店舗詳細ページ(shop-page.css)は現状インタラクション
  要素自体が無く、無理に演出を足すとUI追加になり過剰実装になるため保留。
  次回も資産到着状況を再確認しつつ、同様に「既存要素はあるが演出が抜けている
  箇所」を優先的に探す。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 05:24
- ブランチ: evolve/cycle-24 は未マージのため継続。
- タスク選定: ### 4(購買部)・### 12(ナレーション実装)・### 13(隠しページ候補)は
  いずれも素材到着待ち・承認待ちで進行不可のため、選定順4番目の
  「### 0. 共通パーツ(ヘッダー/フッター)」に着手(worldview-check指摘対応)。
- 実装: `partials/header.html`の「入学願書」ナビリンクに`.site-header__cta`
  クラスを追加し、常時アクセス可能な強調CTAボタンにした。ember色の枠線+背景で
  他のナビ項目と視覚的に区別。ホバー時は塗り反転、入学願書ページ閲覧中は
  塗りつぶし(is-current)。モバイルのハンバーガーメニューにも対応。
  `docs/ROADMAP.md`の「### 0」をstatus完了に更新(紹介文を新規追記)。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(216件) / build: ✓
- Playwrightで実ブラウザ確認: トップ・学院内探索(depth-1)・購買部(depth-1)・
  入学願書自身・隠しページ(glossary)・モバイル展開時の計6パターンでレイアウト
  崩れ無し。console error無し。
  補足: `npx serve`のリダイレクト仕様によりローカルテストサーバー経由では
  is-current判定が効かないケースを発見したが、file://での直接検証で本番相当の
  挙動が正しく動作することを確認(既存active-nav.jsの不具合ではない、対応不要)。
- 次回予定: 購買部REQ-058〜067・ナレーション音声REQ-070〜072の素材到着確認、
  または隠しページ候補2〜4のいずれかの承認確認。ROADMAPが尽きた場合は
  「今後のタスク候補」への新規追加を検討。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 04:21
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 13. 隠し用語集ページ群」の残りサブタスク2件(ユーザー承認済みの
  `pages/glossary/mythical-creatures.html`の新設、検索インデックスへの登録)に
  着手・完了。
  1. `pages/glossary/mythical-creatures.html`(魔法生物図鑑)を新設。「準魔素
     生命体」という新しい世界観設定を定義し、文鎮フクロウ・歯車ネズミ・星兎の
     3体に分類・生息域・初報告(field guide形式のdl)とlore文を書き下ろした。
     歯車ネズミの由来は隠しページ候補2「永久運動術式」に触れる伏線的な
     クロスリファレンスにした
  2. アバター画像はguide/index.htmlと同じ既存3枚(REQ-052〜054)を再利用し
     新規素材は不要。idle bobアニメーションも既存の動きの言語を踏襲
  3. `src/search-data.js`に`category: '図鑑'`で追加。`partials/header.html`の
     ナビ・`pages/sitemap.html`には掲載せず、両ファイルに「意図的な除外」で
     ある旨のコメントを追記
- レビュー: local-review実施。指摘0件。ただし自己チェックでroadmap-consistency
  テストが1件失敗(状態更新用の`- [ ]`行にサイズ記号`(S/M/L)`が無く、パーサーが
  未完了サブタスクとして認識できていなかった)。`(S)`を追加して同じコミットで解消。
- lint: ✓ / lint:css: ✓ / test: ✓(215件) / build: ✓
- Playwrightで実ブラウザ確認: ヘッダーナビにリンクが含まれないこと、
  検索「魔法生物」で正しくヒットすることを確認。console error無し。
- 次回予定: 「### 0」のヘッダーCTA検討、購買部REQ-058〜067の素材到着確認、
  または隠しページ候補2〜4のいずれかの承認確認。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-28 03:20
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 13. 隠し用語集ページ群」の最初のサブタスク(隠しページ候補の
  棚卸し)に着手・完了。コード変更なし、ドキュメントのみ。
  - 全ページ本文中の「」括り固有名詞50件をgrepで抽出し、既に文中で十分説明されて
    いる商品名・メニュー名などを除外して4件の候補を選定
  - 候補: 1.魔法生物(承認済み・第一弾)、2.永久運動術式(exploration/
    clock-tower.html)、3.魔導88星座(exploration/observatory.html)、
    4.歴代決闘王(shop/dueling-shop.html等)。候補2〜4は承認待ちとして扱い、
    実装はしていない
  - `docs/ROADMAP.md`の「### 13」statusを未着手→進行中に更新
- レビュー: local-review実施。指摘0件(ドキュメントのみのため該当なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(212件) / build: ✓
- 次回予定: 魔法生物図鑑(pages/glossary/mythical-creatures.html)の実装、
  または「### 0」のヘッダーCTA検討、購買部REQ-058〜067の素材到着確認。
- blocked / partial: なし
- asset-pending: なし(前サイクルのREQ-069〜072は引き続き依頼中)

## 2026-07-28 02:23
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の最後のサブタスク(ナレーション・
  環境音の土台づくり)に着手・完了。コード変更なし、ドキュメントのみ。
  - トップページ・学院内探索・入学願書の3ページを対象に、Irodori-TTS向けの
    ナレーション台詞を`docs/ASSET_REQUESTS.md`にREQ-070〜072として依頼
    (絵文字感情タグは承認済みリストの範囲内のみ使用)
  - 効果音は現行の3ツール(Midjourney/ChatGPT/Irodori-TTS)では生成に適さない
    ため今回は見送り、ASSET_REQUESTS.mdにその旨を明記
  - 音声実装(再生ボタン設置)は音源到着後の別タスクとして`docs/ROADMAP.md`の
    「### 12」に切り出し、進行中のまま残した(骨格だけで完了にしない方針)
- レビュー: local-review実施。指摘0件(ドキュメントのみのため該当なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- 次回予定: 「### 0」のヘッダーCTA検討、「### 13」の隠しページ候補棚卸し、
  または購買部REQ-058〜067の素材到着確認。
- blocked / partial: なし
- asset-pending: REQ-070〜072(ナレーション音声3件)、REQ-069(店番マスコット)

## 2026-07-28 01:24
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の学院への道のりサブタスクに着手・完了。
  1. `.map-area.is-selected rect`(通常/--centerとも)に、境界線が魔法陣のように
     描画されて現れる`map-area-trace`(stroke-dasharray/stroke-dashoffset、
     scaleは使わない)を追加
  2. `src/campus-map.js`に学院案内ページのマスコット3体(大図書館=ホーホー、
     時計塔=カチカチ、天文台=ルミナ)と対応するエリアのマッピングを追加。
     該当エリア選択時のみパネル上部にアバターと道案内の一言が表示される
     (新規イラストなし、既存画像を再利用)
- レビュー: local-review実施。**指摘1件、その場で修正**。マスコット名が
  自己完結的に「」で囲まれているのに、セリフ側にもJSで「」を追加しており
  二重の括弧が並んで読みにくかった。「：」区切りに変更して解消。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: 大図書館選択時にホーホーのアバター+セリフが表示、
  学食・購買部(マスコット対応なし)選択時は非表示になることを確認。console error無し。
- 次回予定: 「### 12」の最後の1項目(ナレーション・環境音の土台づくり、
  ASSET_REQUESTS.mdへの依頼のみ)。または「### 0」のヘッダーCTA検討、
  「### 13」の隠しページ候補棚卸し。
- blocked / partial: なし
- asset-pending: なし(REQ-069は引き続き依頼中)

## 2026-07-28 00:21
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の入学願書サブタスクに着手・完了。
  1. `src/ticket-sim.js`に`animateTotal()`を追加。合計金額をrAFベースで
     0.4秒かけてカウントアップ表示(ease-out cubic)。着地時にember色の発光
     フラッシュ(`sim-total-settle`)も追加
  2. prefers-reduced-motion時は即座に最終値を表示(アニメーションなし)
- レビュー: local-review実施。**指摘1件、その場で修正**。
  `#sim-result`が`aria-live="polite"`のため、カウントアップの中間値
  (1キー入力あたり最大24回程度の書き換え)がすべて読み上げられてしまう
  アクセシビリティ上の不具合を検出。アニメーション中だけ`aria-live`を`off`にし、
  最終値確定時に`polite`へ戻す修正を同じコミットに含めた。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: カウントアップの中間値推移(¥0→¥2,360→…→¥5,600)、
  家族券セット適用時の計算、aria-live値がアニメーション中"off"→着地時"polite"に
  戻る挙動を確認。console error無し。
- 次回予定: 「### 12」の残り1項目(学院への道のり)。または「### 0」のヘッダーCTA
  検討、「### 13」の隠しページ候補棚卸し。
- blocked / partial: なし
- asset-pending: なし(REQ-069は引き続き依頼中)

## 2026-07-27 23:21
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の学院祭・行事サブタスクに着手・完了
  (HTML変更なし、CSSのみ)。
  1. `.event-filter__btn.is-active`に`event-filter-activate`(小さな魔法陣が
     展開して消えるリング状のbox-shadow)を追加。既存の「浮き上がり」表現の
     静的box-shadowとは異なる展開/収束する発光として設計
  2. `.event-card:not([hidden])`に、既存のtab-panel-engage/area-peek-openと
     同じ「噛み合って正位置に収まる」動きの言語(`event-card-engage`)を追加。
     hidden属性が外れた瞬間のみ再生されるため、フィルタで新たに表示された
     カードだけが動く
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: 季節フィルタ(夏)クリックで8件→2件に絞り込み、
  aria-pressed同期を確認。console error無し。
- 次回予定: 「### 12」の残り2項目(入学願書/学院への道のり)。または「### 0」の
  ヘッダーCTA検討、「### 13」の隠しページ候補棚卸し。
- blocked / partial: なし
- asset-pending: なし(REQ-069は引き続き依頼中)

## 2026-07-27 22:22
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の学食・喫茶室サブタスクに着手・完了
  (HTML変更なし、CSSのみ)。
  1. 人気メニューのクリック開閉自体(`.menu-item__trigger` + `src/dining-menu.js`)
     は既に実装済みだったことを確認。欠けていたのは「動き」だったため、そこに
     焦点を絞って対応
  2. `.dining-tabs .tab-btn.is-active`/`.dining-tabs .tab-panel`に、前サイクルの
     購買部と同じ動きの言語(発光フラッシュ+噛み合い→正位置)を追加
  3. `.menu-item__panel`(中央学食タブ・各エリアの「人気メニュー」プレビュー両方で
     共有)に詳細展開時の`menu-item-panel-engage`を追加
  4. dining.cssはdining/index.html専用ファイルのため他ページへの影響なし
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: タブ切替(aria-selected同期)、人気メニュー詳細展開
  (is-open/hidden同期)ともに正常動作。console error無し。
- 次回予定: 「### 12」の残り3項目(学院祭・行事/入学願書/学院への道のり)、
  または「### 0」のヘッダーCTA検討、「### 13」の隠しページ候補棚卸し。
- blocked / partial: なし
- asset-pending: なし(前サイクルのREQ-069は引き続き依頼中)

## 2026-07-27 21:23
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の購買部サブタスクに着手・完了
  (HTML変更なし、CSSのみ)。
  1. `.tab-btn.is-active`に`tab-lock-in`(text-shadowの一瞬の発光フラッシュ、
     「切り替わった」ことを伝える)を追加
  2. `.tab-panel`に`tab-panel-engage`(既存のarea-peek-open/highlight-card-engage
     と同じ「回転+ズレの噛み合いから正位置に収まる」動き)を追加し、サイト全体で
     一貫した機械的な質感を継続
  3. scope確認: dining.cssは`.dining-tabs .tab-btn`の独立名前空間のため、この
     変更の影響を受けないことを確認(学食・喫茶室は別サブタスクのまま)
  4. 店番キャラクター的な挿絵を検討し、REQ-069として購買部共通の1体を
     ASSET_REQUESTS.mdに依頼(素材到着後に別途配置)
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: タブ切替でaria-selected/hiddenが正しく同期、
  パネル表示が正常。console error無し。
- 次回予定: 「### 12」の残り5項目(学食・喫茶室/学院祭・行事/入学願書/
  学院への道のり/ナレーション・環境音の土台)。または「### 0」のヘッダーCTA検討、
  「### 13」の隠しページ候補棚卸し。
- blocked / partial: なし
- asset-pending: REQ-069(購買部の店番キャラクター、S)

## 2026-07-27 20:22
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」の学院内探索サブタスクに着手・完了。
  1. pages/exploration/index.html の7エリアカードに「見どころをのぞく」トリガー
     ボタンを追加。クリックで2件の見どころ(各エリア詳細ページのattraction-list
     から既存コピーを再利用)が展開する
  2. src/area-peek.js を新設(aria-expanded/aria-controls/hiddenの標準トグル、
     既存のguide-qa.js/mascot-speech.jsと同じ設計)
  3. カードのボーダー装飾を`.area-card__link`から`.area-card`自体に移し、
     `:focus-within`でキーボード操作時もハイライトされるようにした
  4. 展開アニメーション(`area-peek-open`)は、前サイクルのカルーセル修正
     (`highlight-card-engage`)と同じ「回転+ズレの噛み合いから正位置に収まる」
     動きを再利用(scaleは使わない、サイト全体で一貫した質感に)
  5. ボタンは`<a>`の外に独立配置し、クリック展開とページ遷移(既存の主要導線)が
     競合しないようにした
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: 展開トグル(aria-expanded同期)、主要リンクの遷移が
  引き続き正常に機能することを確認。console error無し。
- 次回予定: 「### 12」の残り4項目(購買部/学食・喫茶室/学院祭・行事/入学願書/
  学院への道のり)。または「### 0」のヘッダーCTA検討、「### 13」の隠しページ
  候補棚卸し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 19:25
- ブランチ: evolve/cycle-24 は未マージのため継続。
- 実装: 「### 12. 全ページ演出・体験強化」のトップページサブタスク
  (worldview-check指摘4件)に着手・完了。
  1. `.reveal`のイージングをease-outからexpo-out(opacity)+わずかに
     オーバーシュートして収まるspring風(transform)のcubic-bezierに変更
  2. カルーセルのスライド切り替えを`highlight-fade`(opacityのみ)から
     `highlight-card-engage`(rotate+translateXで噛み合い→正位置に収まる)に変更
  3. カルーセルのアクティブドットの`scale(1.2)`を`dot-glow-pulse`
     (box-shadowの明滅、魔法陣の光点イメージ)に置き換え
  4. nav-cardホバー時のアイコン`scale(1.15)`を`text-shadow: 0 0 8px
     currentcolor`の発光に置き換え(バリアント色に自動追従)
  4項目とも「使わないもの」指定(scale拡大・box-shadowの浮き上がり・fadeのみ)を
  遵守。prefers-reduced-motion時は全て停止/静的フォールバック。
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(211件) / build: ✓
- Playwrightで実ブラウザ確認: nav-cardホバー時のtext-shadow付与、アクティブドットの
  box-shadow、カルーセル「次へ」クリック後の遷移を確認。console error無し。
- 次回予定: 「### 12」の残り5項目(学院内探索/購買部/学食・喫茶室/学院祭・行事/
  入学願書/学院への道のり、いずれもインタラクション+イラスト方針)。または
  「### 0」のヘッダーCTA検討、「### 13」の隠しページ候補棚卸し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 18:25
- ブランチ: evolve/cycle-24 は未マージのため継続。サイクル開始時点で、前回の対話中
  フィードバック対応(歯車の視認性修正+### 12の方向転換)がテスト済みで未コミット
  だったため、まずそれをこのサイクルの一部としてコミット(fd1d8f6)してから
  新規タスクに着手。
- 実装: 「### 12. 全ページ演出・体験強化」で優先繰り上げされた学院案内(魔法生物
  マスコット)に着手。
  1. pages/guide/index.html: `mascot__avatar`を`<div aria-hidden>`から
     `<button aria-expanded aria-controls aria-label>`に変更し、クリックで
     一言セリフ(`mascot__speech`)が開閉するインタラクションを追加(3体分)
  2. src/mascot-speech.js を新設。aria-expanded/hiddenの標準トグル
     (既存のsrc/guide-qa.jsと同じ設計)
  3. styles/guide.css: avatarに常時ゆるやかなbob(上下バウンド)のidle
     アニメーションを追加(3体で位相をずらし同期させない)。speech要素は
     pop-in(fade+scale)で出現。prefers-reduced-motionで両方停止
  4. 商用素材は使わず、既存のマスコット画像(REQ-052〜054)とCSS/JSのみで実装
- レビュー: local-review実施。指摘0件。
- lint: ✓ / lint:css: ✓ / test: ✓(210件) / build: ✓
- Playwrightで実ブラウザ確認: クリックでセリフが開閉、再クリックで閉じる、
  aria-expandedの同期、console error無しを確認(bobアニメーションが常時動くため
  Playwrightのactionability判定にはforce:trueが必要だったが、実利用上は
  問題ない微小な動きであることを確認)。
- 気づいた点(対応不要・報告のみ): `.claude/skills/worldview-check/SKILL.MD`
  という空(0バイト)の未追跡ファイルが作業ツリーに存在していた。今回のコミットには
  含めていない。ユーザーが作業中のものと思われる。
- 次回予定: 「### 12」の残り6項目(学院内探索/購買部/学食・喫茶室/学院祭・行事/
  入学願書/学院への道のり)のいずれか。すべてインタラクション性・イラスト要素を
  含める方針。または「### 13」の隠しページ候補の棚卸し。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 17:25
- ブランチ: evolve/cycle-24 は未マージのため継続。前サイクル終了後、ユーザーから
  隠し用語集ページ(pages/glossary/mythical-creatures.html)の承認と、隠しページを
  複数対象に広げる追加指示があり、docs/ROADMAP.mdの### 13を先行して更新済み
  (このサイクルではコード変更なし、対話内でcommit・push済み)。
- 実装: 「### 12. 全ページ演出・体験強化」の最初のサブタスク(トップページ)に着手。
  1. src/scroll-reveal.js を新設。IntersectionObserverで`.reveal`要素を検知し
     `.is-visible`を付与するスクロール連動fade-in。JS無効時・IntersectionObserver
     非対応時・prefers-reduced-motion時は即座に表示。
  2. pages/index.html の7セクション(about/highlights/nav-cards/seasonal-events/
     ticket-info/access-summary/news)に`.reveal`クラスを付与。
  3. about-section・ticket-info-section の区切り(ornament)に、緩やかに回転する
     歯車グリフ(`.ornament-gear`、Unicode ⚙️、16s周期)を追加(蒸気機械モチーフの
     装飾演出)。ticket-info-sectionには同様のornament要素が無かったため新設。
  4. styles/base.cssの`@media print`に、印刷時は`.reveal`要素を常時表示・歯車の
     回転を停止する上書きを追加(印刷時にスクロール前提の演出で本文が消えるのを防止)。
  5. eslint.config.js に `IntersectionObserver` グローバルを追加。
- レビュー: local-review実施。指摘0件(印刷時の`.reveal`クリッピングは、レビュー前の
  自己チェックで気づいて先に修正済み)。
- lint: ✓ / lint:css: ✓ / test: ✓(210件) / build: ✓
- Playwrightで実ブラウザ確認: 初期表示でabout-sectionが視界内のため即fade-in、
  news-sectionは未スクロール時opacity:0→スクロール到達で1に変化することを確認。
  歯車グリフの回転アニメーション(gear-spin, 16s)も確認。
- ドキュメント: docs/ROADMAP.mdの### 12からトップページのサブタスクを`[x]`化して
  docs/roadmap-done.mdの新規見出し「### 12. 全ページ演出・体験強化」へ退避。
- 次回予定: 「### 12」の残り8項目(学院内探索/購買部/学食・喫茶室/学院祭・行事/
  入学願書/学院への道のり/学院案内/ナレーション・環境音の土台)から1項目に着手。
  または「### 13」の隠しページ候補の棚卸し。
- blocked / partial: なし
- asset-pending: なし(歯車はUnicodeグリフのため画像不要)

## 2026-07-27 16:20
- ブランチ: evolve/cycle-23 は main にマージ・削除済みを検知したため(PR #28)、
  main から新規に evolve/cycle-24 を作成して着手。
- 実装: 購買部の残り商品アイコン(REQ-058〜067)は未着荷のため今回もスキップ。
  「今後のタスク候補」の「全ページ演出・体験強化」(サイズL)に着手し、
  「### 12. 全ページ演出・体験強化」としてページ一覧に新規セクションを追加、
  ページ単位・要素単位のS/Mサブタスク9件に分割した(トップページ/学院内探索/
  購買部/学食・喫茶室/学院祭・行事/入学願書/学院への道のり/学院案内/
  ナレーション・環境音の土台)。実装は次回以降のサイクルで1項目ずつ着手する。
  コード調査で `@keyframes` が index.css にしか存在しないことを確認し、根拠として
  ROADMAPに明記した。
- レビュー: local-review実施。指摘0件(ドキュメントのみの変更のため該当なし)。
- lint: ✓ / lint:css: ✓ / test: ✓(209件) / build: ✓
- 次回予定: 「### 12」の中から1項目(トップページの追加演出、または学院内探索の
  fade-in等)に着手。あるいは購買部アイコン素材の到着確認、隠し用語集ページ提案の
  承認待ち確認。
- blocked / partial: なし
- asset-pending: なし(今回はドキュメントのみ)

## 2026-07-27 15:30
- ブランチ: evolve/cycle-22 は main にマージ・削除済みを検知したため、main から
  新規に evolve/cycle-23 を作成して着手(pull後、mainに残っていたユーザー追記の
  ROADMAP.md今後のタスク候補2件は stash → pop で引き継いだ)。
- 実装: 「今後のタスク候補」に追記されたユーザーフィードバック2件のうち1件に着手し、
  もう1件は提案のみ作成(「1サイクル1提案」の目安に沿う)。
  1. 「### 11. 更新履歴の全件表示」(実装・完了): トップページの更新履歴が
     `slice(0, 10)` で直近10件に打ち切られ、古いお知らせが閲覧不能になっていた
     問題を修正。`scripts/news-render.js` に `renderNewsListHtml()` を切り出し
     件数上限を撤廃、`.news-list` を `.news-list-scroll`(スクロール領域+下端
     フェード)で包んだ。ユーザーが提示した「横スライド」案は不採用とし
     (1カラムリストのため縦スクロールの方が自然)、理由をROADMAPに明記。
  2. 「隠しページの追加」(提案のみ): ユーザーが「まず承認依頼から」と明言していた
     ため実装せず、「新規ページ提案」に第一弾候補(魔法生物図鑑)・見つけ方の設計・
     未決事項をまとめて追記。
- レビュー: local-review実施。指摘0件(印刷スタイル`@media print`でも
  `.news-list-scroll`が省略されず全件表示されるよう、レビュー前の自己チェックで
  `styles/base.css`にprint用の`max-height: none`上書きを追加済み)。
- lint: ✓ / lint:css: ✓ / test: ✓(207件) / build: ✓
- Playwrightで実ブラウザ確認: 18件全件がリスト内に描画され、`overflow-y: auto`で
  スクロールして古い項目(2026-07-25の記事等)が見えることを確認。
- 次回予定: 購買部の残り商品アイコン(REQ-058〜067)の素材到着確認、または
  「全ページ演出・体験強化」のS/M分割、または「隠し用語集ページ」提案の承認待ち。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 14:20
- ブランチ: evolve/cycle-21 は PR #26 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-22 を作成して着手。
- 実装: 「今後のタスク候補」からページ内検索機能に着手。ユーザーの新運用ルールに
  従い「### 10. ページ内検索機能」を正式なページセクションとして新設し完了させた。
  1. pages/search.html を新設(検索キーワード入力欄+結果リスト)
  2. src/search-data.js に全41ページ分の検索対象データを静的配列として定義
     (fetch/JSONを使わずwindowグローバル変数として読み込み、file://環境でも
     動作するようにした)
  3. src/logic.js に純粋関数 filterSearchIndex を実装しテスト追加(5件)
  4. src/search.js でDOM操作(input監視→フィルタ→結果レンダリング)
  5. ヘッダーナビに「検索」リンクを追加(partials/header.html)
  Playwrightで実際にブラウザ動作確認済み(「錬金術」で4件ヒット、リンク先の
  相対パス解決も正常、コンソールエラーなし)。900px幅でもヘッダーnavの
  オーバーフローが無いことも確認した。
- レビュー: 指摘なし(誤検知含め0件)。検索インデックスの41エントリが
  サイトマップページの41リンクと完全一致することをdiffで確認済み。
- lint: ✓(stylelintで.search-result__titleの詳細度順序エラーを検出・修正、
  eslintでSEARCH_INDEXグローバル未定義エラーを検出・window.SEARCH_INDEXに
  変更して解消) / lint:css: ✓ / test: 201 passed ✓ / build: ✓
- 次回予定: 「今後のタスク候補」の残り1件(全ページ演出・体験強化)は着手条件
  (ページ内検索・OGP完了)を満たしたが、規模が非常に大きいため、次サイクルは
  まずページ単位・要素単位のS/Mサブタスクへの分割から始める。または購買部の
  残り商品アイコン10種の到着待ちを確認する。
- blocked / partial: なし
- asset-pending: REQ-058〜067(購買部商品アイコン残り10件)

## 2026-07-27 13:20
- ブランチ: evolve/cycle-21 はページ完了を伴わないコミットが続いており
  origin/main へ自動マージされていない(NOT MERGED)ため、同じブランチで継続。
- 実装: 前サイクルで依頼した素材4件(OGPアイキャッチ画像1件+購買部商品アイコン3件)
  が到着していたため、まとめて反映(無関係だが固定コスト削減の理由でまとめた)
  1. 共通アイキャッチ画像(assets/images/og-image.jpg)をREQ-068として対応済みに
     移動。「### 9. OGPアイキャッチ画像」を完了に変更し、紹介文を追記(トップページ
     お知らせに反映される)
  2. 購買部の商品アイコン13種中3種(制服=uniform・魔導具=tool・みやげ=souvenir)に
     実画像を反映(REQ-055〜057)。background-size: coverで正方形バッジアイコンを
     表示。残り10種は素材待ちのため、購買部のstatusを進行中に戻し新規サブタスクを
     追加した
- レビュー: 指摘なし(誤検知含め0件)。ビルド後、新しい画像パスがCSSに正しく
  反映されていることを確認済み。
- lint: ✓ / lint:css: ✓ / test: 191 passed ✓ / build: ✓
- 次回予定: 購買部の残り商品アイコン10種(REQ-058〜067)の到着待ち。並行して
  ページ内検索機能に着手できないか検討する。
- blocked / partial: なし
- asset-pending: REQ-058〜067(購買部商品アイコン残り10件)

## 2026-07-27 12:40
- ブランチ: evolve/cycle-21 はページ完了を伴わないコミットが続いており
  origin/main へ自動マージされていない(NOT MERGED)ため、同じブランチで継続。
  なお、直前のサイクル間でユーザーから直接のバグ報告(ヒーロービジュアルの幅バグ)
  対応と、docs/ROADMAP.mdに書かれていた手書きメモの整理を会話内で実施済み
  (共にコミット済み)。
- 実装: 「今後のタスク候補」からOGP用共通アイキャッチ画像(og:image)に着手。
  ユーザー指示の新運用ルールに従い、「### 9. OGPアイキャッチ画像」として
  正式なページ一覧セクションを新設した。
  1. 共通アイキャッチ画像(1枚、OGP標準1200×630)をREQ-068として依頼
  2. 主要8ページ(トップ・学院内探索・学院祭・購買部・学食・入学願書・
     学院への道のり・学院案内)の`<head>`に og:image タグを追加(画像未着のため
     視覚的には未反映。画像到着後に反映確認するだけで完了する状態にした)
  画像到着待ちのため、このセクションは status: 進行中 のまま(完了・紹介文追加は
  次回画像反映時に行う)。
- レビュー: 指摘なし(誤検知含め0件)。全8ページのog:imageパスがビルド後に
  各ページの深さに応じて正しい相対パスに変換されていることを確認済み。
- lint: ✓ / lint:css: ✓ / test: 191 passed ✓ / build: ✓
- 次回予定: OGPアイキャッチ画像の到着確認、またはページ内検索機能に着手する。
  「全ページ演出・体験強化」はこの2件の完了後に着手する(ユーザー指示)。
- blocked / partial: なし
- asset-pending: REQ-055〜068(購買部カテゴリアイコン13件+OGPアイキャッチ画像1件)

## 2026-07-27 11:20
- ブランチ: evolve/cycle-21 はページ完了を伴わないサイト基盤タスクが続いており
  origin/main へ自動マージされていない(NOT MERGED)ため、同じブランチで継続。
- 実装: 「今後のタスク候補」からサイトマップページ追加に着手し、前サイクルの
  meta description追加の自然な続きとしてOGPタグ追加もまとめて対応
  1. サイトマップページを新設(pages/sitemap.html)。全39ページ(404・サイトマップ
     自身を除く)をトップ/学院内探索/学院祭/購買部/学食/その他の6セクションに
     整理して一覧表示。フッターに「サイトマップ」リンクを追加(印刷時は非表示)。
  2. 主要8ページに OGP メタタグ(og:type/og:title/og:description)を追加。
     og:imageは共通アイキャッチ画像が無いため今回は見送り、今後のタスク候補へ
     追加した。
- レビュー: 指摘なし(誤検知含め0件)。サイトマップの全41リンク(index系含む)が
  既存の39ページ全てを網羅していることを1件ずつ突き合わせて確認済み。
- lint: ✓ / lint:css: ✓ / test: 189 passed ✓ / build: ✓
- 次回予定: 「今後のタスク候補」の残り2件(ページ内検索機能・OGP用アイキャッチ画像)
  から選ぶか、既存実装をさらに見直して新規タスク案を追加する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 10:20
- ブランチ: evolve/cycle-21 はページ完了を伴わないサイト基盤タスクのみだったため
  origin/main へ自動マージされておらず(NOT MERGED)、同じブランチで継続。
- 実装: 「今後のタスク候補」から2件選んで対応(無関係だが固定コスト削減の理由で
  まとめた)
  1. 学院内探索・購買部・学食の店舗詳細ページ間の相互リンク強化。購買部エリア別
     店舗14ページ・学食エリア別飲食店7ページ(計21ページ)の末尾に「◯◯エリアを
     探索する →」リンクを追加し、対応する学院内探索エリアページへの逆方向導線を
     新設(順方向の「このエリアの施設」リンクは既存)。
  2. 印刷用スタイル(@media print)を追加。base.cssにヘッダー・ナビ・フッター背景を
     省く共通ルールを追加し、tickets.cssで料金シミュレーターフォーム、access.css
     でキャンパスマップの操作ヒント・提携宿泊施設のビジュアル画像を印刷時に
     非表示にした。
  実施した2件をROADMAPの「今後のタスク候補」から除去し、roadmap-done.mdの
  「0. 共通パーツ」見出し配下に完了記録として追加した。
- レビュー: 指摘なし(誤検知含め0件)。21ページ分のリンク先が全て正しいエリアページに
  対応していることをビルド出力で確認済み。
- lint: ✓ / lint:css: ✓ / test: 186 passed ✓ / build: ✓
- 次回予定: 「今後のタスク候補」の残り2件(ページ内検索機能・サイトマップページ)から
  選ぶか、既存実装をさらに見直して新規タスク案を追加する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 09:20
- ブランチ: evolve/cycle-20 は PR #25 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-21 を作成して着手。
- 実装: ROADMAPの全8ページがすべて完了状態のため、既存実装を見直して新規タスク案を
  「今後のタスク候補」に3件追加(印刷用スタイル・店舗ページ相互リンク強化・
  サイトマップページ)したうえで、サイト基盤タスク2件をまとめて実装
  1. カスタム404ページを新設(pages/404.html)。「迷子の魔法陣」という世界観に沿った
     文言と、全主要8ページへのリンク一覧。noindex指定。専用CSS(styles/not-found.css)
  2. 主要8ページ(トップ・学院内探索・学院祭・購買部・学食・入学願書・学院への道のり・
     学院案内)に meta description を追加(SEO対応)
  いずれもページ単位のタスクではなくサイト全体の技術基盤タスクのため、
  roadmap-done.mdの「0. 共通パーツ」見出し配下に完了記録として追加した。
- レビュー: 指摘なし(誤検知含め0件)。404ページは新規ビジュアルエリアを持たない
  シンプルなテキスト構成のため、アセット依頼は不要と判断。
- lint: ✓(stylelintで.not-found__link:hoverの詳細度順序エラーを検出・その場で
  ルール順を入れ替えて修正) / lint:css: ✓ / test: 186 passed ✓ / build: ✓
- 次回予定: 「今後のタスク候補」に追加した3件(印刷用スタイル・相互リンク強化・
  サイトマップ)、またはページ内検索機能から1〜2件選んで着手する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 08:20
- ブランチ: evolve/cycle-19 は PR #24 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-20 を作成して着手。
- 実装: 購買部・学食の残タスクをまとめて対応(無関係だが固定コスト削減の理由でまとめた)
  1. 購買部: 商品アイコンの依頼方針を検討・確定 → 完了。19商品ページが13種類の
     視覚修飾子(中央5種+エリア別8種)を共有していることを確認し、商品単位ではなく
     この粒度でカテゴリ共通アイコンをREQ-055〜067として依頼。
  2. 学食: 中央学食を含む「列挙しているだけ」構成の見直し → 完了。dining/index.htmlの
     7エリアタブそれぞれに「人気メニュー」1品ずつをアコーディオン形式で追加。
     既存のmenu-item/menu-item__trigger/dining-menu.jsパターンをそのまま再利用し、
     新規JS実装なしでインタラクティブ性を強化できた。
- レビュー: 指摘なし(誤検知含め0件)。学食の追加は既存テキストパターンの再利用の
  ため新規ビジュアルエリアは無く、追加のアセット依頼は不要と判断。
- lint: ✓ / lint:css: ✓ / test: 183 passed ✓ / build: ✓
- 次回予定: ROADMAPの進行中ページが0件になったため、次サイクルは既存実装を見直して
  「今後のタスク候補」に新規タスク案を3〜5個追加し、その中から1つ着手する。
- blocked / partial: なし
- asset-pending: REQ-055〜067(購買部カテゴリ共通アイコン13件)

## 2026-07-27 07:20
- ブランチ: evolve/cycle-18 は PR #23 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-19 を作成して着手。
- 実装: 学院祭・行事の残り2件のM項目をまとめて対応(同一ページの改修のため) → 完了
  1. ページ全体の情報量を強化: 8行事すべての詳細パネルに「豆知識」dt/dd行を追加。
     各行事の歴史・裏話を1件ずつ固有に書き下ろした(例: 学院祭の旧称、点灯式の
     開始時刻が前日まで確定しない理由など)。
  2. イベントタグにエリア軸を追加: 7エリア+全エリア共通の8種類のエリアフィルター
     ボタンを新設。各イベントカードに data-area 属性とエリアタグ(⊕アイコン付き)を
     追加し、8行事をエリアに割り当てた(学院祭のみ「全エリア」扱い)。
     src/season-filter.js を季節×エリアのAND条件フィルタリングに拡張。
- レビュー: 指摘なし(誤検知含め0件)。新規ビジュアルエリアは追加していないため
  ASSET_REQUESTS.mdへの追記は不要と判断。
- lint: ✓ / lint:css: ✓ / test: 183 passed ✓ / build: ✓
- 次回予定: 購買部(商品アイコン依頼方針検討)、学食(インタラクティブ性強化)の
  残タスクから選んで着手する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-27 06:20
- ブランチ: evolve/cycle-18 はまだ origin/main に未マージのため、同じブランチで継続。
- 実装: 学院内探索 残り2エリアに固有設備セクションを追加(S+S) → 学院内探索 完了
  1. 決闘演武場に「演武場設備」追加(演武場床「カルネ岩」・防護結界発生装置・
     魔封石保管庫・考査記録室の4項目)
  2. 魔法陣召喚広場に「広場設備」追加(大魔法陣「刻の輪」・四元素石・陣紋補修記録簿・
     契約精霊の棲家「風見の祠」の4項目)
  これで7エリア全てに固有設備セクションが揃い、天文台から始まったこのタスクが完結。
  紹介文を全エリア完結を反映した内容に書き直した。関連性の強いタスク群のため
  1コミットにまとめた。
- レビュー: 指摘なし(誤検知含め0件)。既存の「体験・見どころ」アトラクション項目
  (観戦体験・精霊召喚デモ等)と、今回追加した設備セクション(床材・保管庫・魔法陣
  本体等のインフラ視点)の内容が重複していないことを確認。
- lint: ✓ / lint:css: ✓ / test: 183 passed ✓ / build: ✓
- 次回予定: 学院祭・行事(情報量強化・エリア×季節複合フィルタ)、購買部(商品アイコン
  依頼方針)、学食(インタラクティブ性強化)の残タスクから2〜3件選んで着手する。
- blocked / partial: なし
- asset-pending: なし(テキストのみで新規ビジュアルエリアなし)

## 2026-07-27 05:20
- ブランチ: evolve/cycle-17 は PR #22 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-18 を作成して着手。
- 実装: 学院内探索 残り4エリアのうち2エリアに固有設備セクションを追加(S+S)
  1. 時計塔に「主要機構設備」追加(永久運動核・管理台帳「刻の書」・予備歯車庫・
     大鐘「刻の声」の4項目)
  2. 大図書館に「書庫設備」追加(蔵書親和魔法陣・自浮蝋燭群・蔵書修復工房・
     蔵書検索魔法陣の4項目)
  いずれも天文台・錬金術研究棟・飛行船ドックと同じarea-timetable dl形式で統一感を
  持たせ、既存の「体験・見どころ」アトラクション項目とは重複しない設備視点の
  内容にした。関連性の強いタスク群のため1コミットにまとめた。
- レビュー: 指摘なし(誤検知含め0件)
- lint: ✓ / lint:css: ✓ / test: 183 passed ✓ / build: ✓
- 次回予定: 学院内探索の残り2エリア(決闘演武場・魔法陣召喚広場)に固有設備セクションを
  追加すれば学院内探索が完了する見込み。または学院祭・行事/購買部/学食の残タスクへ。
- blocked / partial: なし
- asset-pending: なし(テキストのみで新規ビジュアルエリアなし)

## 2026-07-27 05:00
- ブランチ: evolve/cycle-16 は PR #21 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-17 を作成して着手。
- 実装: 無関係だが固定コスト削減の理由でまとめて対応(M+S+S)
  1. トップページ「学院の3大体験」に自動スライド/カルーセル演出を追加 → 完了
     前後矢印・ドットナビゲーション・6秒毎自動送り。ホバー/フォーカス中は一時停止、
     prefers-reduced-motion時は自動送り自体を無効化。インデックス計算
     (carouselNextIndex/carouselPrevIndex)はsrc/logic.jsに純粋関数として実装し
     6件のユニットテストを追加。JS無効時は既存の3列グリッド表示にフォールバック。
  2. 学院内探索 錬金術研究棟に「主要研究設備」独自セクション追加(4項目)
  3. 学院内探索 飛行船ドックに「格納設備」独自セクション追加(4項目)
     2・3は天文台の「主要観測設備」と同じarea-timetable dl形式で統一感を持たせた。
- レビュー: 指摘なし(誤検知含め0件)。実装中に自前発見した問題を先取り修正済み:
  既知のバグパターン(`.event-card { display: grid }` が `[hidden]` のUAスタイルを
  同一詳細度で上書きしていた件)と同型の問題が `.highlight-card { display: flex }`
  にも起こりうると判断し、`.highlight-card[hidden] { display: none; }` を先回りで
  追加してから通常のレビューに進んだ。
- lint: ✓ / lint:css: ✓ / test: 183 passed ✓ / build: ✓
- 次回予定: 学院内探索の残り4エリア(時計塔・大図書館・決闘演武場・魔法陣召喚広場)の
  エリア固有セクション追加、または学院祭・行事/購買部/学食の残タスクから選択。
- blocked / partial: なし
- asset-pending: なし(今回はテキスト・インタラクションのみで新規ビジュアルエリアなし)

## 2026-07-26 21:20
- ブランチ: evolve/cycle-15 は PR #20 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-16 を作成して着手。
- 実装: 依頼中だった素材が2バッチとも到着済みと判明したため、両方の画像反映を
  まとめて実施(無関係だが固定コスト削減の理由でまとめた)
  1. 学院への道のり 提携宿泊施設3件(銀時計亭・魔法街道ステーションホテル・
     星降る丘コテージ)の lodging-card__visual に実画像を反映(REQ-049〜051)
  2. 学院案内 案内役の魔法生物3体(文鎮フクロウ・歯車ネズミ・星兎)の
     mascot__avatar に実画像を反映(REQ-052〜054)
  既存の category-card__visual と同じ「グラデーションプレースホルダー→
  background-image差し替え」パターンに沿って実装した。
- レビュー: 指摘なし(誤検知含め0件)。ただしフクロウ・ネズミのアバター画像が
  依頼時に指定した透過背景ではなく白背景で届いていることを確認。円形クロップ
  表示のため見た目は破綻しないためコード対応は不要と判断(再生成が必要かは
  ユーザー判断に委ねる)。
- lint: ✓ / lint:css: ✓ / test: 177 passed ✓ / build: ✓
- 次回予定: 進行中の残り5ページ(学院内探索・学院祭・購買部・学食・トップページ)
  から2〜3件選んで着手する。
- blocked / partial: なし
- asset-pending: なし(REQ-049〜054はすべて対応済みへ移動)

## 2026-07-26 20:20
- ブランチ: evolve/cycle-14 は PR #19 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-15 を作成して着手。
- 実装: 学院案内(サービス情報) 残り3件のS項目をまとめて対応 → 完了
  1. 園内サービス施設の案内(救護室・遺失物取扱所・コインロッカー・授乳室・
     車椅子貸出の5項目をdl形式で紹介。既存のtransport-list慣例に合わせた構造)
  2. バリアフリー・多言語対応の案内(枠なし2カラムリスト。既存の枠付きカード
     [dress-panel/rule-item]と意図的に差別化したレイアウト)
  3. 案内係を務める魔法生物の紹介コーナー(文鎮フクロウ「ホーホー」・歯車ネズミ
     「カチカチ」・星兎「ルミナ」の3体。media-object形式の新規レイアウトで、
     各エリアの承認済みアクセント色[emerald/silver/azure]と対応付けた)
  すべて関連性の強い同一ページの残タスクのため1コミットにまとめた。
- レビュー: 指摘1件対応(A-1: 案内役の魔法生物3体のアバタービジュアルエリアに
  ASSET_REQUESTS.mdへの依頼が漏れていた → REQ-052〜054を追記)
- lint: ✓ / lint:css: ✓ / test: 177 passed ✓ / build: ✓
- 次回予定: REQ-049〜051(提携宿泊施設カードサムネイル3件)の画像が
  assets/images/access/ に到着済みと判明(サイクル終了時に検知。学院案内タスクとは
  無関係なため今回は着手せず、学院への道のりのstatusをprogressに戻して
  サブタスクとして記録した)。次サイクルはこの画像反映を優先着手候補とし、
  余力があれば学院内探索・学院祭・購買部・学食・トップページからもう1〜2件を追加する。
- blocked / partial: なし
- asset-pending: REQ-049〜051(画像到着済み・反映待ち) / REQ-052〜054(魔法生物アバター3件・未着)

## 2026-07-26 19:20
- ブランチ: evolve/cycle-13 は PR #18 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-14 を作成して着手。
- 実装: 学院への道のり 残り3件のS項目をまとめて対応 → 完了
  1. 初めての方向けモデルルート(日帰り満喫プラン[電車利用]・遠方からのゆったり
     1泊プラン[お車利用]の2ルート。タイムライン形式で新規レイアウトを導入し、
     テーブル/dl/カードグリッドに続く4つ目のレイアウトパターンとして多様化)
  2. 駐車場の詳細情報(学院東駐車場・学院西臨時駐車場を表形式で比較)
  3. 周辺の提携宿泊施設紹介(銀時計亭・魔法街道ステーションホテル・
     星降る丘コテージの3カード。カードサムネイル用にREQ-049〜051を新規依頼)
  すべて関連性の強い同一ページの残タスクのため1コミットにまとめた。
- レビュー: 指摘2件対応(A-1: lodging-card__distanceのコントラストが75%未満
  → 76%に修正 / A-2: 宿泊施設カードにビジュアルエリアが無かった →
  カードサムネイルのプレースホルダーを追加しASSET_REQUESTS.mdへREQ-049〜051を追記)
- lint: ✓ / lint:css: ✓ / test: 177 passed ✓ / build: ✓
- 次回予定: 進行中の残り6ページ(学院内探索・学院祭・購買部・学食・学院案内・
  トップページ)から2〜3件選んで着手する。
- blocked / partial: なし
- asset-pending: REQ-049〜051(提携宿泊施設カードサムネイル3件)

## 2026-07-26 18:25
- 実装: 入学願書(チケット案内) 残り3件のS項目をまとめて対応 → 完了
  1. 年間パス「四季来訪証」紹介セクション(大人/学生/小人/家族の4区分。年会費・特典テーブル、
     price-tableを再利用)
  2. 団体・修学旅行向け特別プラン案内(prose+asideレイアウト。20名以上団体料金20%引・
     引率者無料枠・見習い案内人ガイドツアーオプション)
  3. チケット関連FAQ 4問(キャンセル・当日券・有効期限・紛失時再発行。guide-qa.jsを
     そのまま再利用したQ&Aアコーディオン)
  すべて関連性の強い同一ページの残タスクのため1コミットにまとめた。
- レビュー: 指摘2件対応(A-1: 新規note文言のコントラストが75%未満 → 76%に修正 /
  A-2: group-plan__factsのdl構造がサイト内の既存慣例[access.cssのtransport-list]と
  異なりdivラップしていた → flatなdt/dd構造に統一)
- lint: ✓ / lint:css: ✓ / test: 177 passed ✓ / build: ✓
- 次回予定: 進行中の残り7ページ(学院内探索・学院祭・購買部・学食・道のり・学院案内・
  トップページ)から2〜3件選んで着手する。ビジュアル系のアセット依頼は無し(今回は
  テキスト・データ表現の追加のみで新規ビジュアルエリアなし)。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 17:30
- 実装: バグ修正セクション残り2件を対応(M+S)
  1. 全ページ共通: ヒーロービジュアルがウィンドウ幅を広げると見切れる問題 →
     `.shop-hero`/`.area-hero`/`.dining-page-hero__visual` にページ幅の
     max-width制約が無くコンテナ高さだけ固定だったのが原因。画像の生成比率
     (--ar 5:1)に合わせて `aspect-ratio: 5/1` + `max-height: 320px` に変更し解消。
  2. 購買部: サムネイルの黒帯報告 → 調査の結果、category-card__visual は
     background-size: cover が19種すべて正しく設定済みで、CSS側の原因では
     再現しない。指摘時点はまだ実画像反映前のプレースホルダーだったための
     誤認と判断してクローズ(mainマージ後に念のため人間側の再確認を推奨)。
  これでバグ修正セクションが0件になった。
- レビュー: OK(指摘なし)
- lint: ✓ / lint:css: ✓ / test: 179 passed ✓ / build: ✓
- 次回予定: バグ修正が尽きたため、次は進行中の8ページ(すべて昼レビュー由来の
  新規タスクを抱えている)から2〜3件選んで着手する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 16:20
- 実装: バグ修正セクション上位2件を対応(S+S)
  1. 学食・喫茶室: 中央学食タブの「詳細」ボタン無反応 → `pages/dining/index.html`に
     `src/dining-menu.js` の読み込みが漏れていたことが原因。script タグ追加で解消。
  2. 学院祭・行事: 季節フィルターボタン無反応 → `styles/events.css`の
     `.event-card { display: grid; }`がネイティブの`[hidden]`規則と同一詳細度で
     後勝ちしていたことが原因。`.event-card[hidden] { display: none; }`を追加して解消。
- レビュー: OK(指摘なし)
- lint: ✓ / lint:css: ✓ / test: 148 passed ✓ / build: ✓
- 次回予定: バグ修正の残り2件
  1. ヒーロービジュアルの広ウィンドウ時の見切れ(M、object-fit/object-position調整。
     視覚確認が必要なため慎重に着手)
  2. 購買部サムネイルの黒帯表示(S、レビュー当時はcategory-card__visualがまだ
     プレースホルダーグラデーションのみだった可能性が高く、本ブランチのcycle-10で
     既に実画像反映済み。mainマージ後に人間側で再確認してもらうのが早い)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 15:20
- ブランチ: evolve/cycle-9 は PR #14 でmainにマージ・削除済みを検知したため、
  main から新規に evolve/cycle-10 を作成して着手。
- 実装: 残っていたTODO2件をまとめて対応(S+S、両方とも既存のhero画像を再利用する
  だけで新規アセット依頼は不要なため軽量にまとめた)
  1. dining/index.html の dining-venue-feature__visual(7エリア)に実画像反映
  2. shop/index.html の category-card__visual(19種)に実画像反映
  3. shop/index.html: JS無効時の noscript フォールバック(全14店舗への直接リンク)
- レビュー: OK(指摘なし)
- lint: ✓ / lint:css: ✓ / test: 148 passed ✓ / build: ✓
- 次回予定: ROADMAPの`[ ]`未完了項目・TODOが0件になったため、次サイクルは
  既存実装を見直して「今後のタスク候補」に新規タスク案を3〜5個追加し、
  その中から1つ着手する。
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 14:20
- 実装: エリア別飲食店7ページ(秘薬スタンド・空賊カフェ・歯車喫茶・読書喫茶・
  回復スタンド・召喚前夜祭カフェ・星見ダイナー)の dining-page-hero__visual に
  img タグを追加し、到着済みREQ-042〜048画像を反映(M)。dining.cssに
  .dining-page-hero__visual-img を追加、ベース要素に overflow:hidden を追加。
  ASSET_REQUESTS.md の依頼中を空に。
- レビュー: OK(指摘なし)
- lint: ✓ / lint:css: ✓ / test: 148 passed ✓ / build: ✓
- 次回予定: ROADMAPの全ページが完了状態になったため、TODO整理
  (dining/index.html の dining-venue-feature__visual への画像反映、
  shop/index.html の noscript フォールバック)または「今後のタスク候補」の
  新規追加を検討する。
- blocked / partial: なし
- asset-pending: なし(素材依頼は依頼中0件・全て対応済み)

## 2026-07-26 13:20
- 実装: 購買部エリア別店舗詳細ページ14ページ(蒸留工房店・実験器具販売所・
  羅針堂・風袋商会・時刻堂・歯車細工所・写本堂・魔法インク工房・決闘記念品店・
  魔法武具展示室・召喚素材専門店・魔法陣工房・星図堂・夜空雑貨店)の
  shop-hero__visual に img タグを追加し、到着済みREQ-021〜027・REQ-035〜041
  画像を反映(M)。これで購買部の全サブタスクが完了したため status を完了に変更。
- レビュー: OK(指摘なし)
- lint: ✓ / lint:css: ✓ / test: 148 passed ✓ / build: ✓
- 次回予定: 学食・喫茶室のエリア別飲食店7ページ(dining-page-hero__visual)に
  実画像を反映(REQ-042〜048、画像到着済み)
- blocked / partial: なし
- asset-pending: なし(REQ-042〜048は画像到着済み・コード反映待ちのみ)

## 2026-07-26 12:20
- 実装: 購買部カテゴリページ5点(制服・魔導具・みやげ・書籍・食料品)の
  shop-hero__visual に img タグ追加、到着済みREQ-016〜020画像を反映(S)
  + 探索3エリア(大図書館・決闘演武場・天文台)の誤配置画像パス修正確認(S)
  ※画像配置ミス(dinigタイプミス・rootディレクトリ重複)はユーザー依頼により
  evolveサイクル外で先に修正済み。本サイクルはそれを前提に通常進行。
  ASSET_REQUESTS.md: REQ-010〜020を対応済みへ移動、dining重複依頼
  REQ-028〜034を整理(REQ-042〜048と同一パスのため削除)。
  ROADMAP.md: 購買部残り14ページ・学食7ページの画像反映をTODO明記。
- レビュー: OK(指摘なし)
- lint: ✓ / lint:css: ✓ / test: 148 passed ✓ / build: ✓
- 次回予定: 購買部エリア別店舗詳細14ページ、または学食エリア別7ページの
  実画像反映(いずれも画像到着済み・img タグ追加のみで対応可能)
- blocked / partial: なし
- asset-pending: なし(REQ-021〜048は画像到着済み・コード反映待ちのみ)

## 2026-07-26 10:20
- 実装: エリア別飲食店詳細ページ × 7エリア (M) + 探索エリアページ施設セクション × 7 (S)
  秘薬スタンド(錬金術)・空賊カフェ(飛行船)・歯車喫茶(時計塔)・読書喫茶(大図書館)
  回復スタンド(決闘演武場)・召喚前夜祭カフェ(召喚広場)・星見ダイナー(天文台)
  dining/index.html: 7エリアタブの--soon解除、dining-venue-feature カードに差し替え
  shop-tabs.js: URL ハッシュで対応タブを自動アクティブ化
  area-page.css: area-facilities リンクスタイル追加
  dining.css: dining-page-hero・dining-venue-feature + 7エリアビジュアルパターン追加
- レビュー: 指摘2件対応(REQ-042〜048 7件追加・ROADMAP タスク完了マーク)
- lint: ✓ / lint:css: ✓ / test: 148 passed ✓ / build: ✓
- 次回予定: 購買部セクション4の残件(制服・魔導具 img タグ対応 asset-pending) またはROADMAP次タスク
- blocked / partial: なし
- asset-pending: REQ-042〜048 (ダイニングヒーロー画像7件)

## 2026-07-26 09:15
- 実装: 購買部エリア詳細ページ残り4エリア×2店舗(M) + 学食エリアタブ化(M)
  大図書館(写本堂・魔法インク工房)・決闘演武場(決闘記念品店・魔法武具展示室)
  魔法陣召喚広場(召喚素材専門店・魔法陣工房)・天文台(星図堂・夜空雑貨店) 計8ページ
  shop/index.html: 4タブの--soon解除・実カードリスト追加
  dining/index.html: 8エリアタブ構造に改修(中央学食+7エリア近日公開)、shop-tabs.js流用
  dining.css: タブスタイル追加、二重パディングを.dining-tabs .menu-contentで防止
- レビュー: 指摘2件対応(dining二重padding修正・REQ-038〜041 4件追加)
- lint: ✓ / lint:css: ✓ / test: 127 passed ✓ / build: 32 shopページ含む全ページ ✓
- 次回予定: エリア別飲食店詳細ページ × 7エリア (dining/<area>-dining.html)
- blocked / partial: なし
- asset-pending: REQ-038〜041

## 2026-07-26 08:28
- 実装: 購買部 エリアタブ化(M) + 3エリア×2店舗 詳細ページ新設(M・partial)
  shop/index.html: 8エリアタブ構造に改修。中央購買部タブに既存5カテゴリ存続。
  錬金術研究棟(蒸留工房店・実験器具販売所) / 飛行船ドック(羅針堂・風袋商会) / 時計塔(時刻堂・歯車細工所)
  src/shop-tabs.js: IIFE タブ切り替え + キーボードナビゲーション
  styles: shop.css タブ+エリアカード修飾子 / shop-page.css エリアショップビジュアル
- レビュー: 指摘1件(A-1: アセット依頼漏れ REQ-035〜037 追記)対応済み
- lint: ✓ / lint:css: ✓ / test: ✓(103件) / build: ✓
- 次回予定: エリア詳細ページ残り4エリア(大図書館・決闘演武場・召喚広場・天文台) または dining/index.html エリアタブ化
- blocked / partial: エリア別店舗ページ partial — 残り4エリア未実装
- asset-pending: REQ-035(alchemy-tools) / REQ-036(airship-gear) / REQ-037(clock-accessories)

## 2026-07-26 07:04
- 実装: 学院案内(サービス情報) 服装規定(S) + Q&A(S) + 学院ルール(S) → 完了
  pages/guide/index.html: 3区分服装パネル / 6問Q&Aアコーディオン / 5規則リスト
  styles/guide.css: dress-panels 3種(--ok/--caution/--ng) / qa-accordion / rule-list
  src/guide-qa.js: 服装Q&A IIFE アコーディオン
- レビュー: 指摘1件(ROADMAP未更新)対応済み
- lint: ✓ / lint:css: ✓ / test: ✓(85件) / build: ✓
- 次回予定: ROADMAPタスク完了のため「今後のタスク候補」に3〜5件追加して着手
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 06:08
- 実装: 学院への道のり アクセス情報(S) + SVGキャンパスマップ(M) → 完了
  pages/access/index.html: info-bar(住所・時間・定休日) + transport-list DL×4 + SVGマップ8エリア
  styles/access.css: hero/access-section/transport-list/campus-map/SVGエリアスタイル
  src/campus-map.js: エリアクリック/キーボード選択 IIFE(data-href/title/desc をパネルに表示)
- レビュー: 指摘2件(ROADMAP未更新・focus outline欠落)対応済み
- lint: ✓ / lint:css: ✓ / test: ✓(82件) / build: ✓
- 次回予定: 学院案内(サービス情報) (S)服装規定 + (S)Q&A + (S)学院ルール → 完了まで
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 05:09
- 実装: 入学願書(チケット案内) 料金表(S) + シミュレーター(M) + お役立ち情報(S) → 完了
  src/logic.js: TICKET_PRICES + calcTicketTotal + calcOptimalPrice(家族券最適化)
  tests/logic.test.js: 19テスト(価格定数・合計計算・最適料金)
  src/ticket-sim.js: IIFE DOMシミュレーター (家族券自動適用表示)
  styles/tickets.css: hero/price-table/ticket-sim/sim-result/info-grid
  pages/tickets/index.html: 料金表テーブル + シミュレーターフォーム + 4件お役立ちカード
- レビュー: 指摘1件(ROADMAP status未更新)対応済み
- lint: ✓ / lint:css: ✓ / test: ✓(79件) / build: ✓
- 次回予定: 学院への道のり (S)アクセス情報 + (M)SVGキャンパスマップ
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 04:15
- 実装: 学食・喫茶室 メニュー一覧骨格(S) + アコーディオン詳細(M) + 限定メニュー告知(S) → 完了
  dining/index.html: ランチ3+スイーツ3+ドリンク3 / 各9品に材料・アレルギー・魔法効果パネル
  dining.css: hero/nav/seasonal-banner/menu-item flex行/accordion/menu-detail DL(--arcane 魔法効果)
  dining-menu.js: アコーディオン IIFE
- レビュー: 指摘0件
- lint: ✓ / lint:css: ✓ / test: ✓(58件) / build: ✓
- 次回予定: 入学願書(チケット案内) (S) 料金表 + (M) 簡易シミュレーター + (S) お役立ち情報
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 03:15
- 実装: 購買部カテゴリページ みやげ・食品(M) + 書籍・資料(M) + 食料品・薬草(M)
  shop-page.css: hero/product visual modifier ×6追加(--souvenirs/--books/--groceries 各ヒーロー+商品)
  souvenirs.html: 2セクション(みやげ4点+食品2点)・ラッピング案内
  books.html: 2セクション(入門書3点+写本・希少資料3点)・取り寄せ案内
  groceries.html: 2セクション(薬草2点+食品3点)・取り扱い案内
- レビュー: 指摘0件(A-1は誤検知 = books背景色は shop.css category-card と意図的に合わせた設計)
- lint: ✓ / lint:css: ✓ / test: ✓(55件) / build: ✓
- 次回予定: 学食・喫茶室 (S) メニュー一覧骨格 + (M) メニュー詳細アコーディオン
- blocked / partial: なし
- asset-pending: なし（REQ-016/017 は制服・魔導具ヒーロー画像待ち、前サイクル登録済み）

## 2026-07-26 02:15
- 実装: 購買部カテゴリページ 制服(M) + 魔導具(M) + aria-controls(S)
  styles/shop-page.css 新規(パンくず・ヒーロー・商品リスト・サイズ表・タグ・案内ボックス)
  uniforms.html: 商品5点(標準制服/ローブ/エプロン/外套/夜会マント)+サイズ表+オーダー案内
  magical-tools.html: 商品5点(入門杖/刻印具/魔力石/蒸留セット/ガリグネメーター)+注意事項
  events/index.html: aria-controls="detail-panel-01〜08" をトリガーに追加
- レビュー: 指摘1件(A-1: img tag pending) = ROADMAP追記で対処 / 他は誤検知
- lint: ✓ / lint:css: ✓ / test: ✓(46件) / build: ✓
- 次回予定: 購買部カテゴリページ(みやげM + 書籍M または 食料品M)
- blocked / partial: なし
- asset-pending: REQ-016(制服ヒーロー) / REQ-017(魔導具ヒーロー)

## 2026-07-26 01:15
- 実装: イベント詳細展開(S) + 学院祭特別ビジュアル(S) + 購買部骨格(S)
  全8イベントにアコーディオンパネル(event-details.js)、学院祭にラベル・背景パターン・公開日注記、
  pages/shop/index.html + styles/shop.css 新規(5カテゴリ、各CSS-onlyビジュアル)
- レビュー: 指摘2件 / B-1(カテゴリページ未作成)= 予定済みスコープ外 / B-2(aria-controls)= ROADMAP追加
- lint: ✓ / lint:css: ✓ / test: ✓(40件) / build: ✓
- 次回予定: 購買部カテゴリページ(制服M + 魔導具M)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-26 00:07
- 実装: 探索カードアクセント色 (S) + breadcrumb sep opacity修正 (S) → 学院内探索 完了。学院祭シーズンフィルター (M): season-filter.js + events.css フィルタースタイル + events.css opacity修正
- レビュー: 指摘3件。A-1対応(first-child→event-list border-top移動) / A-2対応(type=button追加) / A-3は機能影響なし。CSS重複セレクター1件も修正。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院祭 (S) 各イベント詳細展開 + (S) 学院祭ビジュアル強化
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 23:12
- 実装: 新エリア「決闘演武場」(--crimson, 4アトラクション + スケジュールdl) + 新エリア「天文台」(--azure, 設備dl + 3プログラム) + exploration.css opacity→color-mix変換(S)
- レビュー: 指摘2件対応 (A-1: area-timetable__sub 色65%→76%修正 / A-2: モバイル media query 追加)。A-3(breadcrumb sep opacity) はROADMAP残件追加のみ。
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 (S) 一覧カードにエリア固有アクセント色を適用 + 学院祭・行事 (M) シーズンイベント切り替え
- blocked / partial: なし
- asset-pending: REQ-012〜015 (hero/thumb × 決闘演武場・天文台)

## 2026-07-25 22:03
- 実装: 時計塔 hero/thumb 画像差し込み完了(REQ-008/009対応済みに移動) + 新エリア「大図書館」追加(5アトラクション・静謐幻想的トーン・深緑×真鍮グリッドパターン)
- レビュー: 指摘1件対応 (A-1: ASSET_REQUESTS の REQ-008/009 番号入れ替わり修正)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 (M) 新エリア: 決闘演武場 (--crimson)
- blocked / partial: なし
- asset-pending: REQ-010(hero-grand-library.jpg) / REQ-011(thumb-grand-library.jpg)

## 2026-07-25 21:05
- 実装: 学院内探索 新エリア「時計塔」追加(4アトラクション・重厚精密トーン・--silver グリッドパターン hero ビジュアル・accordion 対応)。探索一覧にカード追加
- レビュー: 指摘1件 ROADMAP todo追記(A-1: exploration.css の opacity テキスト、既存の別問題)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 (M) 新エリア: 大図書館
- blocked / partial: なし
- asset-pending: REQ-008(hero-clock-tower.jpg) / REQ-009(thumb-clock-tower.jpg)

## 2026-07-25 20:15
- 実装: 学院内探索 既存3エリアのコンテンツ見直し(錬金術研究棟6件・飛行船ドック3件・召喚広場5件、各トーン個性化) + accordion インタラクション追加(src/accordion.js・styles/area-page.css) + hero 画像 <img> 差し込み
- レビュー: 指摘1件対応 (A-1: teaser/notes テキストコントラスト 72%/65% → 76% に修正)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 (M) 新エリア: 時計塔(--silver)
- blocked / partial: なし
- asset-pending: hero-alchemy-tower.jpg / hero-airship-dock.jpg / hero-summoning-plaza.jpg

## 2026-07-25 19:06
- 実装: トップページ 品質方針適合。ハイライトカードを<a>ラップしてリンク化・translateY hover を正当化。学科リスト(非リンク)・イベントミニカード(非リンク)の hover 削除。
- レビュー: 指摘2件いずれも低重要度(軽微/誤検知) — 対応不要
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 (S) 既存3エリアのコンテンツ見直し
- blocked / partial: なし
- asset-pending: ヒーロー背景画像(ROADMAP記載済み)

## 2026-07-25 18:03
- 実装: トップページ アクセスサマリー。魔導鉄道・転移魔法陣の2ルートをコンパクトな横並びリストで表示。詳細アクセスページへのリンク付き
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 (S) 既存3エリアのコンテンツ見直し
- blocked / partial: なし
- asset-pending: ヒーロー背景画像(ROADMAP記載済み)

## 2026-07-25 17:02
- 実装: トップページ 来場のご案内セクション。料金(一般/学院生/12歳以下/家族券)・開校時間・休校日の3列グリッド + 入学願書CTAボタン。エメラルド系アクセント・モバイル1列積み
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ (S) アクセスサマリー
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 16:04
- 実装: トップページ 季節イベント速報「今月の学院」。3件ミニカードグリッド(飛行船競技大会・夜の精霊観測会・学院祭)。夏/秋タグ+左border accent+hover lift。学院祭ページへの「すべての行事を見る」リンク付き
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ (S) チケット/営業情報サマリー
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 15:03
- 実装: トップページ セクションナビカード。7セクションへの4列カードグリッド。アイコン・アクセントライン(セクション固有色)・hover lift+アイコン拡大+矢印スライド。探索画像6枚を assets/images/exploration/ へ移動
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ (S) 季節イベント速報
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 14:03
- 実装: トップページ 見どころハイライト。「学院の3大体験」3列カードグリッド(錬金術/飛行船/召喚広場)。エリア固有グラデーション背景・アイコンhover回転アニメーション・エリアリンク付き。モバイルは縦積み横視覚
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ (S) セクションナビカード
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 13:03
- 実装: トップページ 学院紹介セクション。創設者アルノルド卿の歴史・現在5拠点・来訪者案内の3段落 + 5学科カード(2列グリッド、魔導機械科は全幅フィーチャー)。ornament ライン・アイコン・hover トランジション・レスポンシブ対応(768px 以下1列)
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ (S) 見どころハイライト
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 12:00
- 実装: 共通パーツ フッター学院情報充実。dl グリッドで所在地・開校時間・休校日・お問い合わせを追加。背景色・学院名・著作権行の3段構成。共通パーツ section 0 完了 → roadmap-done.md へ移動
- レビュー: 指摘1件対応(A-1: 共通パーツ完了につき status 更新・紹介文追記)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ (M) 学院紹介セクション
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 11:04
- 実装: 共通パーツ ヘッダー モバイルメニュー開閉トランジション。display:none ↔ flex の瞬間切り替えを max-height: 0 → 30rem + overflow:hidden + transition:0.35s ease に変更。border-top をオープン時のみ表示
- レビュー: 指摘なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 共通パーツ (S) フッター: 学院情報を充実させる
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 10:02
- 実装: 共通パーツ モバイル用ハンバーガーメニュー。768px以下でナビ折り畳み、3本線→X字アニメーション付きボタン、ナビリンククリックで自動クローズ、.is-currentをborder-leftに切り替え
- レビュー: 指摘1件 → ROADMAPにトランジション追加タスクを追記(今回スコープ外)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 共通パーツ (S) フッター: 学院情報を充実させる
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 09:42
- 実装: active-nav.js の file:// 対応。type="module"(CORS制限でfile://不可)をdeferに変更、IIFEでスコープ隔離
- レビュー: OK
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 共通パーツ (M) ヘッダー: モバイル用ハンバーガーメニュー
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 09:35
- 実装: 共通パーツ ヘッダー現在ページハイライト。src/active-nav.js 新規作成(pathname比較→.is-current付与)、base.css に .is-current スタイル追加(ember色・底辺ライン)、header.html に type="module" script 追加。build.js を更新して src/ を dist/ にコピー対象に追加。eslint.config.js に URL グローバルを追加
- レビュー: OK (A-2 軽微メモのみ)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 共通パーツ (M) ヘッダー: モバイル用ハンバーガーメニュー
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 09:24
- 実装: 共通パーツ ヘッダーデザイン改善 (styles/base.css)。ロゴに⚙アイコン(hover で180°回転)・brass色・letter-spacing。navリンクに縦区切り線・全高hover背景・色変化トランジション追加
- レビュー: 指摘1件対応 (⚙の絵文字化防止に\FE0Eテキストバリアントセレクタ追記)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 共通パーツ (S) ヘッダー: 現在ページのナビリンクをハイライト表示
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 07:01
- 実装: 学院祭・行事 イベントカレンダー HTML骨格 (pages/events/index.html + styles/events.css)。8行事(春2・夏2・秋2・冬2)を季節タグ付きカードで一覧表示。学院祭(10月)は featured カードで強調
- レビュー: OK (指摘1件 誤検知: 冬タグの透明背景は意図的デザイン)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院祭・行事 シーズンイベントの切り替え表示 (M)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 06:01
- 実装: 学院内探索 飛行船ドック・魔法陣召喚広場 エリアページ追加(各4アトラクション・エリア固有ビジュアル)。学院内探索 全サブタスク完了 → 完了
- レビュー: 指摘1件対応 (A-1: 学院内探索の紹介文を ROADMAP に追記)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院祭・行事 イベントカレンダー HTML骨格 (pages/events/index.html)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 05:10
- 実装: 学院内探索 錬金術研究棟エリア詳細コンテンツ充実。alchemy ビジュアル差別化(ember 色調グリッドテクスチャ)・アトラクション4件(元素変容デモ/鋳造体験/大蒸留器見学/魔導書閲覧室)・段落間隔 CSS 追加
- レビュー: OK (指摘3件いずれも誤検知)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 2つ目以降のエリア追加 (飛行船ドック・魔法陣召喚広場)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 05:01
- 実装: 学院内探索 エリアページ共通テンプレート (pages/exploration/alchemy-tower.html + styles/area-page.css)。パンくず・ヒーロービジュアル・アトラクションリスト・ご案内ボックス(dl グリッド)・レスポンシブ対応
- レビュー: OK (指摘1件 ROADMAP技術メモ追記: エリアサムネイルの視覚ID差別化)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 最初のエリア追加 — 錬金術研究棟 詳細コンテンツ充実 (M)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 04:06
- 実装: 学院内探索 一覧ページ HTML骨格 (pages/exploration/index.html + styles/exploration.css)。エリアカード3件(錬金術研究棟・飛行船ドック・魔法陣召喚広場)をグリッドレイアウトで配置
- レビュー: 指摘1件対応 (A-1: card border-color を color-mix(in srgb) → (in oklch) に変更し視認性確保) / 指摘1件 ROADMAP todo追記 (A-3: ナビアクティブリンクハイライト)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 エリアページの共通テンプレート作成 (pages/exploration/<area>.html)
- blocked / partial: なし
- asset-pending: なし


## 2026-07-25 03:01
- 実装: トップページ ニュース区切り線を color-mix(in srgb, var(--brass) 20%, transparent) で半透明化し、最終アイテムの下線を非表示。トップページ 完了・roadmap-done.md に移動
- レビュー: 指摘1件 (A-1: color-mix srgb の視覚的暗化) → ROADMAP 技術メモに追記。現状ニュース空のため実害なし
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: 学院内探索 一覧ページ HTML骨格 (pages/exploration/index.html)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 02:02
- 実装: トップページ ヒーローエリア CSS アニメーション。hero-fade-up (fade + translateY) をサブタイトル・タイトル・装飾ライン・タグライン・CTAに時差適用。prefers-reduced-motion 対応済み
- レビュー: 指摘1件対応 (A-1: to キーフレームから opacity:1 を除去し tagline の opacity:0.8 が正しく保持されるよう修正)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ ニュース一覧区切り線の color-mix 半透明化・最終アイテム非表示 [todo]
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 01:02
- 実装: トップページ 世界観に基づく配色・タイポグラフィの適用。ヒーロー背景に emerald の薄い光彩 (radial-gradient + color-mix)、title に font-weight/letter-spacing 追加、ブラス装飾ライン (hero__ornament) をタイトル下に挿入
- レビュー: OK (指摘2件いずれも誤検知・対応不要)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ ヒーローエリアの簡易アニメーション(CSSのみ)
- blocked / partial: なし
- asset-pending: なし

## 2026-07-25 00:04
- 実装: トップページ レスポンシブ対応 (styles/index.css にメディアクエリ追加。768px / 400px の2段階)
- レビュー: OK (指摘2件いずれも誤検知・対応不要)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ 世界観に基づく配色・タイポグラフィの適用
- blocked / partial: なし
- asset-pending: なし

## 2026-07-24 22:13
- 実装: トップページ HTML骨格 (pages/index.html + styles/index.css)。ヒーローエリア・ニュースセクション(`<!-- NEWS -->` プレースホルダー含む)を追加
- レビュー: 指摘2件対応 (A-1: ROADMAP todo追記 / A-2: 対応不要)
- lint: ✓ / lint:css: ✓ / test: ✓ / build: ✓
- 次回予定: トップページ レスポンシブ対応 または 世界観に基づく配色・タイポグラフィの適用
- blocked / partial: なし
- asset-pending: なし
