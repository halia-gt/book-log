import { Request, Response, NextFunction } from "express";
import { Book } from "../protocols/Book.js";
import { bookSchema, finishedBookSchema } from "../schemas/book.schema.js";
import * as bookRepository from "../repositories/books.repository.js";

function bookSchemaValidation (req: Request, res: Response, next: NextFunction): void {
    const { error } = bookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors: string[] = error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }
    
    res.locals.body = req.body;
    next();
}

function finishedBookSchemaValidation (req: Request, res: Response, next: NextFunction): void {
    const { error } = finishedBookSchema.validate(req.body, { abortEarly: false });
    if (error) {
        const errors: string[] = error.details.map(error => error.message);
        res.status(422).send({ message: errors });
        return;
    }
    
    res.locals.body = req.body;
    next();
}

async function bookIdValidation (req: Request, res: Response, next: NextFunction): Promise<void> {
    const id: string = req.params.id;

    if (!id) {
        res.sendStatus(400);
        return;
    }

    try {
        const book: Book = (await bookRepository.getBookById({ id })).rows[0];
        if (!book) {
            res.sendStatus(404);
            return;
        }

        res.locals.id = id;
        next();
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}


export {
    bookSchemaValidation,
    finishedBookSchemaValidation,
    bookIdValidation
};