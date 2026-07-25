# 素材依頼リスト

イラスト・音声はループが自動生成しません。実装中にこれらが必要だと判断した場合、
ループは以下の「依頼中」に依頼を1件追記し、プレースホルダーで実装を進めます。
人間(あなた)がMidjourney・ChatGPT・Irodori-TTSのいずれかで素材を作成し、
指定された配置先パスにファイルを置いてください。

## 依頼中(未対応)

### REQ-007 [type: image]
- 用途: トップページ — ヒーローエリア背景画像
- 配置先パス: assets/images/hero-top.jpg
- 想定ツール: Midjourney
- 提案プロンプト: A vast steampunk magical academy campus at dusk, wide panoramic establishing shot, grand stone towers with brass clockwork mechanisms and glowing emerald magical windows, cobblestone courtyards, no characters, cinematic painterly illustration, dark navy sky with warm amber lights --ar 16:5 --style raw
- 補足: 全幅×450px前後のヒーロービジュアル。現状は `background-image: linear-gradient(...)` で代替中。画像を配置したらページ側の CSS を差し替えること(background-image に url() を追加、グラデーション重ねがけ可)。コアカラー(--ink/#14161f・--emerald/#1f5c4a・--brass/#b08d57)に溶け込むダーク寄りのトーンで。

## 対応済み

### REQ-001 [type: image]
- 用途: 学院内探索 一覧ページ — 錬金術研究棟カードのサムネイル
- 配置先パス: assets/images/exploration/thumb-alchemy-tower.jpg

### REQ-002 [type: image]
- 用途: 学院内探索 一覧ページ — 飛行船ドックカードのサムネイル
- 配置先パス: assets/images/exploration/thumb-airship-dock.jpg

### REQ-003 [type: image]
- 用途: 学院内探索 一覧ページ — 魔法陣召喚広場カードのサムネイル
- 配置先パス: assets/images/exploration/thumb-summoning-plaza.jpg

### REQ-004 [type: image]
- 用途: 錬金術研究棟ページ — エリアヒーローバナー
- 配置先パス: assets/images/exploration/hero-alchemy-tower.jpg

### REQ-005 [type: image]
- 用途: 飛行船ドックページ — エリアヒーローバナー
- 配置先パス: assets/images/exploration/hero-airship-dock.jpg

### REQ-006 [type: image]
- 用途: 魔法陣召喚広場ページ — エリアヒーローバナー
- 配置先パス: assets/images/exploration/hero-summoning-plaza.jpg

---

## 依頼の書き方(ループ向けフォーマット)

```
### REQ-XXX [type: image | audio]
- 用途:
- 配置先パス: assets/images/... または assets/audio/...
- 想定ツール: Midjourney / ChatGPT / Irodori-TTS
  (実写風・雰囲気重視ならMidjourney、シンプルなUI装飾やアイコンならChatGPTを
   目安に判断すること)
- 提案プロンプト(画像の場合)または台詞テキスト(音声の場合):
- 補足: (コアカラーとの整合性、声質のイメージなど)
```

### Irodori-TTSの絵文字感情タグ

台詞テキストに絵文字を混ぜることで感情を指定できる。使用可能な絵文字は以下の通り。
ここに無い絵文字は使わないこと(ループは外部サイトを参照できないため、このリストが唯一の正)。

| 絵文字 | 感情・スタイル |
|---|---|
| 👂 | 囁き、耳元の音 |
| 😮‍💨 | 吐息、溜息、寝息 |
| ⏸️ | 間、沈黙 |
| 🤭 | 笑い(くすくす、含み笑いなど) |
| 🥵 | 喘ぎ、うめき声、唸り声 |
| 📢 | エコー、リバーブ |
| 😏 | からかうように、甘えるように |
| 🥺 | 声を震わせながら、自信のなさげに |
| 🌬️ | 息切れ、荒い息遣い、呼吸音 |
| 😮 | 息をのむ |
| 👅 | 舐める音、咀嚼音、水音 |
| 💋 | リップノイズ |
| 🫶 | 優しく |
| 😭 | 嗚咽、泣き声、悲しみ |
| 😱 | 悲鳴、叫び、絶叫 |
| 😪 | 眠そうに、気だるげに |
| ⏩ | 早口、一気にまくしたてる、急いで |
| 📞 | 電話越し、スピーカー越しのような音 |
| 🐢 | ゆっくりと |
| 🥤 | 唾を飲み込む音 |
| 🤧 | 咳き込み、鼻をすする、くしゃみ、咳払い |
| 😒 | 舌打ち |
| 😰 | 慌てて、動揺、緊張、どもり |
| 😆 | 喜びながら |
| 😠 | 怒り、不満げに、拗ねながら |
| 😲 | 驚き、感嘆 |
| 🥱 | あくび |
| 😖 | 苦しげに |
| 😟 | 心配そうに |
| 🫣 | 恥ずかしそうに、照れながら |
| 🙄 | 呆れたように |
| 😊 | 楽しげに、嬉しそうに |
| 👌 | 相槌、頷く音 |
| 🙏 | 懇願するように |
| 🥴 | 酔っ払って |
| 🎵 | 鼻歌 |
| 🤐 | 口を塞がれて |
| 😌 | 安堵、満足げに |
| 🤔 | 疑問の声 |

学院の世界観(格式高い・落ち着いた案内人風)には、悲鳴・怒り・喘ぎ・酔っ払いなど
激しく世界観から外れる感情タグは、台詞の用途上必要な場合(コミカルなキャラクターの
セリフ等、明確な理由がある場合)を除き基本的に使わないこと。

それ以外の絵文字は、台詞の文脈に応じてその都度表全体から検討して選ぶこと。
**特定の数個の絵文字(例: 😊や🤔)ばかりに偏らないよう注意する。**
サイクルごとに同じ組み合わせを繰り返すと、ナレーション全体が単調になってしまう。
