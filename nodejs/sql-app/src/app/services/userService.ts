import { IUserEntity } from "../../domain/entities/IUserEntity";
import { RoleRepository } from "../../domain/interfaces/roleRepository";
import { UserRepository } from "../../domain/interfaces/userRepository";
import { User } from "../../domain/models/user";
import logger from "../../infrastructure/logger/logger";
import { CreateUserDTO } from "../dtos/create.user.dto";
import { UserDto } from '../dtos/user.dto';
import { UpdateUserDTO } from "../dtos/update.user.dto";
import { DeletedDTO } from "../dtos/deleted";
import { RoleEntity } from "../../infrastructure/entities/roleEntity";

export class UserService {
    constructor(private userRepository: UserRepository, private roleRepository: RoleRepository) { }

    async getUserById(id: string): Promise<UserDto | null> {

        logger.info("En get user by id service");
        const user = await this.userRepository.findById(id);
        if (!user){
            return null
        }
        logger.debug(`Get usr service: Usuario regresado por repository ${JSON.stringify(user)}`);

        const userResponse: UserDto = {
            id: user.id,
            username: user.username,
            email: user.email,
            lastLogin: user.lastLogin
        }
        // log.info user obtenido exitosamente
        return userResponse;
    }

    async createUser(userDto: CreateUserDTO): Promise<UserDto> {
        
        const auxRole = await this.roleRepository.findById(userDto.roleId);
        if(!auxRole){
            throw new Error('Rol no encontrado')
        }
        const userEntity: IUserEntity = {
            username: userDto.username,
            email: userDto.email,
            passwordHash: userDto.password,
            roleId: auxRole,
            createdAt: new Date(),
            lastLogin: null
        };
        const newUser = new User(userEntity);
        const responseUser = await this.userRepository.createUser(newUser);
        logger.debug(`Create user Service: Usuario regresado por repository ${JSON.stringify(responseUser)}`);
        return {id: responseUser.id, username: responseUser.username, email: responseUser.email, lastLogin: responseUser.lastLogin};
    }

    async updateUser(userDto: UpdateUserDTO, id: string): Promise<UserDto> {
        logger.info("En update user service");
        const backupUser = await this.userRepository.findById(id);
        if (!backupUser){
            return null
        }
        logger.debug(`Update usr service: Usuario regresado por repository ${JSON.stringify(backupUser)}`);

        const user: IUserEntity = {
            username: (userDto.username ? userDto.username : backupUser.username),
            email: (userDto.email ? userDto.email : backupUser.email),
            passwordHash: (userDto.password ? userDto.password : backupUser.passwordHash),
            roleId: (userDto.roleId ? (await this.roleRepository.findById(userDto.roleId)) : backupUser.roleId) as RoleEntity,
            createdAt: backupUser.createdAt,
            lastLogin: backupUser.lastLogin
        }
        if(!user.roleId){
            throw new Error('Rol no encontrado')
        }
        const responseUser = await this.userRepository.updateUser(new User(user), id);
        logger.debug(`Update user Service: Usuario regresado por repository ${JSON.stringify(responseUser)}`);
        return {id: responseUser.id, username: responseUser.username, email: responseUser.email, lastLogin: responseUser.lastLogin};
    }

    async deleteUser(id: string): Promise<DeletedDTO | null> {

        logger.info("En delete user by id service");
        const user = await this.userRepository.deleteUser(id);
        if (!user){
            return null
        }
        logger.debug(`Delete usr service: Mensaje regresado por repository ${JSON.stringify(user)}`);

        const userResponse: DeletedDTO = {
            message: user.raw as string
        }
        return userResponse;
    }

}
