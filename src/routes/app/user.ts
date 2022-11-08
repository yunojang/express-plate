import express from "express";

import validate from "@/middlewares/validate";

import { createUser, getUsers } from "@/controllers/userControllers";
import { CraeteUserBody, GetUserWithId } from "@/validations/user";
import { auth } from "@/middlewares/auth";

const userRouter = express.Router();

userRouter
    .route("/")
    .get(auth, getUsers)
    .post(auth, validate(CraeteUserBody), createUser);

// template CRUD
userRouter
    .route("/:id")
    .get(auth, validate(GetUserWithId, "params"), (req, res) =>
        res.send(req.params.id)
    )
    .put()
    .delete();

export default userRouter;
