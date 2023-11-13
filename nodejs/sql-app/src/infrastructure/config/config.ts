import dotenv from 'dotenv';
dotenv.config();

export const env = {
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
