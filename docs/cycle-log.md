# サイクル履歴

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
