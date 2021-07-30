import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBooksNameInventoryUseCase } from "./ListBooksNameInventoryUseCase";

class ListBooksNameInventoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { paginate } = request.query;

    const listBooksNameInventoryUseCase = container.resolve(ListBooksNameInventoryUseCase);
    const all = await listBooksNameInventoryUseCase.execute({ paginate });

    return response.json(all);
  }
}

export { ListBooksNameInventoryController };