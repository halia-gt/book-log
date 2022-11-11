import { QueryResult } from "pg";
import { connection } from "../database/db.js";

async function mainStatus (): Promise<QueryResult> {
    const query: string = `SELECT
            COUNT(id) AS total_books,
            SUM(pages) AS total_pages,
            COUNT(DISTINCT author_id) AS total_authors
        FROM books
    `;
    return connection.query(query);
}

export {
    mainStatus
};