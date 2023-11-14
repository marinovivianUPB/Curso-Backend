import express, { Request, Response } from 'express';
import { AppDataSource } from "./infrastructure/config/dataSource";
import { UserService } from './app/services/userService';
import { UserRepositoryImpl } from './infrastructure/repositories/userRepositoryImpl';
import { UserController } from './api/controllers/userController';
import morgan from "morgan";
import logger from "./infrastructure/logger/logger";
import dotenv from 'dotenv';
import {env} from "./infrastructure/config/config";
import { RoleRepositoryImpl } from './infrastructure/repositories/roleRepositoryImpl';
import { RoleService } from './app/services/roleService';
import { RoleController } from './api/controllers/roleController';

AppDataSource.initialize().then(() => {
    const app = express();
    dotenv.config();
     
    const PORT = env.port;
    console.log(PORT);
    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        res.send('Servidor Up');
    });

    

    const roleRepository = new RoleRepositoryImpl();
    const roleService = new RoleService(roleRepository);
    const roleController = new RoleController(roleService);

    app.use('/roles', roleController.router);

    const userRepository = new UserRepositoryImpl();
    const userService = new UserService(userRepository, roleRepository);
    const userController = new UserController(userService);

    app.use('/users', userController.router);

    app.use(
        morgan("combined", {
          stream: { write: (message: string) => logger.info(message.trim()) },
        })
      );

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}).catch(error => console.log(error));
