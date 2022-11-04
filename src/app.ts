import express from "express";
import helmet from "helmet";
// import cookieParser from "cookie-parser";
import passport from "passport";
import { env } from "./config/env";

import router from "./routes/app";

const app = express();
// logger

// http security
app.use(helmet());

// parse cookie
// app.use(cookieParser());

// parse json in request body
app.use(express.json());

// passport setting for jwt authentication
app.use(passport.initialize());

// rest api route
app.use(env.app.routePrefix, router);

export default app;
