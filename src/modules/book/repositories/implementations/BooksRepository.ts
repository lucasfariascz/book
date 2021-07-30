import { IBooksRepository } from "../IBooksRepository";

import { Book } from "../../entities/Book";

import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { IUpdateBookDTO } from "../../dtos/IUpdateBookDTO";
import { getRepository, Repository } from "typeorm";

class BooksRepository implements IBooksRepository {

  private repository: Repository<Book>;

  constructor(){
    this.repository = getRepository(Book);
  }

  async create({ SBN, author, description, inventory, name }: ICreateBookDTO): Promise<void> {
    const book = this.repository.create({
      SBN,
      author,
      description,
      inventory,
      name
    });

    await this.repository.save(book);
  }

  async list(): Promise<Book[]>{
    const books = await this.repository.find();
    return books;
  }

  async findBySBN(SBN: number): Promise<Book> {
    const book = await this.repository.findOne({ SBN });
    return book;
  }

  async findById(id: string): Promise<Book> {
    const book = await this.repository.findOneOrFail(id);
    return book;
  }

  async update(id: string, { author, description, name, inventory }: IUpdateBookDTO): Promise<void> {
    await this.repository
      .createQueryBuilder()
      .update()
      .set({author, description, name, inventory })
      .where("id = :id")
      .setParameters({ id })
      .execute();
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}

export { BooksRepository };