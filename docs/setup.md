# セットアップ

開発を始めるために必要なツールをインストールします。

## Homebrew

macOS用のパッケージマネージャーであるHomebrewをインストールします。
以下のコマンドをターミナルに貼り付けて実行すると、インストールとPATHの設定が一度に行えます。

```bash
# Homebrewをインストールし、PATHを設定します。

# 途中でパスワードの入力が求められます。
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# --- HomebrewのPATH設定 ---
# Apple Silicon Mac (M1, M2, M3など) を想定しています。
# eval "$(/opt/homebrew/bin/brew shellenv)" をシェルの設定ファイルに追記し、現在のセッションにも反映させます。
if [[ "$SHELL" == *"zsh"* ]]; then
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zshrc
elif [[ "$SHELL" == *"bash"* ]]; then
    echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.bashrc
else
    echo "お使いのシェルはzshまたはbashではないようです。手動でPATHを設定してください。"
fi
eval "$(/opt/homebrew/bin/brew shellenv)"
```

## Git

ソースコードのバージョン管理ツールであるGitをインストールします。

```bash
brew install git
```

## Python

プログラミング言語Pythonをインストールします。

```bash
brew install python
```

以上で開発環境の準備は完了です。
