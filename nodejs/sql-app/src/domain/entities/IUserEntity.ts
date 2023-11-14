import { RoleEntity } from "../../infrastructure/entities/roleEntity";

export interface IUserEntity {
    id?: string;
    username: string;
    email: string;
    passwordHash: string;
    createdAt: Date;
    lastLogin: Date | null;
    roleId: RoleEntity;
}