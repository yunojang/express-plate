import express from "express";

import validate from "@/middlewares/validate";
import { auth } from "@/middlewares/auth";

import { CraeteUserBody } from "@/validations/user";
import { LoginBody } from "@/validations/auth";

import { login, me, register } from "@/controllers/authController";

const authRouter = express.Router();

authRouter.get("/me", auth, me);
authRouter.post("/login", validate(LoginBody), login);
authRouter.post("/register", validate(CraeteUserBody), register);

export default authRouter;
