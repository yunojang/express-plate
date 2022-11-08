import express from "express";

import validate from "@/middlewares/validate";
import { auth } from "@/middlewares/auth";

import { CraeteUserBody } from "@/validations/user";
import { LoginBody } from "@/validations/auth";

import { login, register } from "@/controllers/authController";
import { loop } from "@/controllers/commonController";

const authRouter = express.Router();

authRouter.get("/me", auth, loop);
authRouter.post("/login", validate(LoginBody), login);
authRouter.post("/register", validate(CraeteUserBody), register);

export default authRouter;
