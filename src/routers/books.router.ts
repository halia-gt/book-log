import { Router } from "express";
import * as booksCountroller from "../controllers/books.controller.js";
import * as booksMiddleware from "../middlewares/books.middleware.js";

const router = Router();

router.post("/books", booksMiddleware.bookSchemaValidation, booksCountroller.insertBook);

export default router;