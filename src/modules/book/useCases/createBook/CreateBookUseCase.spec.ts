import { BooksRepositoryInMemory } from "../../repositories/in-memory/BooksRepositoryInMemory";
import { CreateBookUseCase } from "./CreateBookUseCase";

let createBookUseCase: CreateBookUseCase;
let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("Create Book", () => {
  beforeEach(() => {
    booksRepositoryInMemory = new BooksRepositoryInMemory();
    createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory);
  });

  it("should be able to create a new book", async () => {
    const book = {
      SBN: 123,
      name: "Alquimista",
      description: "Alquimista",
      author: "Paulo Coelho",
      inventory: 10
    };

    await createBookUseCase.execute({
      SBN: book.SBN,
      name: book.name,
      description: book.description,
      author: book.author,
      inventory: book.inventory
    });

    const bookCreated = await booksRepositoryInMemory.findBySBN(book.SBN);

    expect(bookCreated).toHaveProperty("SBN");
  });

  it("should be able to create a new book with name exists", async() => {
    expect(async () => {
      const book = {
        SBN: 123,
        name: "Alquimista",
        description: "Alquimista",
        author: "Paulo Coelho",
        inventory: 10
      };
  
      await createBookUseCase.execute({
        SBN: book.SBN,
        name: book.name,
        description: book.description,
        author: book.author,
        inventory: book.inventory
      });
  
      await createBookUseCase.execute({
        SBN: book.SBN,
        name: book.name,
        description: book.description,
        author: book.author,
        inventory: book.inventory
      });
    }).rejects.toBeInstanceOf(Error);
    
  });
});