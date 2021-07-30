import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
class DeleteBookUseCase {
  
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository
  ){}

  async execute(id: string): Promise<void>{
    const book = await this.booksRepository.findById(id);
    if(!book.id){
      throw new Error("Book already not exists!");
    }
    await this.booksRepository.delete(id);
  }
}

export { DeleteBookUseCase };