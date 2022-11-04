import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { env } from "./config/env";

import router from "./routes/app";

const app = express();
// logger

// http security
app.use(helmet());

// parse cookie
app.use(cookieParser());

// parse json, request body
app.use(express.json());

// rest api route
app.use(env.app.routePrefix, router);

export default app;
