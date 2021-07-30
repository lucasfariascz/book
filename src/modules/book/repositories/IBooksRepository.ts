import { ICreateBookDTO } from "../dtos/ICreateBookDTO";
import { IUpdateBookDTO } from "../dtos/IUpdateBookDTO";
import { Book } from "../entities/Book";

interface IBooksRepository {
  create(data: ICreateBookDTO): Promise<void>;
  list(): Promise<Book[]>;
  findBySBN(SBN: number): Promise<Book>;
  findById(id: string): Promise<Book>;
  update(id: string, data: IUpdateBookDTO): Promise<void>;
  delete(id: string): Promise<void>;
}

export { IBooksRepository };