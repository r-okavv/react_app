const express = require("express");
const app = express();
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postsRoute = require("./routes/posts")
// PORT番号の指定
const PORT = 3000;
const mongoose = require("mongoose");

require('dotenv').config();

// connect関数を使用してmongoDBに接続する
mongoose.connect(
  process.env.MONGOURL
).then(()=>{
  console.log("DBと接続中");
}).catch((err)=>{
  console.log(err);
});

// ミドルウェア
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);


// reqでクライアント側から送られてきたHTTPメソッドを受け取る
// resでバックエンド側からクライアントに返すリクエストを格納する
// ブラウザのURLに打ち込むとgetメソッド送られる
app.get("/",(req, res)=>{
  res.send("hello express");
});

app.listen(PORT,() => console.log("サーバーが起動しました"));