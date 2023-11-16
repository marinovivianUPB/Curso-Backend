import dotenv from 'dotenv';
dotenv.config();

export const env = {
<<<<<<< HEAD
    port: process.env.ENV_PORT
}

export const db = {
    host: process.env.BD_HOST || "localhost",
    user: process.env.BD_USER || "root",
    pass: process.env.BD_PASS || "",
    port: process.env.BD_PORT || 3306,
    name: process.env.BD_NAME || "app"
}

export const log = {
    level: process.env.LOG_LEVEL || "info"
}
=======
    port: process.env.ENV_PORT || 3000,
    environment: process.env.ENV || 'develop'
};

export const db = {
    port: process.env.BD_PORT || 3306,
    type: process.env.BD_TYPE || 'mysql',
    username: process.env.BD_USER || 'root',
    password: process.env.BD_PASS || 'root',
    host: process.env.BD_HOST || 'localhost',
    database: process.env.BD_NAME || 'app',
}

export const lg = {
    level: process.env.LG_LEVEL || 'info'
}

export const jwt = {
    secretKey: process.env.JWT_SECRET || 'your_secret_key',
    expirationTime: process.env.JWT_TIME_EXPIRED || '1h'
}
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
