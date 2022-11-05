import "reflect-metadata";
import app from "./app";
import { env } from "./config/env";
import { AppDataSource } from "./config/typeorm";

const {
    app: { port },
} = env;

AppDataSource.initialize()
    .then(() => {
        console.log("Datasource is connect");

        app.listen(port, () => {
            console.log(`server is open...${port}`);
        });
    })
    .catch((err) =>
        console.error("Error during Data Source initialization", err)
    );
