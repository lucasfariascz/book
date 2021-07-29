import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookUseCase } from "./CreateBookUseCase";


class CreateBookController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { SBN, name, description, author, inventory } = request.body;

    const createBookUseCase = container.resolve(CreateBookUseCase);

    await createBookUseCase.execute({ SBN, name, description, author, inventory });

    return response.status(201).send();
  }
}

export { CreateBookController };