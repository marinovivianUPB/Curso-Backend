import "reflect-metadata";
import { DataSource } from "typeorm";
import { UserEntity } from "../entities/userEntity";
import {db} from "./config";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: db.host,
    port: db.port as number,
    username: db.user,
    password: db.pass,
    database: db.name,
    synchronize: true,
    logging: false,
    entities: [UserEntity],
    subscribers: [],
    migrations: [],
});
