# 王立魔法学院アルノルド — Loop Engineering スターターキット

Claude Codeの `/loop` コマンドで、架空のテーマパーク「王立魔法学院アルノルド」の
公式サイトを自律開発させるためのプロジェクト一式です。

参考記事: [ループエンジニアリング](https://zenn.dev/green_tea/articles/e39e3726a449c9)

---

## 必要な環境

- Node.js(v18以上)
- Claude Code(インストール済みであること)
- Git

```bash
node -v
npm -v
claude --version
```

---

## ディレクトリ構成

```
theme-park-loop/
├── .claude/
│   ├── settings.json
│   └── skills/
│       ├── evolve/SKILL.md        # 1サイクルの手順定義
│       └── local-review/SKILL.md  # コミット前の客観レビュー
├── docs/
│   ├── ROADMAP.md         # AIのバックログ(人間が随時追記)
│   ├── roadmap-done.md    # 完了済みページ
│   ├── cycle-log.md       # サイクル履歴(自動生成)
│   ├── PALETTE.md         # カラーパレット台帳(承認制)
│   └── ASSET_REQUESTS.md  # イラスト・音声の依頼リスト
├── partials/
│   ├── header.html        # 共通ヘッダー
│   └── footer.html        # 共通フッター
├── pages/                 # 各ページのソース(HEADER/FOOTERはプレースホルダー)
│   ├── index.html
│   ├── exploration/index.html
│   ├── events/index.html
│   ├── shop/index.html
│   ├── dining/index.html
│   ├── tickets/index.html
│   ├── access/index.html
│   └── guide/index.html
├── styles/
│   ├── tokens.css         # コアカラー(CSS変数)
│   └── base.css
├── src/
│   └── logic.js           # 純粋関数(テスト対象。例: チケット計算)
├── tests/
│   ├── logic.test.js
│   └── footer-consistency.test.js
├── scripts/
│   └── build.js            # ヘッダー/フッター合体ビルドスクリプト
├── assets/
│   ├── images/             # Midjourney/ChatGPTで作成した画像を配置
│   └── audio/              # Irodori-TTSで作成した音声を配置
├── dist/                   # npm run build の出力先(gitignore対象)
├── eslint.config.js
├── vitest.config.js
├── .stylelintrc.json
├── package.json
└── .gitignore
```

---

## セットアップ手順

### 1. 依存パッケージのインストール

```bash
cd theme-park-loop
npm install
```

### 2. 初回動作確認

```bash
npm run lint      # JSのlint
npm run lint:css  # CSSのlint(コアカラー以外の直接色指定を検出)
npm run test      # ユニットテスト+フッター構造テスト
npm run build     # dist/ に完成品HTMLを生成
```

すべて成功すればセットアップ完了です。

### 3. Gitの初期化・初回コミット

```bash
git init
git add .
git commit -m "init: project scaffold"
```

GitHubに繋ぐ場合はいつも通り `git remote add origin <repo>` を設定してください。

---

## ループの起動

```
/loop 2h /evolve
```

`This session only` を選択。ターミナルを開いている間、2時間おきに自動でサイクルが回ります。
様子を見て周期を変えたい場合は `2h` の部分を書き換えるだけで調整できます。

---

## 運用ルール(サマリ)

このプロジェクトには、通常のToDo管理に加えて3つの「非同期承認チャネル」があります。
ループはこれらに**提案を書くだけ**で、実行や確定は人間(あなた)が行います。

| チャネル | ファイル | 何を承認するか |
|---|---|---|
| 新規ページ | `docs/ROADMAP.md` の「新規ページ提案」欄 | サイト全体の構造に影響するページ追加 |
| アクセント色 | `docs/PALETTE.md` | コア4色以外の新しい配色 |
| 素材(画像・音声) | `docs/ASSET_REQUESTS.md` | Midjourney/ChatGPT/Irodori-TTSでの素材作成依頼 |

一方で、既存ページ内のエリアやカードを増やすこと(例: 学院内探索に新しいエリアを追加する)は
自由に行わせてよい、という区別にしています。

### 素材(イラスト・音声)の運用

1. ループが実装中に画像・音声が必要だと判断したら、実装は進めず `docs/ASSET_REQUESTS.md` に
   依頼(用途・配置先パス・想定ツール・プロンプトまたは台詞テキスト)を書く
2. その部分はプレースホルダーのまま実装を完了させ、コミットメッセージに `[asset-pending]` を含める
3. あなたが依頼を見て、Midjourney・ChatGPT・Irodori-TTSのいずれかで素材を作成し、指定パスに配置する
4. 次にそのタスクが巡ってきたとき、ループがプレースホルダーを実ファイルに差し替える

### 見なくていいこと・見るべきこと

- コミットログ・差分: 見なくてよい(1サイクル=1コミットなので、気になったときだけ`git diff main...HEAD`で読める)
- `docs/roadmap-done.md`: 手が空いたときに実際にページを開いて確認する
- `docs/PALETTE.md` の「提案中」・`docs/ASSET_REQUESTS.md` の「依頼中」: 定期的に見て承認/対応する
- `blocked`になったタスク: 緊急ではないので定期確認で十分(通知は設定していません)

---

## どこまでが「機械的に守られている」か

プロンプト(SKILL.md)の指示だけに頼っているルールは、AIが指示を見落とす・無視するリスクが
常に残ります。「本当に守らせたいものはプロンプトではなく機械検査にする」という考え方に基づき、
このプロジェクトでは以下の範囲をテスト・lintで機械的に強制しています。

| ルール | 機械的な強制方法 |
|---|---|
| ヘッダー/フッターの共通化 | `tests/footer-consistency.test.js` |
| 2階層ルール(3階層目の禁止) | `tests/hierarchy-depth.test.js` |
| コアカラーのみ使用(直接色指定の禁止) | `.stylelintrc.json` の `declaration-property-value-allowed-list` |
| 新しい色変数は`styles/tokens.css`以外で宣言できない | `.stylelintrc.json` の `overrides`(`declaration-property-disallowed-list`) |
| ページ完了時のmainへの自動取り込み | `.github/workflows/auto-merge.yml` + `scripts/check-roadmap-completion.js`(ROADMAP.mdの記述を比較する決定論的スクリプト。AIの自己判断ではない) |

一方で、以下は**現時点ではプロンプト任せ**です。あなたの環境で追加の設定をすれば、
さらに機械的に強制できます。

| ルール | 追加できる機械的な強制方法(未設定) |
|---|---|
| mainへの直接push禁止 | GitHub側のブランチ保護ルール(Require pull request, Restrict force pushes等)を設定する |
| テストが通っていない状態でのcommit禁止 | Huskyなどでpre-commitフックを設定し、`npm run check`を強制する |
| 1サイクル=1コミット | 機械的な強制は難しいため、`git log --oneline main..HEAD`での目視確認に頼る |
| 素材のプレースホルダー差し替え忘れ | プレースホルダーの画像/音声パスに特定の命名規則を設け、それを検出するテストを追加する余地あり |

このリストは完璧ではありません。運用しながら「プロンプトだけに頼っていて危ない箇所」を
見つけたら、都度この表に追記し、可能な範囲でテスト・lint・Git設定に落とし込んでください。

---

## 追加の機械的安全策のセットアップ(推奨)

上の表で「未設定」としたもののうち、特に効果が大きい2つの設定手順です。

### mainブランチへの直接push・force pushを禁止する(GitHub側の設定)

SKILL.mdの「禁止事項」に書くだけでは、AIが指示を無視したり見落としたりした場合に
防げません。GitHub側でリポジトリごと禁止しておくのが確実です。

1. GitHubのリポジトリページで **Settings** → **Branches** を開く
2. **Branch protection rules** の **Add rule**(または **Add branch ruleset**)をクリック
3. **Branch name pattern** に `main` を指定する
4. 以下を有効にする:
   - **Require a pull request before merging**(直接pushを禁止し、PR経由の取り込みを強制する)
   - **Do not allow force pushes**(force pushや履歴改変を禁止する)
   - 可能であれば **Restrict deletions**(mainブランチの削除を禁止する)
5. 保存する

**注意: 「Require approvals」(承認を必須にする設定)は有効にしないでください。**
GitHubは基本的にPR作成者本人がそのPRを承認することを許可していません。
一人で運用している個人リポジトリでこれを有効にすると、承認してくれる他の人がいないため
**永久にマージできなくなります**。「Require a pull request before merging」だけを
有効にすれば、直接pushの禁止という目的は果たせつつ、PRの差分を自分で読んで
自分でマージボタンを押す、という個人開発に合った運用になります。

これでevolveブランチからmainへの取り込みは、`git switch main && git merge evolve/...`
のような直接pushではなく、必ずPR経由になります。

**注意: 「PRを経由させる」設定だけでは、Claude Code(対話的にコードを書くAI
エージェント)自身がPRを作成してそのまま自分でマージしてしまう可能性を防げません。**
`gh pr create` と `gh pr merge` はどちらも「直接push」ではないため、ブランチ保護の
対象外だからです。Claude Codeを動かす環境にGitHubへの書き込み権限を持つ認証
(`gh auth login`やPersonal Access Tokenなど)を設定してしまうと、AIはその認証を
使ってマージまで自動で完了できてしまいます。

このプロジェクトでは、後述の通り**mainへの自動マージ自体は行います**
(ページが完成したら自動で取り込む設計にしています)。ただし、それを実行するのは
**GitHub Actions上の、内容を完全に読める決定論的なスクリプト
(`scripts/check-roadmap-completion.js` と `.github/workflows/auto-merge.yml`)**
であり、Claude Code(対話的に何でも指示できるAIエージェント)ではありません。
この2つは全く別の主体です。

- **Claude Code(evolveループ)**: マージを実行できる認証情報を絶対に持たせない。
  `gh auth login` は行わない、書き込み用のPersonal Access Tokenも設定しない。
  push(ブランチの作成・更新)だけができる状態に留める
- **GitHub Actions(auto-mergeワークフロー)**: `docs/ROADMAP.md` の記述という
  「データ」を機械的に比較した結果でのみ動く、あなたが全文を読んで把握できる
  固定ロジックのスクリプト。ここにだけ、GitHub側が自動発行する
  `GITHUB_TOKEN` によるマージ権限を与える

つまり「AIが気分や自己判断でマージする」ことは無いけれど、「ROADMAP.mdのページが
完了したという、機械的に検証可能な条件を満たしたら自動でマージされる」ことは起きる、
という設計です。

### mainへの取り込みは自動化されている

`.github/workflows/auto-merge.yml` が、evolveブランチへのpushをきっかけに
`docs/ROADMAP.md` を確認し、**origin/mainと比較して新たに`[status: 完了]`に
なったページがあれば、mainへのPRを自動作成してそのまま自動マージ**します。
バグ修正や共通パーツの改善など、ページの完了に紐づかないタスクは、
次にどこかのページが完了したタイミングでまとめて一緒に取り込まれます
(専用のトリガーは用意していません)。

**未完成の他ページが多少含まれた状態でmainに反映されることがありますが、
このプロジェクトでは実害が無いものとして許容しています。**
テストや`local-review`の指摘が残っていても、ページ完了の条件を満たせば
関係なく自動マージされます。見た目の粗さが気になったら、`docs/roadmap-done.md`
や実際のページを見て、気になった点はバグ修正としてROADMAPに追記してください。

有効にする手順:

1. GitHubのリポジトリページで **Settings** → **Actions** → **General** を開く
2. **Workflow permissions** で **Read and write permissions** を選択する
3. **Allow GitHub Actions to create and approve pull requests** にチェックを入れる
   (これが無いと、ワークフローが `gh pr create` を実行できません)
4. 保存する

これで、evolveブランチにpushされるたびに自動でチェックが走り、ページが完成すれば
自動的にmainへ反映されます。**あなたが手動でPRを作ったりマージボタンを押す必要は
ありません。**

それでも、evolveブランチが好ましくない方向に進みすぎた、あるいは自動マージされた
内容が気に入らなかった場合は、以下のように手動で介入できます。

- マージ前(evolveブランチの段階): `git log --oneline main..evolve/cycle-N` で
  内容を確認し、気に入らないコミットを `git revert` で取り除いてからpushし直す
  (次のpushで改めてauto-mergeの判定が走ります)
- マージ後(mainに入ってしまった後): 通常のGitと同様に `git revert` でmain上の
  該当コミットを取り除く(このPRだけの取り消しになるので、他の変更には影響しません)

### GitHub Pagesで公開する(任意)

`.github/workflows/deploy.yml` を用意してあります。これは**mainにpushされた
(=取り込まれた)タイミングで自動的に`npm run build`を実行し、`dist/`の内容を
GitHub Pagesにデプロイする**ワークフローです。`dist/`自体はコミット不要
(ワークフローがその都度ビルドし直します)。

有効にする手順:

1. GitHubのリポジトリページで **Settings** → **Pages** を開く
2. **Build and deployment** の **Source** を **GitHub Actions** に変更する
3. 保存すれば設定完了です。以降、mainにpushされるたびに自動でデプロイされます

これで、evolveブランチでの作業中は公開サイトに影響を与えず、
**ページが完成してmainに自動で取り込まれた瞬間だけ、公開サイトが更新される**
という、ちょうど良い区切りができます。公開URLはリポジトリの
**Settings** → **Pages** に表示されます。

### commit前に自動でテスト・lint・buildを走らせる(pre-commitフック)

SKILL.mdの手順(3節)ではテスト成功後にコミットするよう指示していますが、
これも「AIが手順を1つ飛ばす」リスクをゼロにはできません。Huskyでpre-commitフックを
設定すると、テストが1つでも失敗している状態ではローカルでcommit自体ができなくなります。

```bash
# 依存パッケージのインストール(package.jsonのdevDependenciesに追加済みの前提)
npm install --save-dev husky

# .husky/ ディレクトリと pre-commit フックを初期化
npx husky init
```

`npx husky init` を実行すると、`package.json` に `"prepare": "husky"` が追記され、
`.husky/pre-commit` というファイルが作成されます(内容は `npm test` になっています)。
このプロジェクトではlint・CSS lint・テスト・buildの全てを通したいので、内容を
以下のように書き換えてください。

```bash
# .husky/pre-commit
npm run check
```

保存したら、`.husky/` ディレクトリごとGitにコミットしてください
(`.gitignore` には含めていないので、そのままコミットできます)。
以降、`npm run check`(lint・lint:css・test・build)が1つでも失敗すると、
そのcommitはローカルで自動的に拒否されます。
