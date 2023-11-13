import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import { CreateUserDTO } from "../dtos/create.user.dto";
import { UserDto } from '../dtos/user.dto';
import logger from '../../infrastructure/logger/logger';

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async getUserById(id: string): Promise<UserDto | null> {

        logger.info("En get user by id service");
        const user = await this.userRepository.findById(id);
        if (!user){
            return null
        }
        logger.debug(`Usuario regresado por repository ${JSON.stringify(user)}`);

        const userResponse: UserDto = {
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin
        }
        return userResponse;
    }

    async createUser(userDto: CreateUserDTO): Promise<UserDto> {
        logger.info("En create user service");
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
        logger.debug(`Usuario regresado por repository ${JSON.stringify(responseUser)}`);
        return {id: responseUser.id, username: responseUser.username, email: responseUser.email, lastLogin: responseUser.lastLogin};
    }
}
