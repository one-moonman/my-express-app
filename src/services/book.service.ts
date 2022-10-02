import { Book, BookDocument, IBook } from "../schemas/book.schema";

export default {
    create: (book: IBook) => {
        const doc = new Book(book);
        return doc.save();
    },
    findAll: () => (Book.find({}).exec()),
    findById: (id: string) => (Book.findById(id).exec()),
    findByName: (name: string) => (Book.findOne({ name }).exec()),
    update: (id: string, updates: Partial<IBook>) => (Book.findByIdAndUpdate(id, updates).exec()),
    delete: (id: string) => (Book.findByIdAndDelete(id).exec())
}