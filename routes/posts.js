const router = require("express").Router();
const Post = require("../models/Post");

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

// server.jsで使用するためexportする
module.exports = router;