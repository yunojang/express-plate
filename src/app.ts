import express from "express";
import helmet from "helmet";
import passport from "passport";
import cors from "cors";

import { env } from "./config/env";

import router from "./routes/app";
import jwtStrategy from "./config/passport";

const app = express();
// logger

// http security
app.use(helmet());

// cors
app.use(cors());
app.options("*", cors());

// jwt passport
passport.use("jwt", jwtStrategy);

// parse json in request body
app.use(express.json());

// rest api route
app.use(env.app.routePrefix, router);

export default app;
