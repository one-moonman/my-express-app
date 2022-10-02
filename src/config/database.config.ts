import mongoose from "mongoose";
import { env } from "process";

export default async function connectMongoose() {
    mongoose.connect(env.DATABASE_URL)
        .then(() => console.warn("[#] mongo database connected"))
        .catch(err => {
            console.error("\x1b[35m", err);
            process.exit(1);
        })
}