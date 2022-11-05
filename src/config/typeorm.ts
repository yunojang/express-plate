import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "./env";

const {
    db: { type, url },
    app: {
        dirs: { entities },
    },
} = env;

const options: DataSourceOptions = {
    type: type as any,
    url,
    entities,
    logging: true,
    useNewUrlParser: true,
    synchronize: true,
};

export const AppDataSource = new DataSource(options);
