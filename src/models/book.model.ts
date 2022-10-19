import mongoose, { Schema, model, Document } from "mongoose";

export interface IBook {
    name: string;
    ganre?: string;
}
export interface BookDoc extends IBook, Document { }

export const BookModel = model<IBook>('Book', new Schema<IBook>({
    name: { type: String, required: true, unique: true },
    ganre: String,
}));
