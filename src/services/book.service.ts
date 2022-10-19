import { BookModel, IBook, BookDoc } from "../models/book.model";

export default {
    create: async (book: IBook): Promise<BookDoc> => (BookModel.create(book)),
    findAll: async (): Promise<BookDoc[]> => (BookModel.find({}).exec()),
    findById: async (id: string): Promise<BookDoc | null> => (BookModel.findById(id)),
    findByName: async (name: string): Promise<BookDoc | null> => (BookModel.findOne({ name }).exec()),
    update: async (id: string, updates: Partial<IBook>): Promise<BookDoc | null> => (BookModel.findByIdAndUpdate(id, updates).exec()),
    delete: async (id: string): Promise<BookDoc | null> => (BookModel.findByIdAndDelete(id).exec())
}