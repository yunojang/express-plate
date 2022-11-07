import express from "express";

import validate from "@/middlewares/validate";
import { CraeteUserBody } from "@/validations/user";
import { register } from "@/controllers/authController";

const authRouter = express.Router();

authRouter.post("/login");

authRouter.post("/register", validate(CraeteUserBody), register);

export default authRouter;
