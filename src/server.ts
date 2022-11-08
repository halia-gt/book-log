import express from "express";
import { Request, Response } from "express";

const server = express();

server.get("/health", (req: Request, res: Response) => {
    res.send('ok');
})

server.listen(4000, () => {
    console.log("Magic happens on port 4000!");
})