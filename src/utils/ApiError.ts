// import { StatusCodes } from "http-status-codes";

import { ValidationError } from "class-validator";
// import { StatusCodes } from "http-status-codes";

export class ApiError extends Error {
    // constructor(msg: string) {
    //     super(msg);
    // }
}

export default class ValidateError extends ApiError {
    constructor(errors: ValidationError[]) {
        const msg = ValidateError.getErrorMessage(errors);
        super(msg);
        this.name = "[ApiError] Bad Request";
    }

    static getErrorMessage(errors: ValidationError[]): string {
        return errors
            .map(
                ({ property, constraints }) =>
                    `[${property}] ${
                        constraints
                            ? Object.values(constraints).join(" / ")
                            : "?"
                    }`
            )
            .join("\n");
    }
}
