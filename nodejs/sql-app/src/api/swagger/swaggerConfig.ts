import swaggerJsdoc from 'swagger-jsdoc';
import { swagger } from '../../infrastructure/config/config';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: swagger.title,
        version: swagger.version,
        description: 'Esta es la documentación de mi API',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor de Desarrollo',
        },
        {
            url: 'http://localhost:3070',
            description: 'Servidor de QA'
        }
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/api/controllers/*.ts', './src/api/swagger/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;