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
        const userEntity = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(userEntity)}`);
        return userEntity ? new User(userEntity) : null;
    }

    async findByEmail(email: string): Promise<User | null> {
        const userRepository = AppDataSource.getRepository(UserEntity);
        const user = await userRepository.findOne({
            where: { email },
            relations: ['role']
        });
        return user ? new User(user) : null;
    }

    async createUser(user: User): Promise<User> {
        logger.info("En create user repository")
        // TODO: set user values 
        const userEntity = AppDataSource.getRepository(UserEntity).create({
            username: user.username,
            email: user.email,
            passwordHash: hash,
            createdAt: user.createdAt || new Date(),
            lastLogin: user.lastLogin || null,
            role: user.role
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
            role: userResponse.role
        });
    }

    async deleteUser(id: string): Promise<void> {

        const repository = AppDataSource.getRepository(UserEntity);
        const user = await repository.findOneBy({ id });

        if (!user) {
            logger.error(`UserRepository: Error al eliminar al usuario con ID: ${id}.`);
            throw new Error('Usuario no encontrado');
        }

        await repository.remove(user);
    }

    async updateUser(id: string, updateData: Partial<User>): Promise<User> {
        const repository = AppDataSource.getRepository(UserEntity);
        const user = await repository.findOneBy({ id });

        if (!user) {
            logger.error(`UserRepository: Error al modificar al usuario con ID: ${id}.`);
            throw new Error('Usuario no encontrado');
        }

        // if (user.role.id !== updateData.roleId)
        // get role a partir del updateData.roleId
        // if (!role) 
        // user.role = role

        repository.merge(user, updateData);
        const updatedUser = await repository.save(user);
        return updatedUser;
    }

    async updateUser(user: User, id: string): Promise<User> {
        logger.info("En update user repository")
        // TODO: set user values 
        const userEntity = await AppDataSource.getRepository(UserEntity).update({id}, {username: user.username, email: user.email, passwordHash: user.passwordHash, roleId: user.roleId});
        logger.debug(`Respuesta de DB userEntity ${JSON.stringify(userEntity)}`);
        const userAux = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(userAux)}`);
        const userResponse = AppDataSource.getRepository(UserEntity).merge(userAux);
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
