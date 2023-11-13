import { IRoleEntity } from "../../domain/entities/IRoleEntity";
import { RoleRepository } from "../../domain/interfaces/roleRepository";
import { Role } from "../../domain/models/role";
import { CreateRoleDto } from "../dtos/create.role.dto";
import { RoleDto } from '../dtos/role.dto';
import logger from '../../infrastructure/logger/logger';
import { UpdateRoleDto } from "../dtos/update.role.dto";
import { DeletedDTO } from "../dtos/deleted";

export class RoleService {
    constructor(private roleRepository: RoleRepository) { }

    async getRoleById(id: string): Promise<RoleDto | null> {

        logger.info("En get role by id service");
        const role = await this.roleRepository.findById(id);
        if (!role){
            return null
        }
        logger.debug(`Get role service: Role regresado por repository ${JSON.stringify(role)}`);

        const roleResponse: RoleDto = {
            id: role.id,
            name: role.name,
            description: role.description
        }
        return roleResponse;
    }

    async createRole(roleDto: CreateRoleDto): Promise<RoleDto> {
        logger.info("En create role service");
        const roleEntity: IRoleEntity = {
            name: roleDto.name,
            description: roleDto.description
        };
        const newRole = new Role(roleEntity);
        const responseRole = await this.roleRepository.createRole(newRole);
        logger.debug(`Create role Service: Role regresado por repository ${JSON.stringify(responseRole)}`);
        return {id: responseRole.id, name: responseRole.name, description: responseRole.description};
    }

    async updateRole(roleDto: UpdateRoleDto, id: string): Promise<RoleDto> {
        logger.info("En update role service");
        const backupRole = await this.roleRepository.findById(id);
        if (!backupRole){
            return null
        }
        logger.debug(`Update role service: Role regresado por repository ${JSON.stringify(backupRole)}`);
        const role: UpdateRoleDto = {
            name: (roleDto.name? roleDto.name: backupRole.name),
            description: (roleDto.description? roleDto.description:backupRole.description)
        }
        const responseRole = await this.roleRepository.updateRole(role, id);
        logger.debug(`Update role Service: Role regresado por repository ${JSON.stringify(responseRole)}`);
        return {id: responseRole.id, name: responseRole.name, description: responseRole.description};
    }

    async deleteRole(id: string): Promise<DeletedDTO | null> {

        logger.info("En delete role by id service");
        const role = await this.roleRepository.deleteRole(id);
        if (!role){
            return null
        }
        logger.debug(`Delete role service: Mensaje regresado por repository ${JSON.stringify(role)}`);

        const roleResponse: DeletedDTO = {
            message: role.raw as string
        }
        return roleResponse;
    }
}
