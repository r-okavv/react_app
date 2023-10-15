const router = require("express").Router();
// 今回は写真保存用のデータベースを作成せず、直接ローカルファイルに保存する
// multerファイルアップロード時に使用するライブラリ、node,jsミドルウェア
const multer = require("multer");

