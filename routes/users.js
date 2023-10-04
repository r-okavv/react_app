// expressのRouter関数をrouterに格納する
const router = require("express").Router();

// users/のrouteを作成
router.get("/",(req,res)=>{
  res.send("user router");
});

// server.jsで使用するためexportする
module.exports = router;