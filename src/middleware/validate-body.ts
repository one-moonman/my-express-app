import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { UnprocessableEntity } from "http-errors";

export default <T>(schema: Joi.ObjectSchema<T>) => {
    return (req: Request, _: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            const { details } = error;
            const message = details.map(i => i.message).join(',');
            throw new UnprocessableEntity(message);
        }
        next();
    }
}