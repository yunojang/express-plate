import express from "express";
import validate from "@/middlewares/validate";

import { createUser } from "@/controllers/userController";
import { CraeteUserBody } from "@/validations/user";

const userRouter = express.Router();

userRouter
    .route("/")
    // .get(validate(CraeteUserBody), createUser)
    .post(validate(CraeteUserBody), createUser);

userRouter.route("/:userId").get().put();

export default userRouter;