import { Handler } from "express";

import { User } from "@/models/User";
import { CraeteUserBody } from "@/validations/user";
import { tokenService, userService } from "@/service";
import { LoginBody } from "@/validations/auth";

export const register: Handler = async (req, res) => {
    const { age, email, gender, password } = req.body as CraeteUserBody;

    const user = new User();
    user.email = email;
    user.gender = gender;
    user.password = password;
    user.age = age;

    const createdUser = await userService.create(user);
    const token = tokenService.generateToken(createdUser.id);

    return res.send({
        user: createdUser,
        token,
    });
};

export const login: Handler = async (req, res) => {
    const { email, password } = req.body as LoginBody;
};
