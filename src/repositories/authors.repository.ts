import { QueryResult } from "pg";
import { connection } from "../database/db.js";
import { Author } from "../protocols/Book.js";

async function getAuthorIdByName ({ name }): Promise<QueryResult<Author>> {
    const query: string = `SELECT * FROM authors WHERE name = $1;`;
    return connection.query(query, [name]);
}

async function createAuthor ({ name }): Promise<QueryResult> {
    const query: string = `INSERT INTO authors (name) VALUES ($1) RETURNING id;`;
    return connection.query(query, [name]);
}

export {
    getAuthorIdByName,
    createAuthor
};