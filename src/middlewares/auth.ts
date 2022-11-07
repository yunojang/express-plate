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
                res.status(StatusCodes.UNAUTHORIZED);
                reject(new ApiError("Unauthorized"));
            }

            resolve(user);
        })(req, res);
    })
        .then(() => next())
        .catch((err) => next(err));
};
