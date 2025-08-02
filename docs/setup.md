# セットアップ

開発を始めるために必要なツールをインストールします。

## Homebrew

macOS用のパッケージマネージャーであるHomebrewをインストールします。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### パスの設定

インストール後、`brew`コマンドをターミナルで使えるようにするために、パスを設定する必要があります。

インストールスクリプトの最後に表示される「**Next steps:**」の指示に従い、表示されたコマンドを実行してください。通常、以下のようなメッセージとコマンドが表示されます。

```text
Run these commands in your terminal to add Homebrew to your PATH:
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/your_username/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"
```

::: tip
上記のコマンドは一例です。ご自身の環境に合わせて、ターミナルに表示されたコマンドをコピー＆ペーストして実行してください。
:::

一般的な設定コマンドは以下の通りです。ご利用のシェルに合わせて実行してください。

::: code-group

```bash [~/.zprofile (zsh)]
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

```bash [~/.bash_profile (bash)]
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bash_profile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

:::

設定後、ターミナルを再起動するか、新しいタブを開いて以下のコマンドを実行し、バージョン情報が表示されれば正しく設定されています。

```bash
brew --version
```

## Python

プログラミング言語Pythonをインストールします。

```bash
brew install python
```

インストール後、バージョンを確認します。

```bash
python3 --version
```

## Git

ソースコードのバージョン管理ツールであるGitをインストールします。

```bash
brew install git
```

インストール後、バージョンを確認します。

```bash
git --version
```

## GitのSSH接続設定

GitHubと安全に通信するために、SSHキーを設定します。

### 1. SSHキーの生成とコピー

以下のコマンドを一度実行するだけで、SSHキーが生成され、その内容（公開鍵）が自動的にクリップボードにコピーされます。

```bash
/bin/bash -c "
set -euo pipefail

mkdir -p ~/.ssh && ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa && pbcopy < ~/.ssh/id_rsa.pub
cat << EOF >> ~/.ssh/config
Host github.com
  HostName github.com
  User git
  Port 22
  IdentityFile ~/.ssh/id_rsa
  TCPKeepAlive yes
  IdentitiesOnly yes
EOF"
```

### 2. GitHubへの公開鍵の登録

次に、コピーした公開鍵をGitHubに登録します。

1. まず、こちらのページを開きます: [**GitHub SSH and GPG keys**](https://github.com/settings/keys)
2. 緑色の「**New SSH key**」ボタンをクリックします。
3. **Title**には、どのPCのキーか分かるような名前を自由に入力してください。（例: `My MacBook Pro`）
4. **Key type**は「Authentication Key」のままで変更しません。
5. **Key**と書かれた大きなテキストボックスの中をクリックし、`Command + V` を押して、先ほどクリップボードにコピーした公開鍵を貼り付けます。
6. 最後に「**Add SSH key**」ボタンをクリックして保存します。

### 3. 接続の確認

最後に、以下のコマンドを実行して、GitHubとのSSH接続が成功するか確認します。

```bash
ssh -T git@github.com
```

`Hi [あなたのユーザー名]! You've successfully authenticated...` というメッセージが表示されれば、設定は完了です。
（初回接続時には、フィンガープリントの確認を求められることがあります。その場合は `yes` と入力してください。）

## Gitのconfig設定

Gitでコミットする際に記録される、作者の情報を設定します。
以下のコマンドを実行して、ご自身のユーザー名とメールアドレスを設定してください。

::: warning
`""`の中身をそれぞれ自分の値に書き換えてください。
:::

```bash
# ユーザー名を設定します。""の中をご自身のGithubに登録した名前に変更してください。
git config --global user.name "Your Name"

# メールアドレスを設定します。""の中をGitHubに登録しているメールアドレスに変更してください。
git config --global user.email "you@example.com"
```
