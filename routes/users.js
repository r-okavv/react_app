// expressのRouter関数をrouterに格納する
const router = require("express").Router();
const User = require("../models/User");

// users/のrouteを作成
// router.get("/",(req,res)=>{
//   res.send("user router");
// });

// UserのCRUD機能
// ユーザー情報の更新
router.put("/:id", async(req, res)=> {
  if(req.body.userId === req.params.id || req.body.isAdmin){
    try{
      // findByIdAndUpdateはmongooseの関数
      const user = await User.findByIdAndUpdate(req.params.id,{
      // $setはパラメータを全て指定する
        $set: req.body,
      });
      res.status(200).json("successfully updated")
    }catch(err){
      return res.status(500).json(err);
    }
  }else {
    return res
      .status(403)
      .json("You do not have permission to edit this account");
  }
});
// ユーザー情報の削除
router.delete("/:id",async(req, res)=> {
  if(req.body.userId === req.params.id || req.body.isAdmin){
    try{
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("successfully deleted");
    }catch(err){
      return res.status(500).json(err)
    }
  }else{
    return res
      .status(403)
      .json("You do not have permission to delete this account");
  }
});
// ユーザー情報の取得
router.get("/:id",async(req, res)=>{
  try {
    // findByIdで特定のユーザーを取得する
    const user = await User.findById(req.params.id);
    // ユーザー情報にある全ての情報を取り出して代入,otherにpassword,updateAt以外の情報を入れる
    const { password, updateAt, ...other } = user._doc;
    res.status(200).json(other);
  }catch(err){
    return res.status(500).json(err);
  }
});

// server.jsで使用するためexportする
module.exports = router;