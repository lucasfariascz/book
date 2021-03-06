import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateBookUseCase } from "./UpdateBookUseCase";

class UpdateBookController {
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const { name, description, author, inventory } = request.body;

    const updateBookUseCase = container.resolve(UpdateBookUseCase);

    await updateBookUseCase.execute(id, { name, description, author, inventory });

    return response.status(204).send();
  }
}

export { UpdateBookController };