import { Handler } from "express";
import { validate as classValidate } from "class-validator";
import { StatusCodes } from "http-status-codes";

import ApiError from "@/utils/ApiError";

type ContentLocation = "body" | "params" | "query";

// middle ware
const validate =
    (Schema: { new (): any }, content: ContentLocation = "body"): Handler =>
    (req, res, next) => {
        const instance = new Schema();
        Object.entries(req[content]).forEach(([k, v]) => {
            instance[k] = v;
        });

        classValidate(instance).then((errors) => {
            if (errors.length > 0) {
                res.statusCode = StatusCodes.BAD_REQUEST;
                return next(new ApiError(errors));
            }

            return next();
        });
    };

export default validate;
