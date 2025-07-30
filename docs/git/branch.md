# ブランチの操作

Gitのブランチ機能を使うことで、`main`ブランチの安定性を保ちながら、複数の開発作業を並行して安全に進めることができます。

## ブランチの命名規則

ブランチ名は、そのブランチで行う作業内容がひと目で分かるように命名します。
私たちのチームでは、以下のプレフィックスを推奨しています。

- `feat/`: 新機能の開発 (例: `feat/user-profile`)
- `fix/`: バグ修正 (例: `fix/login-error`)
- `docs/`: ドキュメントの作成・修正 (例: `docs/add-usage-guide`)

## git branch

`git branch` は、ブランチの一覧表示、作成、削除など、ブランチを管理するための基本的なコマンドです。

```bash
# ブランチの一覧を表示する
git branch

# 新しいブランチを作成する
git branch <branch_name>

# ブランチを削除する
git branch -d <branch_name>
```

## git switch

`git switch` は、ブランチを切り替えるためのコマンドです。

```bash
# 既存のブランチに切り替える
git switch <branch_name>

# 新しいブランチを作成して、すぐにそのブランチに切り替える
git switch -c <new_branch_name>
```

## git checkout (旧コマンド)

`git checkout` は、ブランチの切り替えや、ファイルの変更を元に戻すなど、多機能なコマンドです。

以前はブランチの切り替えに `git checkout` が使われていましたが、近年のGitでは役割が明確な `git switch` の使用が推奨されています。

```bash
# ブランチを切り替える (古い方法)
git checkout <branch_name>

# 新しいブランチを作成して切り替える (古い方法)
git checkout -b <new_branch_name>
```

::: warning
私たちのプロジェクトでは、ブランチの切り替えには `git switch` を使うことを推奨します。
`git checkout` は、ファイルの変更を取り消す際などに限定して使用しましょう。
:::

## VSCode

