import { Strategy, ExtractJwt, VerifiedCallback } from "passport-jwt";
import { env } from "@/config/env";

// passport jwt config
const jwtOptions = {
    secretOrKey: env.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const verify: VerifiedCallback = (payload, done) => {
    // User.find user in db to payload (payload.sub)
    // User is model that service to logic
};

const jwtStrategy = new Strategy(jwtOptions, verify);
export default jwtStrategy;
