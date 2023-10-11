const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// 投稿の作成
router.post("/", async(req, res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    }catch(err){
        return res.status(500).json(err);
    }
});
// 投稿の更新
router.put("/:id",async(req,res)=>{
    try{
        // Postのidを取得
        const post = await Post.findById(req.params.id);
        // PostのuserIdが編集しようとしているuserのIDと一致している時のみ処理を実行
        if(post.userId === req.body.userId){
            await post.updateOne({
                $set: req.body
            });
            return res.status(200).json("successfully updated");
        }else{
            return res.status(403).json("You don't have permission to edit this post");
        }
    }catch(err){
        return res.status(403).json(err);
    }
});

// 投稿の削除
router.delete("/:id",async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("successfully deleted");
        }else{
            return res.status(403).json("You don't have permission to delete this post");
        }
    }catch(err){
        return res.status(403).json(err);
    }
});

// 投稿の閲覧
router.get("/:id",async(req, res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

// 投稿のいいね機能、いいね解除機能
router.put("/:id/like", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      //まだlikesにuserIdが含まれていない場合
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({ 
            $push: { likes: req.body.userId }
        });
        return res.status(200).json("post has been liked");
        //すでにpostのlikesにuserIdが含まれている場合
      } else {
        await post.updateOne({ 
            $pull: { likes: req.body.userId } 
        });
        return res.status(200).json("post has been disliked");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  });

//自分の投稿とフォローしてるユーザーの投稿を取得
router.get("/timeline/:userId",async(req,res)=>{
    try{
    // 誰が投稿したのかを取得する必要があるためUserSchemaを使用する
    const currentUser = await User.findById(req.params.userId);
    // currentUserのPostの情報を全て取得している
    const userPosts = await Post.find({userId: currentUser._id});
    // フォローしているユーザーの投稿を全て取得する
    // currentUserの取得などにawaitが使用されているためPromiseを使用する必要がある
    const friendPosts = await Promise.all(
        // map関数でfollowingsに格納されているuserIdを1つずつ取り出し処理していく
        currentUser.followings.map((friendId)=>{
            return Post.find({userId: friendId});
        })
    );
    // friendPostをスプレッド構文で展開しconcatでuserPostsと合体させる
    return res.status(200).json(userPosts.concat(...friendPosts));
    }catch(err){
        return res.status(500).json(err);
    }
});


// server.jsで使用するためexportする
module.exports = router;