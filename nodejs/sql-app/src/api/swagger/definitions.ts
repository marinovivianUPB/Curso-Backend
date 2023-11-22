/**
 * @swagger
 * components:
 *   schemas:
 *     LoginCredentials:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         username: "usuario_ejemplo"
 *         password: "contraseña123"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUserCredentials:
 *       type: object
 *       required:
 *       properties:
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         username: "usuario_ejemplo"
 *         password: "contraseña123"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserCredentials:
 *       type: object
 *       required:
 *         - email
 *         - username
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: "usuario@ejemplo.com"
 *         username: "usuario_ejemplo"
 *         password: "contraseña123"
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ResponseUserCredentials:
 *       type: object
 *       required:
 *         - id
 *         - email
 *         - username
 *         - password
 *         - lastLogin
 *       properties:
 *         id:
 *           type: string
 *         email:
 *           type: string
 *         username:
 *           type: string
 *         lastLogin:
 *           type: timestamp
 *       example:
 *         id: "8773-fsf24-25gdfg"
 *         email: "usuario@ejemplo.com"
 *         username: "usuario_ejemplo"
 *         lastLogin: "11/11/2023 22:30"
 */