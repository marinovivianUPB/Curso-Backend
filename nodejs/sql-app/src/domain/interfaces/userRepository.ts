import { DeleteResult } from "typeorm";
import { UpdateUserDTO } from "../../app/dtos/update.user.dto";
import { User } from "../models/user";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
    updateUser(user: User, id: string): Promise<User>;
    deleteUser(id: string): Promise<DeleteResult>;
}
