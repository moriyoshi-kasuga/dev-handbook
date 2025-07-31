# トラブルシューティング

Gitを使っていると、様々なエラーに遭遇することがあります。ここでは、初心者がよく遭遇するエラーとその対処法を紹介します。

## よくあるエラーと対処法

### 1. fatal: not a git repository

```bash
fatal: not a git repository (or any of the parent directories): .git
```

**原因**: Gitリポジトリではないディレクトリでgitコマンドを実行した

**対処法**:

```bash
# 現在のディレクトリをGitリポジトリとして初期化
git init

# または、既存のリポジトリをクローン
git clone <リポジトリのURL>
```

### 2. コミット時のエラー

#### Author identity unknown

```bash
Author identity unknown

*** Please tell me who you are.
```

**原因**: Gitのユーザー設定が完了していない

**対処法**:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. プッシュ時のエラー

#### rejected - non-fast-forward

```bash
! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'github.com:username/repository.git'
```

**原因**: リモートリポジトリに自分のローカルにない変更がある

**対処法**:

```bash
# まずリモートの変更を取り込む
git pull origin main

# コンフリクトがあれば解決してからプッシュ
git push origin main
```

#### Permission denied (publickey)

```bash
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
```

**原因**: SSH認証が正しく設定されていない

**対処法**:

1. SSH接続の確認

```bash
ssh -T git@github.com
```

2. SSHキーが正しく設定されていない場合は、[セットアップガイド](/setup#gitのssh接続設定)を参照

### 4. マージコンフリクト

```bash
Auto-merging file.txt
CONFLICT (content): Merge conflict in file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**原因**: 同じファイルの同じ部分を複数人が変更した

**対処法**:

1. コンフリクトが発生したファイルを開く
2. コンフリクトマーカーを確認

```
<<<<<<< HEAD
あなたの変更
=======
他の人の変更
>>>>>>> branch-name
```

3. 必要な変更を選択してマーカーを削除
4. ファイルを保存してコミット

```bash
git add file.txt
git commit -m "コンフリクトを解決"
```

### 5. ファイルを間違えて削除した

**対処法**:

```bash
# 最新のコミットから復元
git checkout HEAD -- <ファイル名>

# または、特定のコミットから復元
git checkout <コミットID> -- <ファイル名>
```

### 6. 直前のコミットを修正したい

#### コミットメッセージを変更したい

```bash
git commit --amend -m "新しいコミットメッセージ"
```

#### コミットに含め忘れたファイルを追加したい

```bash
git add <忘れたファイル>
git commit --amend --no-edit
```

::: warning
`--amend`はプッシュ済みのコミットには使用しないでください。履歴が変更されるため、他の人の作業に影響を与える可能性があります。
:::

### 7. 変更を一時的に退避したい

```bash
# 現在の変更を退避
git stash

# 退避した変更を戻す
git stash pop
```

## エラーが解決しない場合

1. **エラーメッセージを読む**: エラーメッセージには解決のヒントが含まれています
2. **現在の状態を確認**: `git status`で現在の状態を確認
3. **ログを確認**: `git log --oneline -10`で最近のコミット履歴を確認
4. **チームメンバーに相談**: 一人で悩まず、経験者に相談しましょう

## 予防のためのベストプラクティス

- こまめにコミットする
- プッシュ前に`git pull`を実行する
- ブランチを活用して作業を分離する
- 重要な変更前は`git status`で状態を確認する
