import { Request, Response, Router } from 'express';
import { UserService } from '../../app/services/userService';
import { UserDto } from '../../app/dtos/user.dto';
import { CreateUserDTO } from '../../app/dtos/create.user.dto';
import logger from '../../infrastructure/logger/logger';
<<<<<<< HEAD
import { UpdateUserDTO } from '../../app/dtos/update.user.dto';
=======
import { verifyTokenMiddleware } from '../middleware/verifyToken';
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d

export class UserController {
    public router: Router;
    private userService: UserService;


    constructor(userService: UserService) {
        this.userService = userService;
        this.router = Router();
        this.routes();
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        logger.info("Dentro de user by id controller");
        const { id } = req.params;
        console.log('testing=====', req.user_id);
        const userDto = await this.userService.getUserById(id);
        
        if (!userDto) {
            logger.error("Error al conseguir usuario", req.params);
            res.status(404).json({ message: 'User not found' });
            return;
        }else{
            logger.debug(`Usuario enviado por userService ${JSON.stringify(userDto)}`)
        }

        res.json(userDto);
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        logger.info("Dentro de create user controller");
        try {
            const userDto: CreateUserDTO = req.body;
            const user = await this.userService.createUser(userDto);
            logger.debug(`Usuario enviado por userService ${JSON.stringify(user)}`)
            return res.status(201).json(user);
        } catch (error) {
<<<<<<< HEAD
            logger.error("Error al crear usuario: "+error, req.body);
            console.log(error);
            return res.status(500).json({ message: error.message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        logger.info("Dentro de update user controller");
        try {
            const { id } = req.params;
            const userDto: UpdateUserDTO = req.body;
            const user = await this.userService.updateUser(userDto, id);
            logger.debug(`Usuario enviado por userService ${JSON.stringify(user)}`)
            return res.status(201).json(user);
        } catch (error) {
            logger.error("Error al actualizar usuario: "+error, req.body);
            console.log(error);
=======
            if (error instanceof Error) {
                console.log(error.message);
                return res.status(400).json({ message: error.message });
            }
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
            return res.status(400).json({ message: error });

        }
    }

<<<<<<< HEAD
    public async deleteUser(req: Request, res: Response): Promise<void> {
        logger.info("Dentro de delete user by id controller");
        const { id } = req.params;
        const userDto = await this.userService.deleteUser(id);
        
        if (!userDto) {
            logger.error("Error al eliminar usuario", req.params);
            res.status(404).json({ message: 'User not deleted' });
            return;
        }else{
            logger.debug(`Usuario enviado por userService ${JSON.stringify(userDto)}`)
        }

        res.json({ message: 'Usuario eliminado exitosamente' });
    }

=======
    public async deleteUser(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        try {
            logger.debug(`Intentando eliminar al usuario con ID: ${userId}`);
            await this.userService.deleteUser(userId);
            logger.info(`Usuario con ID: ${userId} eliminado con éxito`);
            return res.status(200).json({ message: 'Usuario eliminado con éxito' });
        } catch (error) {
            logger.error(`Error al eliminar al usuario con ID: ${userId}. Error: ${error}`);
            return res.status(500).json({ message: error });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        const { userId } = req.params;
        const updateData = req.body;
        try {
            logger.debug(`Intentando actualizar al usuario con ID: ${userId}`);
            const updatedUser = await this.userService.updateUser(userId, updateData);
            logger.info(`Usuario con ID: ${userId} actualizado con éxito`);
            return res.status(200).json({ user: updatedUser });
        } catch (error) {
            logger.error(`Error al actualizar al usuario con ID: ${userId}. Error: ${error}`);
            return res.status(500).json({ message: 'Error al actualizar el usuario' });
        }
    };

>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    public routes() {
        this.router.get('/:id', verifyTokenMiddleware, this.getUserById.bind(this));
        this.router.post('/', this.createUser.bind(this));
<<<<<<< HEAD
        this.router.put('/:id', this.updateUser.bind(this));
        this.router.delete('/:id', this.deleteUser.bind(this));
=======
        this.router.delete('/:userId', this.deleteUser.bind(this));
        this.router.put('/:userId', this.updateUser.bind(this));
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    }
}
