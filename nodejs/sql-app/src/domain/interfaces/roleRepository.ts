<<<<<<< HEAD
import { DeleteResult } from "typeorm";
import { UpdateRoleDto } from "../../app/dtos/update.role.dto";
import { Role } from "../models/role";
import { RoleDto } from "../../app/dtos/role.dto";

export interface RoleRepository {
    findById(id: string): Promise<Role | null>;
    createRole(role: Role): Promise<Role>;
    updateRole(role: UpdateRoleDto, id: string): Promise<Role>;
    deleteRole(id: string): Promise<DeleteResult>;
}
=======
import { Role } from "../models/role";

export interface RoleRepository {
    findById(id: string): Promise<Role | null>;
    createRole(user: Role): Promise<Role>;
    deleteRole(id: string): Promise<void>;
    updateRole(roleId: string, updateData: Partial<Role>): Promise<Role>;
}
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
