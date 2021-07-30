import { Router } from "express";

import { CreateBookController } from "../modules/book/useCases/createBook/CreateBookController";
import { ListBooksController } from "../modules/book/useCases/listBooks/ListBooksController";
import { UpdateBookController } from "../modules/book/useCases/updateBook/UpdateBookController";

const booksRoutes = Router();

const listBooksController = new ListBooksController();
const updateBookController = new UpdateBookController();
const createBookController = new CreateBookController();

booksRoutes.post("/", createBookController.handle);
booksRoutes.get("/list", listBooksController.handle);
booksRoutes.put("/update/:id", updateBookController.handle);

export { booksRoutes };