# git commit

`git commit` は、ステージングエリアに追加された変更を、ローカルリポジトリに記録（保存）するためのコマンドです。

コミットは、作業の区切りごとに行うのが一般的です。各コミットには、変更内容を要約した「コミットメッセージ」を付与します。

## 基本的な使い方

```bash
git commit -m "<your_commit_message>"
```

`-m` オプションに続けて、変更内容を要約したメッセージを記述します。

## Conventional Commits

私たちのチームでは、コミットメッセージの規約として [**Conventional Commits**](https://www.conventionalcommits.org/ja/v1.0.0/) を採用しています。

これにより、コミット履歴が読みやすくなり、変更内容の意図が伝わりやすくなります。

メッセージの基本的なフォーマットは以下の通りです。

```
<type>[optional scope]: <description>
```

### Type

コミットの種類を表す `type` には、主に以下のものを使います。

- `feat`: 新機能の追加
- `fix`: バグ修正
- `docs`: ドキュメントのみの変更
- `style`: コードの動作に影響しない、スタイルに関する変更（フォーマット、セミコロンなど）
- `refactor`: バグ修正や機能追加ではない、コードの内部構造の変更
- `perf`: パフォーマンスを向上させるための変更
- `test`: テストの追加・修正
- `chore`: ビルドプロセスや補助ツール、ライブラリの変更など（ソースコードの変更を含まない）

### Description

`description` には、変更内容の簡潔な説明を記述します。

### コミットメッセージの例

```bash
# 新機能（ログインフォーム）を追加した場合
git commit -m "feat: add login form"

# ドキュメント（README）を更新した場合
git commit -m "docs: update README.md"

# バグ（タイポ）を修正した場合
git commit -m "fix: correct a typo in the login button"
```

## VSCode

