import { Handler } from "express";

export const loopback: Handler = (req, res, next) => {
    res.send("ok");
};
