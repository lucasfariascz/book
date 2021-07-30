import { BooksRepositoryInMemory } from "../../repositories/in-memory/BooksRepositoryInMemory";
import { CreateBookUseCase } from "../createBook/CreateBookUseCase";
import { DeleteBookUseCase } from "./DeleteBookUseCase";

let deleteBookUseCase: DeleteBookUseCase;
let createBookUseCase: CreateBookUseCase;
let booksRepositoryInMemory: BooksRepositoryInMemory;

describe("Delete Book", () => {
  beforeEach(() => {
    booksRepositoryInMemory = new BooksRepositoryInMemory();
    deleteBookUseCase = new DeleteBookUseCase(booksRepositoryInMemory);
    createBookUseCase = new CreateBookUseCase(booksRepositoryInMemory);
  });

  it("should be able to delete a book", async () => {
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
    
    const { id } = await booksRepositoryInMemory.findBySBN(book.SBN);

    const bookDeleted = await booksRepositoryInMemory.findById(id);

    expect(bookDeleted).toHaveProperty("id");
  });
});