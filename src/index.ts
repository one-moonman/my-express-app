import express from "express";
import { env } from "process";

async function bootsrap() {
    const app: express.Application = express();
    app.listen(env.port, () => console.warn("App listening on port >>>>"))
}
bootsrap()