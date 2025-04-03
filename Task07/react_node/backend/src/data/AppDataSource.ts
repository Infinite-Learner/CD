import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "Posts",
    synchronize: true,
    logging: false,
    entities: [`${process.cwd()}/src/entities/*.ts`],
    migrations: [`${process.cwd()}/src/migrations/*.ts`],
});