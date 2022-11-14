import { Handler } from "express";
import passport from "passport";
import { StatusCodes } from "http-status-codes";

import { ApiError } from "@/utils/ApiError";

// passport.authenticate is return middleware
// middleware call - passport.authenticate(...)(req, res, next)

export const auth: Handler = async (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate("jwt", { session: false }, (err, user, info) => {
            if (err || info || !user) {
                reject(new ApiError("Unauthorized"));
            }

            req.user = user;
            resolve(1);
        })(req, res);
    })
        .then(() => next())
        .catch((err) => {
            const status = StatusCodes.UNAUTHORIZED;
            res.status(status);
            res.send({ err: err.toString(), status });
        });
};
