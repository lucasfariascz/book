import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBooksNameInventoryUseCase } from "./ListBooksNameInventoryUseCase";

class ListBooksNameInventoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { paginate } = request.query;
    
    const listBooksUseCase = container.resolve(ListBooksNameInventoryUseCase);
    const all = await listBooksUseCase.execute({ paginate });

    return response.json(all);
  }
}

export { ListBooksNameInventoryController };