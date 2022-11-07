import { User } from "@/models/User";
import { userRepository } from "@/repositories";

export const create = async (user: User): Promise<User> => {
    const newUser = await userRepository.save(user);
    return newUser;
};
