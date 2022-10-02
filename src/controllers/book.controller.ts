import { Request, Response } from "express";
import { NotFound } from "http-errors";
import bookService from "../services/book.service";

export default {
    postOne: async (req: Request, res: Response) => {
        const doc = await bookService.create(req.body);
        return res.status(200).json(doc);
    },
    getAllOrByName: async (req: Request, res: Response) => {
        if (!req.query.name) {
            const docs = await bookService.findAll();
            return res.status(200).json(docs);
        }
        const queryName = `${req.query.name}`;
        const doc = await bookService.findByName(queryName);
        if (!doc) throw new NotFound();
        return res.status(200).json(doc);
    },
    getById: async (req: Request, res: Response) => {
        const doc = await bookService.findById(req.params.id);
        if (!doc) throw new NotFound();
        return res.status(200).json(doc);
    },
    updateOne: async (req: Request, res: Response) => {
        const doc = await bookService.update(req.params.id, req.body);
        if (!doc) throw new NotFound();
        return res.status(200).json(doc);
    },
    deleteOne: async (req: Request, res: Response) => {
        const doc = await bookService.delete(req.params.id);
        if (!doc) throw new NotFound();
        return res.status(200).json(doc);
    }
}