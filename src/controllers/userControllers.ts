import { Handler } from "express";

import { User } from "@/models/User";
import { CraeteUserBody } from "@/validations/user";

export const createUser: Handler = (req, res) => {
    // call createuser service
    const { age, email, gender, password } = req.body as CraeteUserBody;

    const user = new User();
    user.email = email;
    user.gender = gender;
    user.password = password;
    user.age = age;

    return res.send("ok");
};
