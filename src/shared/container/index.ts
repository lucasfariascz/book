import { container } from "tsyringe";

import { BooksRepository } from "../../modules/book/repositories/implementations/BooksRepository";
import { IBooksRepository } from "../../modules/book/repositories/IBooksRepository";



container.registerSingleton<IBooksRepository>(
  "BooksRepository",
  BooksRepository
);