import { Router } from "express";
import bookController from "../controllers/book.controller";

const bookRouter = Router();

bookRouter
    .get('/', bookController.getAllOrByName)
    .get('/:id', bookController.getById)
    .post('/', bookController.postOne)
    .put('/:id', bookController.updateOne)
    .delete('/:id', bookController.deleteOne)

export default bookRouter;