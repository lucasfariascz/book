import { inject, injectable } from "tsyringe";

import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
class FindBookDetailUseCase {
  constructor(
    @inject("BooksRepository")
    private bookRepository: IBooksRepository
  ){}

  async execute({ id }): Promise<Book>{
    const book = await this.bookRepository.findById(id);

    if (!book.id) {
      throw new Error("Book not found");
    }
    
    return book;
  }
}

export {  FindBookDetailUseCase };