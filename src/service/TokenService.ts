import jwt from "jsonwebtoken";
import { env } from "@/config/env";

export const generateToken = (
    userId: any,
    secret: jwt.Secret = env.jwt.secret
) => {
    return jwt.sign({ id: userId }, secret);
};
