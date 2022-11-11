import { Router } from "express";
import * as booksCountroller from "../controllers/books.controller.js";
import * as booksMiddleware from "../middlewares/books.middleware.js";

const router: Router = Router();

router.post("/books", booksMiddleware.bookSchemaValidation, booksCountroller.insertBook);
router.get("/books", booksCountroller.readBooks);
router.delete("/books/:id", booksMiddleware.bookIdValidation, booksCountroller.deleteBook);
router.post("/books/finished/:id", booksMiddleware.finishedBookSchemaValidation, booksMiddleware.bookIdValidation, booksCountroller.finishReadingBook);
router.put("/books/:id", booksMiddleware.bookSchemaValidation, booksMiddleware.bookIdValidation, booksCountroller.updateBook);

export default router;