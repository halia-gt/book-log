import { connection } from "../database/db.js";

async function postBook ({ title, authorId, pages, genre, series, format, date_started }) {
    const query: string = `INSERT INTO books (title, author_id, pages, genre, series, format, date_started) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    return connection.query(query, [title, authorId, pages, genre, series, format, date_started]);
}

async function getBooks () {
    const query: string = `SELECT
        books.id,
        title,
        authors.name AS author,
        pages,
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

async function getBookById ({ id }) {
    const query: string = `SELECT
        books.id,
        title,
        authors.name AS author,
        pages,
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

async function deleteBookById ({ id }) {
    const query: string = `DELETE FROM books WHERE id = $1;`;
    return connection.query(query, [id]);
}

export {
    postBook,
    getBooks,
    getBookById,
    deleteBookById
};