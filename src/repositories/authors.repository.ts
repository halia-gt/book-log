import { connection } from "../database/db.js";

async function getAuthorIdByName ({ name }) {
    const query: string = `SELECT * FROM authors WHERE name = $1;`;
    return connection.query(query, [name]);
}

async function createAuthor ({ name }) {
    const query: string = `INSERT INTO authors (name) VALUES ($1) RETURNING id;`;
    return connection.query(query, [name]);
}

export {
    getAuthorIdByName,
    createAuthor
};