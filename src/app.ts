import express from "express";
import helmet from "helmet";
import passport from "passport";

import { env } from "./config/env";

import router from "./routes/app";
import jwtStrategy from "./config/passport";

const app = express();
// logger

// http security
app.use(helmet());

// jwt passport
passport.use("jwt", jwtStrategy);

// parse json in request body
app.use(express.json());

// passport setting for jwt authentication
app.use(passport.initialize());

// rest api route
app.use(env.app.routePrefix, router);

export default app;
