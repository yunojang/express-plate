import express from "express";
import validate from "@/middlewares/validate";

import { register } from "@/controllers/authController";

import { CraeteUserBody } from "@/validations/user";

const authRouter = express.Router();

authRouter.post(
    "/login"
    // validate(),
    // controller
);

authRouter.post("/register", validate(CraeteUserBody), register);

export default authRouter;
