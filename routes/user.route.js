import Router from "express";
import { loginController, signUpController } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.route("/login").post(loginController);
userRouter.route("/signup").post(signUpController);

export default userRouter;