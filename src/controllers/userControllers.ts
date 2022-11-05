import { Handler } from "express";

export const createUser: Handler = (req, res, next) => {
    // call createuser service

    console.log(req.body);
    return res.send("ok");
};
