import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  name: string;
  description: string;
  author: string;
}

@injectable()
class UpdateBookUseCase {
  
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ){}

  async execute(id: string, { name, description, author }: IRequest): Promise<void>{
    const book = await this.booksRepository.findById(id);
    if(!book.id){
      throw new Error("Book already not exists!");
    }

    await this.booksRepository.update(id, { name, description, author });
  }
}

export { UpdateBookUseCase };