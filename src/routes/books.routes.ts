import { Router } from "express";

import { CreateBookController } from "../modules/book/useCases/createBook/CreateBookController";
import { ListBooksNameInventoryController } from "../modules/book/useCases/listBooksNameInvetory/ListBooksNameInventoryController";
import { FindBookDetailController } from "../modules/book/useCases/findBookDetail/FindBookDetailController";
import { UpdateBookController } from "../modules/book/useCases/updateBook/UpdateBookController";
import { DeleteBookController } from "../modules/book/useCases/deleteBook/DeleteBookController";

const booksRoutes = Router();

const listBooksNameInventoryController = new ListBooksNameInventoryController();
const findBookDetailController = new FindBookDetailController();
const updateBookController = new UpdateBookController();
const createBookController = new CreateBookController();
const deleteBookController = new DeleteBookController();

booksRoutes.post("/", createBookController.handle);
booksRoutes.get("/list", listBooksNameInventoryController.handle);
booksRoutes.get("/find/:id", findBookDetailController.handle);
booksRoutes.put("/update/:id", updateBookController.handle);
booksRoutes.delete("/delete/:id", deleteBookController.handle);

export { booksRoutes };