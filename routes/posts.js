const router = require("express").Router();

router.get("/",(req,res)=>{
  res.send("posts router");
});

// server.jsで使用するためexportする
module.exports = router;