# リモートリポジトリとの連携

ローカルリポジトリ（自分のPC）での作業が完了したら、その変更をGitHub上のリモートリポジトリ（チームで共有する場所）に反映させる必要があります。

## git fetch

`git fetch` は、リモートリポジトリの最新情報を取得するコマンドです。ただし、取得するだけで、ローカルのファイルには何も変更を加えません。

リモートリポジトリにどのような変更があったかを、マージする前に確認したい場合などに使います。

```bash
# originという名前のリモートリポジトリの最新情報を取得する
git fetch origin
```

## git pull

`git pull` は、リモートリポジトリの最新の変更内容を、現在のブランチにダウンロードして統合（マージ）するコマンドです。

内部的には `git fetch` を実行した後に `git merge` を実行するのと同じです。

作業を始める前や、`push` する前には、まず `pull` を実行して、他の人の変更と競合（コンフリクト）が起きないか確認するのが安全な進め方です。

```bash
git pull <remote_name> <branch_name>
```

**例:**

```bash
# originというリモートリポジトリのmainブランチの最新内容を取得してマージする
git pull origin main
```

## git push

`git push` は、ローカルでコミットした変更をリモートリポジトリにアップロードするためのコマンドです。

```bash
git push <remote_name> <branch_name>
```

**例:**

```bash
# feat/loginブランチの変更を、originというリモートリポジトリにプッシュする
git push origin feat/login
```

`git push` が成功すると、GitHub上で「プルリクエスト（Pull Request）」を作成できるようになります。

## VSCode

