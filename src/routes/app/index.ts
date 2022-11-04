import express, { Router } from "express";
import { env } from "@/config/env";

import authRouter from "./auth";
import userRouter from "./user";

const router = express.Router();

interface Route {
    path: string;
    route: Router;
}

const addRouts = (routes: Route[]) => {
    routes.forEach((route) => router.use(route.path, route.route));
};

const commonRoutes: Route[] = [
    { path: "/auth", route: authRouter },
    { path: "/user", route: userRouter },
];

const devRoutes: Route[] = [];

addRouts(commonRoutes);

if (env.isDevelopment) {
    addRouts(devRoutes);
}
