import express, { Express } from "express";
import bookRouter from "./routers/books.router.js";
import statusRouter from "./routers/status.router.js";

const server: Express = express();
server.use(express.json());

server.use(bookRouter);
server.use(statusRouter);

server.listen(4000, () => {
    console.log("Running on port 4000");
});