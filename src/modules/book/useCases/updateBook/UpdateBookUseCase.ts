import { inject, injectable } from "tsyringe";

import { IUpdateBookDTO } from "../../dtos/IUpdateBookDTO";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
class UpdateBookUseCase {
  
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ){}

  async execute(id: string, { name, description, author, inventory }: IUpdateBookDTO): Promise<void>{
    const book = await this.booksRepository.findById(id);
    if(!book.id){
      throw new Error("Book already not exists!");
    }

    await this.booksRepository.update(id, { name, description, author, inventory });
  }
}

export { UpdateBookUseCase };