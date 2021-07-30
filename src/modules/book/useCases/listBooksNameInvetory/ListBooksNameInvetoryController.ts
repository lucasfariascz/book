import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListBooksNameInvetoryUseCase } from "./ListBooksNameInvetoryUseCase";

class ListBooksNameInvetoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { paginate } = request.query;
    const listBooksUseCase = container.resolve(ListBooksNameInvetoryUseCase);
    const all = await listBooksUseCase.execute({ paginate });

    return response.json(all);
  }
}

export { ListBooksNameInvetoryController };