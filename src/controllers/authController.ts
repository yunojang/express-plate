import { Handler } from "express";
import { StatusCodes } from "http-status-codes";

import { User } from "@/models/User";
import { tokenService, userService } from "@/service";

import { CraeteUserBody } from "@/validations/user";
import { LoginBody } from "@/validations/auth";
import { loginWithEmailAndPassword } from "@/service/AuthService";
import { generateToken } from "@/service/TokenService";

export const me: Handler = (req, res, next) => {
    if (!req.user) {
        return next("USER null");
    }

    return res.send({
        user: req.user,
    });
};

export const register: Handler = async (req, res) => {
    const { age, email, gender, password } = req.body as CraeteUserBody;

    const user = new User();
    user.email = email;
    user.gender = gender;
    user.password = password;
    user.age = age;

    try {
        const createdUser = await userService.create(user);
        const token = tokenService.generateToken(createdUser._id);
        return res.send({
            user: createdUser,
            token,
        });
    } catch (err) {
        const status = StatusCodes.INTERNAL_SERVER_ERROR;

        res.status(status);
        res.send({ err, status });
    }
};

export const login: Handler = async (req, res) => {
    const { email, password } = req.body as LoginBody;

    try {
        const user = await loginWithEmailAndPassword(
            email as string,
            password as string
        );
        const token = generateToken(user._id);

        return res.send({ user, token });
    } catch (err: any) {
        const status = StatusCodes.UNAUTHORIZED;

        res.status(status);
        res.send({ err: err.toString(), status });
    }
};
