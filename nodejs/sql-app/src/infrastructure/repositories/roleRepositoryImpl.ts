import { DeleteResult } from "typeorm";
import { UpdateRoleDto } from "../../app/dtos/update.role.dto";
import { RoleRepository } from "../../domain/interfaces/roleRepository";
import { Role } from "../../domain/models/role";
import logger from '../../infrastructure/logger/logger';
import { AppDataSource } from "../config/dataSource";
import { RoleEntity } from "../entities/roleEntity";

export class RoleRepositoryImpl implements RoleRepository {
    async findById(id: string): Promise<Role> {
        logger.info("En find by id role repository")
        const roleEntity = await AppDataSource.getRepository(RoleEntity).findOneBy({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(roleEntity)}`);
        return roleEntity ? new Role(roleEntity) : null;
    }
    async createRole(role: Role): Promise<Role> {
        logger.info("En create role repository")

        const roleEntity = AppDataSource.getRepository(RoleEntity).create({
            id: role.id,
            name: role.name,
            description: role.description
        });
        logger.debug(`Respuesta de DB roleEntity ${JSON.stringify(roleEntity)}`);

        

        const roleResponse = await AppDataSource.getRepository(RoleEntity).save(roleEntity);
        logger.debug(`Respuesta de DB roleResponse ${JSON.stringify(roleResponse)}`);
        return new Role({
            id: roleResponse.id,
            name: roleResponse.name,
            description: roleResponse.description
        })
    }
    async updateRole(role: UpdateRoleDto, id: string): Promise<Role> {
        logger.info("En update role repository")
        // TODO: set user values 
        const roleEntity = AppDataSource.getRepository(RoleEntity).update({id}, {name: role.name, description: role.description});
        logger.debug(`Respuesta de DB roleEntity ${JSON.stringify(roleEntity)}`);
        const roleAux = await AppDataSource.getRepository(RoleEntity).findOneBy({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(roleAux)}`);
        const roleResponse = AppDataSource.getRepository(RoleEntity).merge(roleAux, role);
        logger.debug(`Respuesta de DB:${JSON.stringify(roleResponse)}`);
        return roleResponse? new Role({
            id: roleResponse.id,
            name: roleResponse.name,
            description: roleResponse.description
        }) : null;
    }
    
    async deleteRole(id: string): Promise<DeleteResult> {
        logger.info("En delete role repository")
        const roleEntity = await AppDataSource.getRepository(RoleEntity).delete({ id });
        logger.debug(`Respuesta de DB:${JSON.stringify(roleEntity)}`);
        return roleEntity;
    }
}