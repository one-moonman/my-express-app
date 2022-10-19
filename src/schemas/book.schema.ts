import Joi from "joi";
import { IBook } from "../models/book.model";

export default Joi.object<IBook>().keys({
    name: Joi.string().min(3).max(30).required(),
    ganre: Joi.string().min(3).max(30)
})

