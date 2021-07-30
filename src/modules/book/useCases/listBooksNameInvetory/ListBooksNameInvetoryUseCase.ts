import { inject, injectable } from "tsyringe";

import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
class ListBooksNameInvetoryUseCase {
  constructor(
    @inject("BooksRepository")
    private bookRepository: IBooksRepository
  ){}

  async execute({  paginate }): Promise<Book[]>{
    const books = await this.bookRepository.list();
    let bookName = [];

    let booksInvetory = books.filter((book) => {
      return book.inventory > paginate;
    });

    bookName = booksInvetory.map((book) => {
      return { name: book.name };
    });

    return bookName;
  }
}

export {  ListBooksNameInvetoryUseCase };