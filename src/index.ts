import app from "./app";
import { env } from "./config/env";

const {
    app: { port },
} = env;

app.listen(port, () => {
    console.log(`server is open...${port}`);
});
