import { Request, Response } from "express";
import { Book, finishedBook } from "../protocols/Book.js";
import * as authorRepository from "../repositories/authors.repository.js";
import * as bookRepository from "../repositories/books.repository.js";

async function insertBook(req: Request, res: Response): Promise<void> {
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

async function readBooks(req: Request, res: Response): Promise<void> {
    try {
        const books: Book[] = (await bookRepository.getBooks()).rows;

        res.send(books);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function deleteBook(req: Request, res: Response): Promise<void> {
    const id: string = res.locals.id;
    try {

        await bookRepository.deleteBookById({ id });

        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function finishReadingBook(req: Request, res: Response): Promise<void> {
    const id: string = res.locals.id;
    const data: finishedBook = res.locals.body;

    try {

        await bookRepository.postFinishedBook({ id, rating: data.rating, date_finished: data.date_finished });

        res.sendStatus(202);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

async function updateBook(req: Request, res: Response): Promise<void> {
    const id: string = res.locals.id;
    const newBook: Book = res.locals.body;

    try {

        if (newBook.date_finished && newBook.rating) {
            await bookRepository.updateFinishedBook(newBook, id);
        } else {
            await bookRepository.updateUnfinishedBook(newBook, id);
        }

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
    finishReadingBook,
    updateBook
};