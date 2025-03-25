import { Router } from "express";
import { addPostController, deletePostController, getAllPostController, getPostByIdController, getPostsByuserIdController, updatePost } from "../controllers/post.controller";
import { authenticate } from "../middlewares/user.auth";
import { roleAccess } from "../middlewares/user.roleaccess";


const router = Router();

router.get('/', getAllPostController);
router.get("/:id", getPostByIdController);
router.get("/u/:userId", getPostsByuserIdController);

router.post('/addPost', authenticate, roleAccess,addPostController);

router.put('/:id', updatePost);

router.delete("/:id", deletePostController)
export default router;