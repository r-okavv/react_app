const router = require("express").Router();
// 今回は写真保存用のデータベースを作成せず、直接ローカルファイルに保存する
// multerファイルアップロード時に使用するライブラリ、node,jsミドルウェア
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// 保存先を指定する
const upload = multer({storage : storage});
// const upload = multer({storage});
// 画像upload用APIの作成
router.post("/", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("successfully uploaded the image");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;