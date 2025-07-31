# コミット

コミットは、変更を保存して履歴に記録することです。「今の状態を写真に撮って保存する」ようなイメージです。

## git commit の基本

ステージングした変更をコミットする基本的な方法：

```bash
git commit -m "変更内容の説明"
```

### 実践例

```bash
# 1. ファイルを編集
# main.py を編集してバグを修正

# 2. ステージング
git add main.py

# 3. コミット
git commit -m "fix: ログイン時のバグを修正"
```

## なぜコミットメッセージが重要？

コミットメッセージは、後から見たときに「何をしたか」を思い出すためのメモです。

**悪い例：**

```bash
git commit -m "修正"
git commit -m "更新"
git commit -m "変更"
```

**良い例：**

```bash
git commit -m "fix: ログイン画面でパスワードが表示される問題を修正"
git commit -m "feat: ユーザー検索機能を追加"
git commit -m "docs: セットアップ手順を更新"
```

## Conventional Commits

チームで統一されたコミットメッセージを書くために、**Conventional Commits**という規約を使います。

### 基本的な形式

```
<type>: <description>
```

- `type`：何をしたかの種類
- `description`：具体的な説明（日本語でOK）

::: tip scope（スコープ）について
Conventional Commitsには`<type>(<scope>): <description>`のようにスコープを付けることもできます（例：`feat(auth): ログイン機能を追加`）。しかし、スコープを適切に設定するのは難しく、optionalなのでつけなくても全然大丈夫です。
:::

### よく使うtype一覧

| type | 意味 | 例 |
|------|------|-----|
| `feat` | 新機能追加 | `feat: ユーザー登録機能を追加` |
| `fix` | バグ修正 | `fix: ログインできない問題を修正` |
| `docs` | ドキュメント変更 | `docs: README に環境構築手順を追加` |
| `style` | コードスタイル変更 | `style: インデントを統一` |
| `refactor` | コード整理 | `refactor: 関数名をわかりやすく変更` |
| `test` | テスト関連 | `test: ログイン機能のテストを追加` |
| `chore` | その他の作業 | `chore: パッケージを更新` |

### 実際の使用例

```bash
# 新しい機能を追加した場合
git commit -m "feat: パスワード強度チェック機能を追加"

# バグを修正した場合
git commit -m "fix: 画像が表示されない問題を修正"

# ドキュメントを更新した場合
git commit -m "docs: API仕様書を更新"

# コードを整理した場合
git commit -m "refactor: 重複したコードを関数に統合"

# テストを追加した場合
git commit -m "test: 計算機能のユニットテストを追加"
```

## コミットのタイミング

### いつコミットする？

- 機能が完成したとき
- バグを1つ修正したとき
- 区切りの良いところで
- 1日の作業終了時

### どのくらいの頻度で？

```bash
# 悪い例：1日分の作業をまとめてコミット
git commit -m "feat: ユーザー機能全部実装、バグ修正、テスト追加"

# 良い例：小さな単位でコミット
git commit -m "feat: ユーザー登録機能を追加"
git commit -m "fix: 登録時のバリデーションエラーを修正"
git commit -m "test: ユーザー登録のテストを追加"
```

## コミットの修正

### 直前のコミットメッセージを修正

```bash
# コミット直後に「メッセージが間違ってた！」という場合
git commit --amend -m "正しいコミットメッセージ"
```

### コミットに含め忘れたファイルを追加

```bash
# ファイルを追加してコミットを修正
git add 忘れたファイル.py
git commit --amend --no-edit
```

::: warning 注意
`--amend`は、まだプッシュしていないコミットにのみ使用してください。プッシュ済みのコミットを修正すると、他のメンバーに迷惑をかける可能性があります。
:::

## コミット履歴の確認

### 基本的な履歴表示

```bash
# 最新のコミット履歴を10件、1行で表示
git log --oneline -10

# 出力例：
# abc1234 (HEAD -> feature/new, origin/feature/new) feat: ユーザー検索機能を追加
# def5678 (origin/main, main) fix: ログインエラーを修正
# ghi9012 docs: README を更新
```

### より詳細な履歴表示

```bash
# ブランチの分岐やマージの様子をグラフで表示
git log --graph --oneline --decorate --all -10

# 出力例：
# *   e1b2c3d (HEAD -> main, origin/main) Merge branch 'feature/login'
# |\  
# | * a1b2c3d (origin/feature/login) feat: ログイン機能のテストを追加
# | * d4e5f6g feat: ログインフォームを作成
# |/
# * h7i8j9k docs: 初期ドキュメントを追加
```

## よくある質問

### Q: どのくらい詳細に書けばいい？

A: 他の人（未来の自分も含む）が理解できる程度に：

```bash
# 簡潔すぎる
git commit -m "fix: バグ修正"

# 適切
git commit -m "fix: ログイン画面でパスワードが見える問題を修正"

# 詳細すぎる
git commit -m "fix: ログイン画面でinput要素のtype属性がtextになっていたのをpasswordに修正し、CSS でマスク表示するようにし、セキュリティテストも追加した"
```

### Q: 英語で書かないといけない？

A: このチームでは日本語でOKです：

```bash
git commit -m "feat: ユーザー削除機能を追加"
git commit -m "fix: 日本語文字化けを修正"
```

### Q: コミットを間違えた場合は？

A: 以下の方法があります：

```bash
# 直前のコミットなら
git commit --amend -m "正しいメッセージ"

# 複数前のコミットなら（上級者向け）
git rebase -i HEAD~3
```

## 実践的なワークフロー

1. **変更を加える**

```bash
# ファイルを編集
```

2. **変更内容を確認**

```bash
git status
git diff
```

3. **ステージング**

```bash
git add 変更したファイル.py
```

4. **コミット**

```bash
git commit -m "feat: 新機能の説明"
```

5. **履歴確認**

```bash
git log --oneline -5
```

## VSCode