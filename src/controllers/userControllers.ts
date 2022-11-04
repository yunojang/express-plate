import { Handler } from "express";

export const createUser: Handler = (req, res, next) => {
    // call createuser service

    return res.send(req.body);
};
