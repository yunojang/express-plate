// import { StatusCodes } from "http-status-codes";

import { ValidationError } from "class-validator";

const getErrorMessage = (errors: ValidationError[]): string => {
    return errors
        .map(
            ({ property, constraints }) =>
                `[${property}]: ${
                    constraints ? Object.values(constraints).join(" / ") : "?"
                }`
        )
        .join("\n");
};

export default class ApiError extends Error {
    constructor(errors: ValidationError[]) {
        const msg = getErrorMessage(errors);
        super(msg);
    }
}
