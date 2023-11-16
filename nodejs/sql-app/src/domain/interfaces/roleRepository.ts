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
