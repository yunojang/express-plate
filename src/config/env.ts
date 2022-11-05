import dotenv from "dotenv";
import { getOsEnv, getOsPath } from "../lib/env";
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
        port: process.env.PORT ?? getOsEnv("APP_PORT"),
        routePrefix: getOsEnv("APP_ROUTE_PREFIX"),
        dirs: {
            entities: [getOsPath("TYPEORM_ENTITIES")],
        },
    },
    jwt: {
        secret: getOsEnv("JWT_SECRET"),
    },
    db: {
        type: getOsEnv("TYPEORM_CONNECTION"),
        database: getOsEnv("TYPEORM_DATABASE"),
        logging: getOsEnv("TYPEORM_LOGGING"),
    },
};
