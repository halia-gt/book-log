import { Request, Response } from "express";
import { Book, finishedBook } from "../protocols/Book.js";
import * as authorRepository from "../repositories/authors.repository.js";
import * as bookRepository from "../repositories/books.repository.js";

async function insertBook(req: Request, res: Response) {
    const book: Book = res.locals.body;

    try {
        let authorId: number = Number((await authorRepository.getAuthorIdByName({ name: book.author })).rows[0]?.id);
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

async function deleteBook(req: Request, res: Response) {
    const id: string = req.params.id;
    try {
        const book: Book = (await bookRepository.getBookById({ id })).rows[0];
        if (!book) {
            res.sendStatus(404);
            return;
        }

        await bookRepository.deleteBookById({ id });

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function finishReadingBook(req: Request, res: Response) {
    const id: string = req.params.id;
    const data: finishedBook = res.locals.body;

    try {
        const book: Book = (await bookRepository.getBookById({ id })).rows[0];
        if (!book) {
            res.sendStatus(404);
            return;
        }

        await bookRepository.updateFinishedBook({ id, rating: data.rating, date_finished: data.date_finished });

        res.sendStatus(202);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    insertBook,
    readBooks,
    deleteBook,
    finishReadingBook
};