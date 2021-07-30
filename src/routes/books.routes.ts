import { Router } from "express";

import { CreateBookController } from "../modules/book/useCases/createBook/CreateBookController";
import { ListBooksNameInvetoryController } from "../modules/book/useCases/listBooksNameInvetory/ListBooksNameInvetoryController";
import { FindBookDetailController } from "../modules/book/useCases/findBookDetail/FindBookDetailController";
import { UpdateBookController } from "../modules/book/useCases/updateBook/UpdateBookController";
import { DeleteBookController } from "../modules/book/useCases/deleteBook/DeleteBookController";

const booksRoutes = Router();

const listBooksController = new ListBooksNameInvetoryController();
const findBookDetailController = new FindBookDetailController();
const updateBookController = new UpdateBookController();
const createBookController = new CreateBookController();
const deleteBookController = new DeleteBookController();

booksRoutes.post("/", createBookController.handle);
booksRoutes.get("/list", listBooksController.handle);
booksRoutes.get("/find/:id", findBookDetailController.handle);
booksRoutes.put("/update/:id", updateBookController.handle);
booksRoutes.delete("/delete/:id", deleteBookController.handle);

export { booksRoutes };