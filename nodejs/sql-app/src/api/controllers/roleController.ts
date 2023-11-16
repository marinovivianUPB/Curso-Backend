import { Request, Response, Router } from 'express';
import { RoleService } from '../../app/services/roleService';
import { RoleDto } from '../../app/dtos/role.dto';
import { CreateRoleDto } from '../../app/dtos/create.role.dto';
import logger from '../../infrastructure/logger/logger';
import { UpdateRoleDto } from '../../app/dtos/update.role.dto';

export class RoleController {
    public router: Router;
    private roleService: RoleService;

    constructor(roleService: RoleService) {
        this.roleService = roleService;
        this.router = Router();
        this.routes();
    }

    public async getRoleById(req: Request, res: Response): Promise<void> {
        logger.info("Dentro de role by id controller");
        const { id } = req.params;
        const roleDto = await this.roleService.getRoleById(id);
        
        if (!roleDto) {
            logger.error("Error al conseguir role", req.params);
            res.status(404).json({ message: 'Role not found' });
            return;
        }else{
            logger.debug(`Role enviado por roleService ${JSON.stringify(roleDto)}`)
        }

        res.json(roleDto);
    }

    public async createRole(req: Request, res: Response): Promise<Response> {
        logger.info("Dentro de create role controller");
        try {
            const roleDto: CreateRoleDto = req.body;
            const role = await this.roleService.createRole(roleDto);
            logger.debug(`Role enviado por userService ${JSON.stringify(role)}`)
            return res.status(201).json(role);
        } catch (error) {
            logger.error("Error al crear rol: "+error, req.body);
            console.log(error);
            return res.status(400).json({ message: error });
        }
    }

    public async updateRole(req: Request, res: Response): Promise<Response> {
        logger.info("Dentro de update role controller");
        try {
            const { id } = req.params;
            const roleDto: UpdateRoleDto = req.body;
            const role = await this.roleService.updateRole(roleDto, id);
            logger.debug(`Role enviado por roleService ${JSON.stringify(role)}`)
            return res.status(201).json(role);
        } catch (error) {
            logger.error("Error al actualizar role: "+error, req.body);
            console.log(error);
            return res.status(400).json({ message: error });
        }
    }

    public async deleteRole(req: Request, res: Response): Promise<void> {
        logger.info("Dentro de delete role by id controller");
        const { id } = req.params;
        const roleDto = await this.roleService.deleteRole(id);
        
        if (!roleDto) {
            logger.error("Error al eliminar role", req.params);
            res.status(404).json({ message: 'Role not deleted' });
            return;
        }else{
            logger.debug(`Role enviado por roleService ${JSON.stringify(roleDto)}`)
        }

        res.json(roleDto);
    }

    public routes() {
        this.router.get('/:id', this.getRoleById.bind(this));
        this.router.post('/', this.createRole.bind(this));
        this.router.put('/:id', this.updateRole.bind(this));
        this.router.delete('/:id', this.deleteRole.bind(this));
    }
}
