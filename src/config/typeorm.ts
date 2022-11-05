import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "./env";

const { type, database, logging } = env.db;

const options: DataSourceOptions = {
    type: type as any,
    database,
    logging: logging as any,
};

export const AppDataSource = new DataSource(options);
