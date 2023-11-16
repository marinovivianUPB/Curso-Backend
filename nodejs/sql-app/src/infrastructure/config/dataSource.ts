import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/userEntity";
<<<<<<< HEAD
import {db} from "./config";
import { RoleEntity } from "../entities/roleEntity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: db.host,
    port: db.port as number,
    username: db.user,
    password: db.pass,
    database: db.name,
=======
import { db } from '../../infrastructure/config/config';
import { RoleEntity } from "../entities/roleEntity";

export const AppDataSource = new DataSource({
    type: db.type as "mysql" | "mariadb",
    host: db.host,
    port: db.port as number,
    username: db.username,
    password: db.password,
    database: db.database,
>>>>>>> aaa646fa8c6ce9b6c300222b93386f804fc0e67d
    synchronize: true,
    logging: false,
    entities: [UserEntity, RoleEntity],
    subscribers: [],
    migrations: [],
});
