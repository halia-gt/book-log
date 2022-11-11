import { Router } from "express";
import * as statusController from "../controllers/status.controller.js";

const router: Router = Router();

router.get("/books/status", statusController.readMainStatus);

export default router;
