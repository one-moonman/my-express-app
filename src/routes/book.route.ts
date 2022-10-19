import { Router } from "express";
import bookController from "../controllers/book.controller";
import validateBody from "../middleware/validate-body";
import BookSchema from "../schemas/book.schema";
import { bagger } from '@digitalroute/bagger';
import Joi from "joi";


bagger
    .addRequest('/book', 'get')
    .addTag('books')
    .addResponse(bagger.response(200).description('All books'))

bagger
    .addRequest('/book', 'post')
    .addTag('books')
    .body(
        bagger
            .requestBody()
            .description('A body')
            .required(true)
            .content('application/json', BookSchema)
    )
    .addResponse(bagger.response(201).description('Your book is created'))


bagger
    .addRequest('/book/{id}', 'get')
    .addTag('books')
    .addParameter(
        bagger
            .parameter()
            .path('id')
            .schema(Joi.string().required())
            .description('ID of one bag')
            .required(true)
    )
    .addResponse(bagger.response(200).description('Your book is found').content('application/json', BookSchema))
    .addResponse(bagger.response(400).description('Not Found'))

const bookRouter = Router();

bookRouter
    .get('/', bookController.getAllOrByName)
    .post('/', validateBody(BookSchema), bookController.postOne)
    .get('/:id', bookController.getById)
    .put('/:id', bookController.updateOne)
    .delete('/:id', bookController.deleteOne)

export default bookRouter;