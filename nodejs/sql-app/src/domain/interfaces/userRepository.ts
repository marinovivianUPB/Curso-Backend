import { DeleteResult } from "typeorm";
import { UpdateUserDTO } from "../../app/dtos/update.user.dto";
import { User } from "../models/user";
import { UserAuthDto } from "../../app/dtos/auth.user.dto";

export interface UserRepository {
    findById(id: string): Promise<User | null>;
    createUser(user: User): Promise<User>;
<<<<<<< HEAD
    updateUser(user: User, id: string): Promise<User>;
    deleteUser(id: string): Promise<DeleteResult>;
=======
    deleteUser(id: string): Promise<void>;
    updateUser(userId: string, updateData: Partial<User>): Promise<User>;
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    findByEmail(email: string): Promise<User | null>;
}
