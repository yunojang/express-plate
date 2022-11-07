import express from "express";

import validate from "@/middlewares/validate";

import { CraeteUserBody } from "@/validations/user";
import { LoginBody } from "@/validations/auth";

import { register } from "@/controllers/authController";

const authRouter = express.Router();

authRouter.post("/login", validate(LoginBody));
authRouter.post("/register", validate(CraeteUserBody), register);

export default authRouter;
