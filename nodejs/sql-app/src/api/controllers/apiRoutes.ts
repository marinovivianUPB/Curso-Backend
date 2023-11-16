import { Router } from 'express';
import { AuthService } from '../../app/services/authService';
import { RoleService } from '../../app/services/roleService';
import { UserService } from '../../app/services/userService';
import { RoleRepositoryImpl } from '../../infrastructure/repositories/roleRepositoryImpl';
import { UserRepositoryImpl } from '../../infrastructure/repositories/userRepositoryImpl';
import { AuthController } from './authController';
import { RoleController } from './roleController';
import { UserController } from './userController';
import { EncryptImpl } from '../../infrastructure/utils/encrypt.jwt';
import { RedisCacheService } from '../../infrastructure/cache/redis.cache';
import { PermissionRepositoryImpl } from '../../infrastructure/repositories/permissionRepositoryImpl';
import { PermissionService } from '../../app/services/permissionService';
import { PermissionController } from './permissionController';

const encrypt = new EncryptImpl();
const redisCacheService = new RedisCacheService();

const roleRepository = new RoleRepositoryImpl();
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);
const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository, roleRepository);
const userController = new UserController(userService);
const authService = new AuthService(userRepository, encrypt, redisCacheService);
const authController = new AuthController(authService);
const permissionRepository = new PermissionRepositoryImpl();
const permissionService = new PermissionService(permissionRepository);
const permissionController = new PermissionController(permissionService);

export function apiRoutes(): Router {
    const router = Router();

    router.use('/users', userController.router);
    router.use('/roles', roleController.router);
    router.use('/auth', authController.router);
    router.use('/permissions', permissionController.router);

    return router;
}
