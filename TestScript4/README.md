# Node.jsでHTTPサーバーを構築した場合の、JavaScriptとTypeScriptのソースコード比較

## 事前準備
TestScript4ディレクトリで以下のコマンドを実行する。
```bash
npm install --save-dev @types/node
npm install --save-dev ts-node
```

## 使い方
(1) JavaScriptの場合
```bash
node main.js
```
(2) TypeScriptの場合
```bash
ts-node main.ts
```

## ソースコード比較
基本的にJavaScriptとTypeScriptの違いに差はないが、モジュールを使用するときに宣言が違う模様。また、functionには静的型指定をしなければいけないので注意。