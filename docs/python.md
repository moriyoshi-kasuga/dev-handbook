# Pythonの基本

このセクションでは、Pythonの基本的な書き方や文法について学びます。

## Pythonとは

Pythonは、シンプルで読みやすい文法が特徴のプログラミング言語です。Webアプリケーション開発、データ分析、機械学習など、幅広い分野で利用されています。

## 基本的な文法

Pythonの基本的な文法や書き方については、以下の記事が非常によくまとまっています。まずはこの記事を読んで、Pythonの全体像を掴んでみましょう。

[ゼロから始めるPython入門！〜基本文法を徹底解説〜](https://qiita.com/python_academia/items/bde85d799e7db4936ce1)

この記事で解説されている内容は以下の通りです。

* 数値計算
* 文字列
* 条件分岐
* 関数
* ループ処理
* データ格納オブジェクト
* 例外処理
* モジュール
* クラス

これらの基本を理解することが、Pythonプログラミングの第一歩です。

## 仮想環境（venv）の使い方

Pythonプロジェクトでは、プロジェクトごとに独立した環境を作ることが重要です。これにより、異なるプロジェクト間でパッケージのバージョンが競合することを防げます。

### 仮想環境の作成

```bash
# プロジェクトのディレクトリで実行
python3 -m venv .venv
```

### 仮想環境の有効化

```bash
# macOSの場合
source .venv/bin/activate
```

仮想環境が有効になると、ターミナルのプロンプトに `(.venv)` が表示されます。

### 仮想環境の無効化

```bash
deactivate
```

### パッケージのインストール

仮想環境を有効化した状態で、必要なパッケージをインストールします。

```bash
pip install requests
pip install pandas numpy  # 複数同時にインストール
```

### requirements.txtの使い方

チームでプロジェクトを共有する際は、必要なパッケージをrequirements.txtに記録します。

```bash
# 現在の環境のパッケージ一覧を出力
pip freeze > requirements.txt

# requirements.txtからパッケージをインストール
pip install -r requirements.txt
```

::: tip
`.gitignore`ファイルに`.venv/`を追加して、仮想環境自体はGitで管理しないようにしましょう。
:::

## チーム開発のコーディング規約

チームで統一されたコードを書くために、以下の規約を守りましょう。

### 1. 命名規則

```python
# 変数名・関数名：スネークケース（小文字+アンダースコア）
user_name = "田中太郎"
def calculate_total_price(items):
    pass

# 定数：大文字+アンダースコア
MAX_RETRY_COUNT = 3
API_ENDPOINT = "https://api.example.com"

# クラス名：パスカルケース（単語の頭文字を大文字）
class UserProfile:
    pass
```

### 2. インデント

Pythonではインデントが文法的に重要です。**必ずスペース4つ**を使用してください。

```python
# 良い例
def greet(name):
    if name:
        print(f"こんにちは、{name}さん！")
    else:
        print("名前を入力してください")

# 悪い例（タブやスペース2つは使わない）
def greet(name):
  if name:
    print(f"こんにちは、{name}さん！")
```

### 3. 文字列の扱い

```python
# f-stringを使用（Python 3.6以降）
name = "太郎"
age = 20
message = f"{name}さんは{age}歳です"

# 複数行の文字列
long_text = """
これは複数行に
わたる長い
文字列です
"""
```

### 4. コメントの書き方

```python
# 関数の説明はdocstringで書く
def calculate_area(width, height):
    """
    長方形の面積を計算する
    
    Args:
        width: 幅
        height: 高さ
    
    Returns:
        面積
    """
    return width * height

# 処理の説明は1行コメントで
# ユーザー入力を検証
if not user_input:
    print("入力が空です")
```

### 5. インポートの順序

```python
# 1. 標準ライブラリ
import os
import sys

# 2. サードパーティライブラリ
import requests
import pandas as pd

# 3. 自作モジュール
from mymodule import my_function
```

## よくある初心者のミス

### 1. インデントエラー

```python
# エラーになる例
def my_function():
print("Hello")  # IndentationError

# 正しい例
def my_function():
    print("Hello")
```

### 2. 変数のスコープ

```python
# グローバル変数とローカル変数の混同
count = 0  # グローバル変数

def increment():
    # ローカル変数として新規作成される（グローバル変数は変更されない）
    count = 1
    
def increment_global():
    global count
    count += 1  # グローバル変数を変更
```

### 3. ミュータブルなデフォルト引数

```python
# 悪い例
def append_item(item, items=[]):  # リストは全ての呼び出しで共有される
    items.append(item)
    return items

# 良い例
def append_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

## デバッグのコツ

### print文でのデバッグ

```python
def complex_calculation(x, y):
    print(f"入力値: x={x}, y={y}")  # デバッグ用
    
    result = x * y + 10
    print(f"計算結果: {result}")  # デバッグ用
    
    return result
```

### 型の確認

```python
# 変数の型が予想と違うことはよくあるエラーの原因
data = "123"
print(type(data))  # <class 'str'>

# 数値として扱いたい場合は変換が必要
number = int(data)
print(type(number))  # <class 'int'>
```

## 次のステップ

基本的な文法を理解したら、実際にコードを書いて練習しましょう。エラーが出ても慌てず、エラーメッセージをよく読んで原因を特定することが大切です。
