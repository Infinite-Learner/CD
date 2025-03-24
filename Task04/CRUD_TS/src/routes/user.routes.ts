import { Router } from "express";
import {SignUpController,LoginController } from "../controllers/user.controller"

const router = Router();

router.post('/signup',SignUpController);
router.post("/login",LoginController);

export default router;