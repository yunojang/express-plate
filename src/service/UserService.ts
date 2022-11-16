import { ObjectId } from "mongodb";
import { User } from "@/models/User";
import { userRepository } from "@/repositories";

export const create = async (user: User): Promise<User> => {
    console.log("create a new user => ", user.toString());
    const newUser = await userRepository.save(user);
    return newUser;
};

export const getUsers = async () => {
    return userRepository.find();
};

export const getUserByEmail = async (email: string) => {
    console.log("Find user by Email => ", email);
    return userRepository.findOneBy({ email });
};

export const getUserById = async (id: string) => {
    console.log("Find user by Id =>", id);
    return userRepository.findOneBy({ _id: new ObjectId(id) });
};

export const updateUser = async (id: string, newUser: User) => {
    console.log("update user =>", id, "by =>", newUser);

    return userRepository.update(id, newUser);
};
