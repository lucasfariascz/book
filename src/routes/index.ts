import express from "express";

import { booksRoutes } from "./books.routes";

const routes = express();

routes.use("/books", booksRoutes);

export { routes };