const express = require("express")
const router = express.Router();

const { addPostController, getPostController,updatePostController,deleteController } = require("../controllers/postController");


router.post("/addPost",addPostController);
router.get("/getPosts/",getPostController);
router.get("/getPosts/user/:userId",getPostController);
router.get("/getPosts/:id",getPostController);
router.put("/updatePost/:id",updatePostController)
router.delete("/deletePost/:id",deleteController);
module.exports = router;