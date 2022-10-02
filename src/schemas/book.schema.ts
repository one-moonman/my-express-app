import { Schema, model, Document } from "mongoose";

export interface IBook {
    name: string;
    ganre?: string;
}

export interface BookDocument extends Document, IBook { }

export const bookSchema = new Schema<IBook>({
    name: { type: String, required: true, unique: true },
    ganre: String,
});

export const Book = model<IBook>('Book', bookSchema);
