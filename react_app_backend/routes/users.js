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

//クエリでユーザー情報を取得する
router.get("/",async(req, res)=>{
  // URLのクエリパラメータからuserIdとusernameを取得する
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    // userIdの有無で検索方法を変更する
    const user = userId ? await User.findById(userId) : await User.findOne({username: username});
    // ユーザー情報にある全ての情報を取り出して代入,otherにpassword,updateAt以外の情報を入れる
    const { password, updateAt, ...other } = user._doc;
    return res.status(200).json(other);
  }catch(err){
    return res.status(500).json(err);
  }
});

// ユーザー情報の取得
// router.get("/:id",async(req, res)=>{
//   try {
//     // findByIdで特定のユーザーを取得する
//     const user = await User.findById(req.params.id);
//     // ユーザー情報にある全ての情報を取り出して代入,otherにpassword,updateAt以外の情報を入れる
//     const { password, updateAt, ...other } = user._doc;
//     return res.status(200).json(other);
//   }catch(err){
//     return res.status(500).json(err);
//   }
// });

// ユーザーフォロー機能
router.put("/:id/follow",async(req, res)=>{
// 自分以外のユーザーのみフォローできるようにする
if(req.body.userId !== req.params.id ){
  try{
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.userId);
    // まだフォローしていないユーザーのみフォローできるようにする
    // フォローしようとしているユーザーのフォロワーに自分のIDがないことを確認
    if(!user.followers.includes(req.body.userId)){
      await user.updateOne({
        // followers配列にpushする
        $push:{
          followers: req.body.userId,
        },
      });
      await currentUser.updateOne({
        $push:{
          followings: req.params.id
        },
      });
      return res.status(200).json("successfully followed this user");
    }else{
      return res
      .status(403)
      .json("You have already followed this user");
    }
  }catch(err){
    return res.status(500).json(err);
  }
}else{
  return res.status(500).json("Unable to follow this user");
}
});

// ユーザーフォロー解除機能
router.put("/:id/unfollow",async(req, res)=>{
  // 自分以外のユーザーのみフォローできるようにする
  if(req.body.userId !== req.params.id ){
    try{
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      // 相手ユーザーのフォロワーに自分のIDあったらフォローを外す
      if(user.followers.includes(req.body.userId)){
        await user.updateOne({
          // followers配列から削除
          $pull:{
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull:{
            followings: req.params.id
          },
        });
        return res.status(200).json("successfully unfollowed this user");
      }else{
        return res
        .status(403)
        .json("unable to unfollow this user");
      }
    }catch(err){
      return res.status(500).json(err);
    }
  }else{
    return res.status(500).json("Unable to unfollow this user");
  }
  });

// server.jsで使用するためexportする
module.exports = router;