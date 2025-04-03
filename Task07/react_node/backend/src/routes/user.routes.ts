import { Router } from "express";
import {SignUpController,LoginController, getUserController, getUsersPostController, deleteUserController, updateUserController } from "../controllers/user.controller"
import { authenticate } from "../middlewares/user.auth";
import { roleAccess } from "../middlewares/user.roleaccess";


const router = Router();

router.post('/signup',SignUpController);
router.post("/login",LoginController);
router.delete("/deleteUser/:id",authenticate,roleAccess,deleteUserController);
router.put("/updateUser/:id",updateUserController)
router.get("/",authenticate,roleAccess, getUserController);
router.get("/u/:id",authenticate,roleAccess,getUsersPostController);
export default router;