import { Request, Response } from "express";
import * as statusRepository from "../repositories/status.repository.js";

async function readMainStatus(req: Request, res: Response) {
    try {
        const status: {
            total_books: number,
            total_pages: number,
            total_authors: number
        } = (await statusRepository.mainStatus()).rows[0];
        
        res.send(status);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export {
    readMainStatus
};