import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { IUpdateBookDTO } from "../../dtos/IUpdateBookDTO";
import { Book } from "../../entities/Book";
import { IBooksRepository } from "../IBooksRepository";

class BooksRepositoryInMemory implements IBooksRepository {

  books: Book[] = [];

  async create({ name, inventory, SBN, author, description, }: ICreateBookDTO): Promise<void> {
    const book = new Book();

    Object.assign(book, { name, inventory, SBN, author, description });

    this.books.push(book);
  }

  async list(): Promise<Book[]> {
    return this.books;
  }

  async findBySBN(SBN: number): Promise<Book> {
    return this.books.find((book) => book.SBN === SBN);
  }

  async findById(id: string): Promise<Book> {
    return this.books.find((book) => book.id === id);
  }

  
  update(id: string, data: IUpdateBookDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

export { BooksRepositoryInMemory };