# ステージング

Gitで変更を保存（コミット）する前に、どのファイルを保存するか選ぶ必要があります。この「選ぶ」作業をステージングと呼びます。

## なぜステージングが必要？

例えば、3つのファイルを編集したとき：
- ファイルA：バグ修正
- ファイルB：新機能追加
- ファイルC：まだ作業中

この場合、ファイルAとBだけを保存して、Cは後で保存したいことがあります。ステージングを使えば、保存したいファイルだけを選べます。

## git status - 現在の状態を確認

`git status`は、今どんな変更があるかを教えてくれるコマンドです。

```bash
git status
```

### 表示される情報

```bash
# ステージング済み（緑色で表示）
Changes to be committed:
  modified:   file1.py

# まだステージングしていない変更（赤色で表示）
Changes not staged for commit:
  modified:   file2.py
  
# Gitが管理していない新しいファイル（赤色で表示）
Untracked files:
  new_file.py
```

## git add - ファイルをステージング

`git add`は、ファイルをステージングエリアに追加するコマンドです。

### 基本的な使い方

```bash
# 1つのファイルを追加
git add ファイル名.py

# 複数のファイルを追加
git add file1.py file2.py

# 全ての変更を追加
git add .

# 特定の拡張子のファイルだけ追加
git add *.py
```

### 実践例

1. **まず現在の状態を確認**
```bash
git status
# 出力例：
# Changes not staged for commit:
#   modified:   main.py
#   modified:   utils.py
# Untracked files:
#   test.py
```

2. **特定のファイルだけステージング**
```bash
git add main.py
git status
# 出力例：
# Changes to be committed:
#   modified:   main.py
# Changes not staged for commit:
#   modified:   utils.py
# Untracked files:
#   test.py
```

3. **残りのファイルも追加**
```bash
git add utils.py test.py
git status
# 出力例：
# Changes to be committed:
#   modified:   main.py
#   modified:   utils.py
#   new file:   test.py
```

## ステージングの取り消し

間違えてファイルを追加してしまった場合：

```bash
# 特定のファイルのステージングを取り消し
git restore --staged ファイル名.py

# 全てのステージングを取り消し
git restore --staged .
```

::: warning 注意
`git reset`でも同じ結果を得られますが、resetは多機能で意図しない操作を行ってしまう可能性があります。ステージング取り消しには専用の`git restore --staged`を使用してください。
:::

## よくある質問

### Q: `git add .`と`git add -A`の違いは？

A: ほぼ同じですが、実行する場所によって動作が異なる場合があります：
- `git add .`：現在のディレクトリ以下の変更を追加
- `git add -A`：プロジェクト全体の変更を追加

初心者は`git add .`を使うことをおすすめします。

### Q: どのファイルをステージングしたか忘れた

A: `git status`を実行すれば、緑色で表示されるファイルがステージング済みです。

### Q: 変更を確認してからステージングしたい

A: `git diff`で変更内容を確認できます：
```bash
# ステージング前の変更を確認
git diff

# ステージング済みの変更を確認
git diff --staged
```

## 実践的なワークフロー

1. **作業開始前に状態確認**
```bash
git status
```

2. **ファイルを編集**

3. **変更内容を確認**
```bash
git status
git diff
```

4. **必要なファイルをステージング**
```bash
git add 必要なファイル.py
```

5. **ステージング内容を最終確認**
```bash
git status
git diff --staged
```

6. **コミット**（次のページで詳しく説明）
```bash
git commit -m "変更内容の説明"
```

## .gitignoreファイル

Gitで管理したくないファイルがある場合、`.gitignore`ファイルを使って除外できます。

### .gitignoreが必要な理由

以下のようなファイルは、通常Gitで管理しません：
- 個人の設定ファイル（`.vscode/settings.json`）
- 機密情報（パスワード、APIキー）
- 自動生成されるファイル（`__pycache__/`、`node_modules/`）
- 一時ファイル（`.DS_Store`、`*.tmp`）

### .gitignoreの作成方法

プロジェクトのルートディレクトリに`.gitignore`ファイルを作成します：

```bash
# .gitignore ファイルを作成
touch .gitignore
```

### Pythonプロジェクトの.gitignore例

```gitignore
# Python関連
__pycache__/
*.py[cod]
*$py.class
*.so
venv/
env/
.env

# IDE関連
.vscode/
.idea/
*.swp
*.swo

# OS関連
.DS_Store
Thumbs.db

# ログファイル
*.log

# 設定ファイル（個人情報含む場合）
config.local.py
secrets.json
```

### よく使うパターン

```gitignore
# 特定のファイル
secret.txt

# 特定の拡張子
*.log
*.tmp

# 特定のディレクトリ
logs/
temp/

# 特定のディレクトリ内の特定ファイル
config/*.local

# 例外（!で指定したものは除外しない）
*.log
!important.log
```

### .gitignoreの確認

```bash
# 無視されるファイルを確認
git status --ignored

# 特定のファイルが無視されるかチェック
git check-ignore ファイル名
```

::: warning 重要な注意点
`.gitignore`は、**まだGitで管理されていないファイル**にのみ効果があります。すでに`git add`したファイルは、`.gitignore`に追加しても無視されません。

すでに管理されているファイルを無視したい場合：
```bash
# Gitの管理から削除（ファイル自体は残る）
git rm --cached ファイル名

# .gitignoreに追加
echo "ファイル名" >> .gitignore

# 変更をコミット
git add .gitignore
git commit -m "chore: .gitignoreにファイル名を追加"
```
:::

### GitHub提供の.gitignoreテンプレート

GitHubでは、言語やフレームワーク別の`.gitignore`テンプレートを提供しています：
- Python: https://github.com/github/gitignore/blob/main/Python.gitignore
- Node.js: https://github.com/github/gitignore/blob/main/Node.gitignore
- Java: https://github.com/github/gitignore/blob/main/Java.gitignore

新しいリポジトリを作成する際に、適切なテンプレートを選択できます。

## VSCode
