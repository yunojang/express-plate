import express from "express";

import { auth } from "@/middlewares/auth";
import validate from "@/middlewares/validate";

import {
    createUser,
    getUsers,
    updateUser,
} from "@/controllers/userControllers";
import {
    CraeteUserBody,
    GetUserWithId,
    UpdateUserBody,
} from "@/validations/user";

import { userService } from "@/service";

const userRouter = express.Router();

userRouter
    .route("/")
    .get(auth, getUsers)
    .post(auth, validate(CraeteUserBody), createUser);

// template CRUD
userRouter
    .route("/:id")
    .get(auth, validate(GetUserWithId, "params"), async (req, res) => {
        return res.send(await userService.getUserById(req.params.id));
    })
    .put(auth, validate(UpdateUserBody), updateUser)
    .delete();

export default userRouter;
