import { Request, Response } from "express";

async function insertBook(req: Request, res: Response) {
    res.send('Okay')
}

export {
    insertBook,
}