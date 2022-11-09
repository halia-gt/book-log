import { Router } from "express";
import * as booksCountroller from "../controllers/books.controller.js";

const router = Router();

router.post("/books", booksCountroller.insertBook);

export default router;