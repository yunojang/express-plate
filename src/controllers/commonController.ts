import { Handler } from "express";

export const loop: Handler = (req, res, next) => {
    if (!req.body) {
        next("empty body");
    }

    res.send(req.body);
};
