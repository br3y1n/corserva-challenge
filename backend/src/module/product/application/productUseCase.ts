import { ProductRepository } from "../domain/product.repository";

class ProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  getProduct = (id: string) => this.productRepository.getProduct(id);
}

export default ProductUseCase;
