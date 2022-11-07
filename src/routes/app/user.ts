import express from "express";

import validate from "@/middlewares/validate";

import { createUser } from "@/controllers/userControllers";
import { CraeteUserBody } from "@/validations/user";
import { auth } from "@/middlewares/auth";

const userRouter = express.Router();

userRouter
    .route("/")
    // .get(validate(CraeteUserBody), createUser)
    .post(auth, validate(CraeteUserBody), createUser);

userRouter.route("/:userId").get().put();

export default userRouter;
