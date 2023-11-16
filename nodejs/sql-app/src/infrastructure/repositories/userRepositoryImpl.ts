import bcrypt from "bcrypt";

import { UserRepository } from "../../domain/interfaces/userRepository";
import { UserEntity } from "../entities/userEntity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/user";
import logger from '../../infrastructure/logger/logger';
import { UpdateUserDTO } from "../../app/dtos/update.user.dto";
import { DeleteResult } from "typeorm";
import { UserAuthDto } from "../../app/dtos/auth.user.dto";

export class UserRepositoryImpl implements UserRepository {

    async deleteUser(id: string): Promise<DeleteResult> {
        logger.info("En delete user repository")
        const userEntity = await AppDataSource.getRepository(UserEntity).delete({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(userEntity)}`);
        return userEntity;
    }

    async findById(id: string): Promise<User | null> {
        logger.info("En find by id user repository")
        const userEntity = await AppDataSource.getRepository(UserEntity).findOne({
            where: {id},
            relations: ['roleId']
        });
        console.log(userEntity);
        logger.debug(`Respuesta de DB:${JSON.stringify(userEntity)}`);
        return userEntity ? new User(userEntity) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const user = await userRepository.findOne({
            where: { email },
            relations: ['roleId']
        });
        return user ? new User(user) : null;
    }

    async createUser(user: User): Promise<User> {
        logger.info("En create user repository")
        // TODO: set user values 
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.passwordHash, salt);
        const userEntity = AppDataSource.getRepository(UserEntity).create({
            id:user.id,
            username: user.username,
            email: user.email,
            passwordHash: hash,
            createdAt: user.createdAt || new Date(),
            lastLogin: user.lastLogin || null,
            roleId: user.roleId
        });
        logger.debug(`Respuesta de DB userEntity ${JSON.stringify(userEntity)}`);        

        const userResponse = await AppDataSource.getRepository(UserEntity).save(userEntity);
        logger.debug(`Respuesta de DB userResponse ${JSON.stringify(userResponse)}`);
        return new User({
            id: userResponse.id,
            username: userResponse.username,
            email: userResponse.email,
            passwordHash: userResponse.passwordHash,
            createdAt: userResponse.createdAt,
            lastLogin: userResponse.lastLogin,
            roleId: userResponse.roleId
        });
    }

    async updateUser(user: User, id: string): Promise<User> {
        logger.info("En update user repository")
        // TODO: set user values 
        const userAux = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(userAux)}`);
        const userResponse = AppDataSource.getRepository(UserEntity).merge(userAux, {username: user.username,
            email : user.email,
            passwordHash : user.passwordHash,
            lastLogin : user.lastLogin,
            roleId : user.roleId});
        logger.debug(`Respuesta de DB:${JSON.stringify(userResponse)}`);
        return userResponse? new User({
            id: userResponse.id,
            username: userResponse.username,
            email: userResponse.email,
            passwordHash: userResponse.passwordHash,
            createdAt: userResponse.createdAt,
            lastLogin: userResponse.lastLogin,
            roleId: userResponse.roleId
        }) : null;
    }
}
