import { DataSource, DataSourceOptions } from "typeorm";
import { env } from "./env";

const {
    db: { type, database, url },
    app: {
        dirs: { entities },
    },
} = env;

const options: DataSourceOptions = {
    type: type as any,
    database,
    url,
    entities,
    logging: true,
    useNewUrlParser: true,
    synchronize: true,
};

export const AppDataSource = new DataSource(options);

// AppDataSource.manager.save(User, { name: "admin", password: "admin" });
