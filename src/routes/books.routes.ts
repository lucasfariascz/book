import { Router } from "express";
import { CreateBookController } from "../modules/book/useCases/createBook/CreateBookController";

const booksRoutes = Router();

const createBookController = new CreateBookController();

booksRoutes.post("/", createBookController.handle);

export { booksRoutes };