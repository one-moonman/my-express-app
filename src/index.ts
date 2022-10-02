import express from "express";
import morgan from "morgan";
import "express-async-errors";
import "dotenv/config";
import { env } from "process";

import router from "./routes";
import connectMongoose from "./config/database.config";

async function bootsrap() {
    await connectMongoose();
    const app = express();
    app
        .use(express.json())
        .use(morgan('tiny'))
        .use('/', router)
        .use((error: any, _: any, res: express.Response, __: any) => {
            return res
                .status(error.statusCode || 500)
                .json({
                    message: error.message || "Internal server error",
                    success: false
                })
        })
        .listen(env.PORT, () => console.warn(`[#] server listening on port:${env.PORT}`))
}

bootsrap()