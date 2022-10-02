import { Router } from "express";
import bookRouter from "./book.route";

const indexRouter = Router();

indexRouter.use('/book', bookRouter)

export default indexRouter;