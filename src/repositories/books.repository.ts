import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Book } from "../protocols/Book.js";

async function postBook ({ title, authorId, pages, genre, series, format, date_started }): Promise<QueryResult> {
    const query: string = `INSERT INTO books (title, author_id, pages, genre, series, format, date_started) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    return connection.query(query, [title, authorId, pages, genre, series, format, date_started]);
}

async function getBooks ():Promise<QueryResult<Book>> {
    const query: string = `SELECT
            books.id,
            title,
            authors.name AS author,
            pages,
            rating,
            genre,
            series,
            format,
            date_started,
            date_finished
        FROM books
        JOIN authors ON authors.id = books.author_id
        ORDER BY date_finished DESC;
    `;
    return connection.query(query);
}

async function getBookById ({ id }): Promise<QueryResult<Book>> {
    const query: string = `SELECT
            books.id,
            title,
            authors.name AS author,
            pages,
            rating,
            genre,
            series,
            format,
            date_started,
            date_finished
        FROM books
        JOIN authors ON authors.id = books.author_id
        WHERE books.id = $1;
    `;
    return connection.query(query, [id]);
}

async function deleteBookById ({ id }): Promise<QueryResult> {
    const query: string = `DELETE FROM books WHERE id = $1;`;
    return connection.query(query, [id]);
}

async function postFinishedBook ({ id, rating, date_finished  }): Promise<QueryResult> {
    const query: string = `UPDATE books SET
            rating = $2,
            date_finished = $3
        WHERE books.id = $1;
    `;
    return connection.query(query, [id, rating, date_finished]);
}

async function updateUnfinishedBook (book: Book, id: string): Promise<QueryResult> {
    const query: string = `UPDATE books SET
            title = $1,
            pages = $2,
            genre = $3,
            series = $4,
            format = $5,
            date_started = $6,
        WHERE id = $7;    
    `;
    return connection.query(query, [book.title, book.pages, book.genre, book.series, book.format, book.date_started, id]);
}

async function updateFinishedBook (book: Book, id: string): Promise<QueryResult> {
    const query: string = `UPDATE books SET
            title = $1,
            pages = $2,
            genre = $3,
            series = $4,
            format = $5,
            date_started = $6,
            rating = $7,
            date_finished = $8
        WHERE id = $9;    
    `;
    return connection.query(query, [book.title, book.pages, book.genre, book.series, book.format, book.date_started, book.rating, book.date_finished, id]);
}

export {
    postBook,
    getBooks,
    getBookById,
    deleteBookById,
    postFinishedBook,
    updateUnfinishedBook,
    updateFinishedBook
};