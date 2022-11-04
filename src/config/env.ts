import dotenv from "dotenv";
import { getOsEnv } from "../lib/env";
import { paths } from "./path";

// load .env file ro for tests the .env.test file
// NODE_ENV: include script
dotenv.config({
    path: process.env.NODE_ENV === "test" ? paths.envTest : paths.env,
});

export const env = {
    node: process.env.NODE_ENV ?? "development",
    isProduction: process.env.NODE_ENV === "production",
    isTest: process.env.NODE_ENV === "test",
    isDevelopment: process.env.NODE_ENV === "development",
    app: {
        name: getOsEnv("APP_NAME"),
        port: getOsEnv(process.env.PORT ?? "APP_NAME"),
    },
};
