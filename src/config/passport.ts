// import passport from "passport";
import { Strategy, ExtractJwt, VerifyCallback } from "passport-jwt";
import { env } from "@/config/env";
import { userRepository } from "@/repositories";

// passport jwt config
const jwtOptions = {
    secretOrKey: env.jwt.secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const verify: VerifyCallback = (payload, done) => {
    userRepository
        .findOneBy({ id: payload.id.data })
        .then((user) => {
            console.log("user", user);

            if (!user) {
                return done(null, false);
            }

            done(null, user);
        })
        .catch((err) => done(err, false));
};

const jwtStrategy = new Strategy(jwtOptions, verify);

export default jwtStrategy;
