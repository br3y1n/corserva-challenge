import { Request, Response } from "express";
import ProductUseCase from "../application/productUseCase";

class ProductController {
  constructor(private productUseCase: ProductUseCase) {}

  getProduct = async (
    {
      query,
    }: Request<undefined, undefined, undefined, { id: string | undefined }>,
    response: Response
  ) => {
    try {
      const { id } = query;
      if (id === undefined) throw new Error("ID is required");
      const product = await this.productUseCase.getProduct(id);

    

      return response.json(product);
    } catch (err: any) {
      response.status(400);

      return response.json({ message: err.message });
    }
  };

  //   getProducts = (request: Request, response: Response) => {};

  //   createProduct = (request: Request, response: Response) => {};
}

export { ProductController };

