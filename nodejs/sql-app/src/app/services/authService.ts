import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import logger from "../../infrastructure/logger/logger";
import { LoginDTO } from "../dtos/login.dto";
import { UserDto } from "../dtos/user.dto";
import { User } from "../../domain/models/user";
import { Encrypt } from "../utils/encrypt";
import bcrypt from "bcryptjs";
import { UserAuthDto } from "../dtos/auth.user.dto";
import { RedisCacheService } from "../../infrastructure/cache/redis.cache";

export class AuthService {

    constructor(private userRepository: UserRepository, private encrypt: Encrypt, private redisCachService: RedisCacheService) {
        
    }

    async getCache(){
        const USER_KEY = 'USER';
        const userID =1;
        const ROLE_KEY="role";
        const roleID=123;
        const sol = await this.redisCachService.get(`${USER_KEY}:{userID}`);
        console.log(sol);
    }

    async login(loginDTO: LoginDTO): Promise<UserAuthDto> {
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user: User = await this.userRepository.findByEmail(userEntity.email);
        if (!user) {
            logger.error(`El usuario con el email: ${userEntity.email} no existe`);
            throw Error('El email o el password son incorrectos');
        }

        const isPasswordCorrect = await bcrypt.compare(userEntity.passwordHash, user.passwordHash);
        if (!isPasswordCorrect) {
            logger.error(`La contraseña es incorrecta : ${userEntity.email}`);
            throw Error('El email o el password son incorrectos');
        }
        const USER_KEY = 'USER';
        this.redisCachService.set(`${USER_KEY}:${user.id}`, JSON.stringify(user));

        const token = this.encrypt.encrypt({ userId: user.id });

        user.token = token;
        user.lastLogin = new Date();

        const userUpdated = await this.userRepository.updateUser(user, user.id);

        return {
            id: userUpdated.id,
            username: userUpdated.username,
            email: userUpdated.email,
            lastLogin: userUpdated.lastLogin,
            token: user.token
        };
    }
}