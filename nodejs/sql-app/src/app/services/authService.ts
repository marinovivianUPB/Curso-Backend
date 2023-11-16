import { IUserEntity } from "../../domain/entities/IUserEntity";
import { UserRepository } from "../../domain/interfaces/userRepository";
import logger from "../../infrastructure/logger/logger";
import { LoginDTO } from "../dtos/login.dto";
import { UserDto } from "../dtos/user.dto";
import { User } from "../../domain/models/user";
import { Encrypt } from "../utils/encrypt";
import bcrypt from "bcrypt";
<<<<<<< HEAD
import { UserAuthDto } from "../dtos/auth.user.dto";
=======
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d

export class AuthService {

    constructor(private userRepository: UserRepository, private encrypt: Encrypt) {

    }

<<<<<<< HEAD
    async login(loginDTO: LoginDTO): Promise<UserAuthDto> {
=======
    async login(loginDTO: LoginDTO): Promise<UserDto> {
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
        const userEntity: Partial<IUserEntity> = {
            email: loginDTO.email,
            passwordHash: loginDTO.password
        };
        const user: User = await this.userRepository.findByEmail(userEntity.email);
        if (!user) {
            logger.error(`El usuario con el email: ${userEntity.email} no existe`);
            throw Error('El email o el password son incorrectos');
        }

<<<<<<< HEAD
=======
        // TODO: llevarlo al utils 

>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
        const isPasswordCorrect = await bcrypt.compare(userEntity.passwordHash, user.passwordHash);
        if (!isPasswordCorrect) {
            logger.error(`La contraseña es incorrecta : ${userEntity.email}`);
            throw Error('El email o el password son incorrectos');
        }

        const token = this.encrypt.encrypt({ userId: user.id });
<<<<<<< HEAD

        user.token = token;
        user.lastLogin = new Date();

        const userUpdated = await this.userRepository.updateUser(user, user.id);
=======
        user.token = token;
        user.lastLogin = new Date();

        const userUpdated = await this.userRepository.updateUser(user.id, user);
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d

        return {
            id: userUpdated.id,
            username: userUpdated.username,
            email: userUpdated.email,
            lastLogin: userUpdated.lastLogin,
            token: user.token
        };
    }
}