const express = require("express");
const app = express();
// PORT番号の指定
const PORT = 3000;
// reqでクライアント側から送られてきたHTTPメソッドを受け取る
// resでバックエンド側からクライアントに返すリクエストを格納する
// ブラウザのURLに打ち込むとgetメソッド送られる
app.get("/",(req, res)=>{
  res.send("hello express");
});

app.listen(PORT,() => console.log("サーバーが起動しました"))