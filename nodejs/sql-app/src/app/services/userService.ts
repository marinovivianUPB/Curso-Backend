import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import { CreateUserDTO } from "../dtos/create.user.dto";
import { UserDto } from '../dtos/user.dto';

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async getUserById(id: string): Promise<UserDto | null> {
        const user = await this.userRepository.findById(id);
        if (!user) return null;

        const userResponse: UserDto = {
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin
        }
        return userResponse;
    }

    async createUser(userDto: CreateUserDTO): Promise<UserDto> {
        const userEntity: IUserEntity = {
            username: userDto.username,
            email: userDto.email,
            passwordHash: userDto.password,
            roleId: userDto.roleId,
            createdAt: new Date(),
            lastLogin: null,
        };
        const newUser = new User(userEntity);
        const responseUser = await this.userRepository.createUser(newUser);
        return {id: responseUser.id, username: responseUser.username, email: responseUser.email, lastLogin: responseUser.lastLogin};
    }
}
