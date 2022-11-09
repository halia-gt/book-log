import { Request, Response } from "express";
import { Book } from "../protocols/Book.js";
import * as authorRepository from "../repositories/authors.repository.js";
import * as bookRepository from "../repositories/books.repository.js";

async function insertBook(req: Request, res: Response) {
    const book: Book = res.locals.body;

    try {
        let authorId: string | void = (await authorRepository.getAuthorIdByName({ name: book.author })).rows[0]?.id;
        if (!authorId) {
            authorId = (await authorRepository.createAuthor({ name: book.author })).rows[0].id;
        }

        await bookRepository.postBook({...book, authorId});

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }  
}

async function readBooks(req: Request, res: Response) {
    try {
        const books: Book[] = (await bookRepository.getBooks()).rows;

        res.send(books);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    insertBook,
    readBooks
}