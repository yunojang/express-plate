import { Handler } from "express";
import { validate as classValidate } from "class-validator";
import { StatusCodes } from "http-status-codes";

import ApiError from "@/utils/ApiError";

type EntryLocation = "body" | "params" | "query";

const validate =
    (Schema: { new (): any }, entry: EntryLocation = "body"): Handler =>
    (req, res, next) => {
        const instance = new Schema();

        Object.entries(req[entry]).forEach(([k, v]) => {
            instance[k] = v;
        });

        classValidate(instance).then((errors) => {
            if (errors.length > 0) {
                res.status(StatusCodes.BAD_REQUEST);
                return next(new ApiError(errors));
            }

            return next();
        });
    };

export default validate;
