# CLAUDE.md

このファイルはClaude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## 重要な指示
**このプロジェクトでは日本語で回答してください。**

## プロジェクト概要

このプロジェクトは「Maigo」というタロット・占いアプリケーションです。以下の機能を含みます：

- **Personal Arcana**: 生年月日から個人のタロットカードを計算
- **Essence Journey**: 質問とリアクションによる心理分析
- **四柱推命**: 動物占いを含む四柱推命システム

## Git設定情報

### リモートリポジトリ
- URL: https://github.com/shibuyamaigo/maigo.git
- GitHub Pages: https://shibuyamaigo.github.io/maigo/

### 基本的なコミット＆プッシュフロー
```bash
git add .
git commit -m "コミットメッセージ

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>"
git push origin main
```

### 開発時の注意点
- 変更後は必ずコミット＆プッシュしてGitHub Pagesを更新
- コミットメッセージは日本語で記述
- 大きな変更の際は事前にバックアップを作成
- Personal Access Tokenは環境変数やgit configで管理

## ファイル構造

```
/
├── index.html              # メインのタロットアプリ
├── css/
│   └── style.css          # メインスタイルシート
├── js/
│   ├── data.js           # タロットカードデータ
│   └── script.js         # メインスクリプト
├── images/               # タロットカード画像
│   ├── card0.png - card21.png
│   ├── arcana.png
│   └── その他画像ファイル
├── genesphia/           # HeartConnectアプリ
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── image/
├── バックアップ/         # バックアップファイル
└── CLAUDE.md           # このファイル
```

## 主要機能

### Personal Arcana（パーソナル占い）
- 生年月日と年齢から Birth Year Card と Transit Year Card を計算
- カード詳細表示（特徴、暗示、有名人など）
- 年次カード変更機能

### Essence Journey（本質の旅）
- 6レベルの質問システム（軽やか→禁断）
- リアクションボタン（🔥やばい、🙋同じく！など）
- プログレス表示

### 四柱推命
- 動物占いシステム
- 表面・希望・本質・隠れの4つの側面
- 月・地球・太陽グループ分類

## 開発時のベストプラクティス

### 変更をプッシュする際の手順
1. ファイルを編集
2. `git add .`
3. `git commit -m "適切なコミットメッセージ"`
4. `git push origin main`
5. GitHub Pagesの更新を確認（数分後）

### 新機能追加時
1. まずローカルでテスト
2. バックアップフォルダも更新
3. コミット時に変更内容を明記

## 最近の変更履歴
- TYページの巨大なarcana.png画像を削除（表示改善）
- GitHub Pagesでの自動デプロイ設定完了