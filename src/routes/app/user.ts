import express from "express";

const userRouter = express.Router();

userRouter.route("/").get().post();
userRouter.route("/:userId").get().put();

export default userRouter;
