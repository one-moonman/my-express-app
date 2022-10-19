import express from "express";
import morgan from "morgan";
import "express-async-errors";
import "dotenv/config";
import { env } from "process";

import router from "./routes";
import connectMongoose from "./config/database.config";

import { bagger } from '@digitalroute/bagger';
import swaggerUi from 'swagger-ui-express';

async function bootsrap() {
    await connectMongoose();

    bagger
        .configure()
        .info({
            title: 'Bagger API',
            version: 'v1',
            description: 'Provides resources related to building swagger definitions'
        });

    const app = express();
    app
        .use(express.json())
        .use(morgan('tiny'))
        .use('/api', swaggerUi.serve, swaggerUi.setup(bagger.compile()))
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