import { Router } from "express";
import { ListBooksController } from "../modules/book/useCases/listBooks/ListBooksController";
import { CreateBookController } from "../modules/book/useCases/createBook/CreateBookController";

const booksRoutes = Router();

const listBooksController = new ListBooksController();
const createBookController = new CreateBookController();

booksRoutes.get("/list", listBooksController.handle);
booksRoutes.post("/", createBookController.handle);

export { booksRoutes };