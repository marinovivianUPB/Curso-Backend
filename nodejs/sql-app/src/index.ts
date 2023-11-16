import express, { Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import { AppDataSource } from "./infrastructure/config/dataSource";
import { UserService } from './app/services/userService';
import { UserRepositoryImpl } from './infrastructure/repositories/userRepositoryImpl';
import { UserController } from './api/controllers/userController';
<<<<<<< HEAD
import morgan from "morgan";
import logger from "./infrastructure/logger/logger";
import dotenv from 'dotenv';
import {env} from "./infrastructure/config/config";
import { RoleRepositoryImpl } from './infrastructure/repositories/roleRepositoryImpl';
import { RoleService } from './app/services/roleService';
import { RoleController } from './api/controllers/roleController';
=======
import logger from './infrastructure/logger/logger';
import { env } from './infrastructure/config/config';
import { RoleRepositoryImpl } from './infrastructure/repositories/roleRepositoryImpl';
import { RoleService } from './app/services/roleService';
import { RoleController } from './api/controllers/roleController';
import { AuthController } from './api/controllers/authController';
import { AuthService } from './app/services/authService';
import { apiRoutes } from './api/controllers/apiRoutes';
import { EncryptImpl } from './infrastructure/utils/encrypt.jwt';
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d

AppDataSource.initialize().then(() => {
    const app = express();
    dotenv.config();
<<<<<<< HEAD
     
    const PORT = env.port;
    console.log(PORT);
=======

    const PORT = env.port;

>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    app.use(express.json());

    // Setup Logger 
    app.use(morgan('combined', { stream: { write: (message: string) => logger.info(message.trim()) } }));

    app.get('/', (req: Request, res: Response) => {
        res.send('Servidor Up');
    });

<<<<<<< HEAD
    

    const roleRepository = new RoleRepositoryImpl();
    const roleService = new RoleService(roleRepository);
    const roleController = new RoleController(roleService);

    app.use('/roles', roleController.router);

    const userRepository = new UserRepositoryImpl();
    const userService = new UserService(userRepository, roleRepository);
    const userController = new UserController(userService);
=======
    const encrypt = new EncryptImpl();
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d

    const roleRepository = new RoleRepositoryImpl();
    const roleService = new RoleService(roleRepository);
    const roleController = new RoleController(roleService);
    const userRepository = new UserRepositoryImpl();
    const userService = new UserService(userRepository, roleRepository);
    const userController = new UserController(userService);
    const authService = new AuthService(userRepository, encrypt);
    const authController = new AuthController(authService);
    
    // app.use('/api', apiRoutes());
    app.use('/users', userController.router);
    app.use('/roles', roleController.router);
    app.use('/auth', authController.router);

    app.use(
        morgan("combined", {
          stream: { write: (message: string) => logger.info(message.trim()) },
        })
      );

    app.listen(PORT, () => {
        console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
}).catch(error => console.log(error));
