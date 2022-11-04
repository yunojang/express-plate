import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";

const app = express();
// logger

// http security
app.use(helmet());

// parse cookie
app.use(cookieParser());

// parse json, request body
app.use(express.json());

// rest api route
// app.use('/app', route)

export default app;
