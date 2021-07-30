import { Router } from "express";

import { CreateBookController } from "../modules/book/useCases/createBook/CreateBookController";
import { ListBooksNameInventoryController } from "../modules/book/useCases/listBooksNameInvetory/ListBooksNameInventoryController";
import { ListBooksController } from "../modules/book/useCases/listBooks/ListBooksController";
import { FindBookDetailController } from "../modules/book/useCases/findBookDetail/FindBookDetailController";
import { UpdateBookController } from "../modules/book/useCases/updateBook/UpdateBookController";
import { DeleteBookController } from "../modules/book/useCases/deleteBook/DeleteBookController";

const booksRoutes = Router();

const createBookController = new CreateBookController();
const listBooksNameInventoryController = new ListBooksNameInventoryController();
const listBooksController = new ListBooksController();
const findBookDetailController = new FindBookDetailController();
const updateBookController = new UpdateBookController();
const deleteBookController = new DeleteBookController();

booksRoutes.post("/", createBookController.handle);
booksRoutes.get("/list-name", listBooksNameInventoryController.handle);
booksRoutes.get("/list", listBooksController.handle);
booksRoutes.get("/find/:id", findBookDetailController.handle);
booksRoutes.put("/update/:id", updateBookController.handle);
booksRoutes.delete("/delete/:id", deleteBookController.handle);

export { booksRoutes };