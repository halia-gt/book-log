import express from "express";
import router from "./routers/books.router.js";

const server = express();
server.use(express.json());

server.use(router);

server.listen(4000, () => {
    console.log("Running on port 4000");
});