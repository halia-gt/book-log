import { connection } from "../database/db.js";

async function postBook ({ title, authorId, pages, genre, series, format, date_started }) {
    const query = `INSERT INTO books (title, author_id, pages, genre, series, format, date_started) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    return connection.query(query, [title, authorId, pages, genre, series, format, date_started]);
}

export {
    postBook,
};