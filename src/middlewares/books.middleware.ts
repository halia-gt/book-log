import { Request, Response, NextFunction } from "express";
import { bookSchema, finishedBookSchema } from "../schemas/book.schema.js";

function bookSchemaValidation (req: Request, res: Response, next: NextFunction) {
    const { error } = bookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors: string[] = error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }
    
    res.locals.body = req.body;
    next();
}

function finishedBookSchemaValidation (req: Request, res: Response, next: NextFunction) {
    const { error } = finishedBookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors: string[] = error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }
    
    res.locals.body = req.body;
    next();
}


export { bookSchemaValidation, finishedBookSchemaValidation };