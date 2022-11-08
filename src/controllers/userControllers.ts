import { Handler } from "express";

import { User } from "@/models/User";
import { CraeteUserBody } from "@/validations/user";
import { userService } from "@/service";

export const createUser: Handler = async (req, res) => {
    // call createuser service
    const { age, email, gender, password } = req.body as CraeteUserBody;

    const user = new User();
    user.email = email;
    user.gender = gender;
    user.password = password;
    user.age = age;

    // await userService.create(user);
    return res.send("anything");
};

export const getUsers: Handler = async (req, res) => {
    const userList = await userService.getUsers();
    return res.send(userList);
};

export const getUser: Handler = async (req, res) => {
    const { id } = req.params;

    const user = await userService.getUserById(id);
    return res.send(user);
};
