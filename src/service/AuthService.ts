import { ApiError } from "@/utils/ApiError";
import { getUserByEmail } from "./UserService";

export const loginWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    const user = await getUserByEmail(email);

    if (!user || !user.comparePassword(password)) {
        throw new ApiError("Incorrect email or password");
    }

    return user;
};
