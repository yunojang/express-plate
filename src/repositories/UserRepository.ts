import { AppDataSource } from "@/config/typeorm";
import { User } from "@/models/User";

export const userRepository = AppDataSource.getRepository(User);
