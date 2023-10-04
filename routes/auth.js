const router = require("express").Router();

router.get("/",(req,res)=>{
  res.send("auth router");
});

// server.jsで使用するためexportする
module.exports = router;