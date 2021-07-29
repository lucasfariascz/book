import { inject, injectable } from "tsyringe";
import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { IBooksRepository } from "../../repositories/IBooksRepository";

@injectable()
class CreateBookUseCase {
  constructor(
    @inject("BooksRepository")
    private bookRepository: IBooksRepository
  ){}

  async execute({ SBN, name, description, author, inventory }: ICreateBookDTO): Promise<void> {
    const bookAlreadyExists = await this.bookRepository.findBySBN(SBN);

    if(bookAlreadyExists){
      throw new Error("Book already exists!");
    }

    await this.bookRepository.create({
      SBN, 
      name, 
      description,
      author,
      inventory
    });
  }
}

export { CreateBookUseCase };