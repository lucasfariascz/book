import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindBookDetailUseCase } from "./FindBookDetailUseCase";

class FindBookDetailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    
    const findBookDetailUseCase = container.resolve(FindBookDetailUseCase);
    const find = await findBookDetailUseCase.execute({ id });

    return response.json(find);
  }
}

export { FindBookDetailController };