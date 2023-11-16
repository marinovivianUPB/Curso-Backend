import { IRoleEntity } from '../entities/IRoleEntity';
import { IUserEntity } from '../entities/IUserEntity';
import { v4 as uuidv4 } from 'uuid';

export class User {
    id: string;
    username: string;
    passwordHash: string;
    email: string;
    createdAt: Date;
    lastLogin: Date | null;
<<<<<<< HEAD
    roleId: IRoleEntity;
=======
    role: IRoleEntity;
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    token: string | null;

    constructor(userEntity: Partial<IUserEntity>) {
        this.id = userEntity.id || uuidv4();
        this.username = userEntity.username;
        this.email = userEntity.email;
        this.passwordHash = userEntity.passwordHash;
        this.createdAt = userEntity.createdAt || new Date();
        this.lastLogin = userEntity.lastLogin;
        this.role = userEntity.role;
    }

}