import { connection } from "../database/db.js";

async function postBook ({ title, authorId, pages, genre, series, format, date_started }) {
    const query = `INSERT INTO books (title, author_id, pages, genre, series, format, date_started) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    return connection.query(query, [title, authorId, pages, genre, series, format, date_started]);
}

async function getBooks () {
    const query = `SELECT
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

export {
    postBook,
    getBooks
};