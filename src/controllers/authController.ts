import { Handler } from "express";

export const register: Handler = (req, res) => {
    console.log(req.body);

    return res.send("register ok");
};
