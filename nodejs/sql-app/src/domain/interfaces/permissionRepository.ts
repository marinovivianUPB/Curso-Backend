import { DeleteResult } from "typeorm";
import { Role } from "../models/role";
import { Permission } from "../models/permission";

export interface PermissionRepository {
    findById(id: string): Promise<Role | null>;
    createPermission(permission: Permission): Promise<Permission>;
    updatePermission(permission: Permission, id: string): Promise<Permission>;
    deletePermission(id: string): Promise<DeleteResult>;
}
