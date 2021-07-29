import { ICreateBookDTO } from "../dtos/ICreateBookDTO";
import { Book } from "../entities/Book";

interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<void>;
  findBySBN(SBN: number): Promise<Book>;
}

export { IBooksRepository };