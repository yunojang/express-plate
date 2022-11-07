import { User } from "@/models/User";
import { userRepository } from "@/repositories";

export const create = async (user: User): Promise<User> => {
    console.log("create a new user => ", user.toString());
    const newUser = await userRepository.save(user);
    return newUser;
};

// export const findOne = (id: string): Promise<User> => {
//     console.log("Find one user");
// };
