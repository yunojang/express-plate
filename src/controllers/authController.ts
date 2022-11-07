import { Handler } from "express";

import { User } from "@/models/User";
import { CraeteUserBody } from "@/validations/user";
import { userService } from "@/service";

export const register: Handler = async (req, res) => {
    const { age, email, gender, password } = req.body as CraeteUserBody;

    const user = new User();
    user.email = email;
    user.gender = gender;
    user.password = password;
    user.age = age;

    const result = await userService.create(user);
    return res.send(result);
};
