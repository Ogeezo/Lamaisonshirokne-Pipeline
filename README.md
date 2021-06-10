# Lamaisonshirokne-Pipeline
Shopifyテーマ「Pipeline」を使用した構築のバージョン管理

##　改修手順
### Shopify上のデータをダウンロード
theme download
### 編集後にデータをアップロード
theme deploy
theme deploy --allow
### 追加ファイルがあればgit管理に追加
git add ファイル
### ステータスの確認
git status
### 問題なければコミット(変更内容をコメントに)
git commit -m"コメント"
### リモートリポジトリにプッシュ
git push origin master
