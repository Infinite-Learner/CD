const express = require("express")
const router = express.Router();

const { addPostController,getAllPostsController,getPostByIdController,getPostsByUserController,updatePostController,deleteController } = require("../controllers/postController");


router.post("/addPost",addPostController);
router.get("/getPosts/",getAllPostsController);
router.get("/getPosts/user/:userId",getPostsByUserController);
router.get("/getPosts/:id",getPostByIdController)
router.put("/updatePost/:id",updatePostController)
router.delete("/deletePost/:id",deleteController);
module.exports = router;