import express from "express";
import morgan from "morgan";

import router from "./routes";

async function bootsrap() {
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
        .listen(process.env.port || 3000, () => console.warn("Listening on port 3000"))
}

bootsrap()