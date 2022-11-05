import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "./env";

const {
    db: { type, database, logging },
    app: {
        dirs: { entities },
    },
} = env;

const options: DataSourceOptions = {
    type: type as any,
    database,
    logging: logging as any,
    entities,
};

export const AppDataSource = new DataSource(options);
