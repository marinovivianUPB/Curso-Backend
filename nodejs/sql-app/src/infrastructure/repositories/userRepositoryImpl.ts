import { UserRepository } from "../../domain/interfaces/userRepository";
import { UserEntity } from "../entities/userEntity";
import { AppDataSource } from "../config/dataSource";
import { User } from "../../domain/models/user";
import logger from '../../infrastructure/logger/logger';

export class UserRepositoryImpl implements UserRepository {
    async findById(id: string): Promise<User | null> {
        const userEntity = await AppDataSource.getRepository(UserEntity).findOneBy({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(userEntity)}`);
        return userEntity ? new User(userEntity) : null;
    }

    async createUser(user: User): Promise<User> {
        logger.info("En create user repository")
        // TODO: set user values 
        const userEntity = AppDataSource.getRepository(UserEntity).create({
            username: user.username,
            email: user.email,
            passwordHash: user.passwordHash,
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
        })
    }
}
