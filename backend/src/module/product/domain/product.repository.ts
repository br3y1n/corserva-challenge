import { ProductEntity } from "./product.entity";

interface ProductRepository {
//   createProduct: () => Promise<ProductEntity>;
//   getProducts: () => Promise<ProductEntity[]>;
  getProduct: (id: string) => Promise<ProductEntity | null>;
}

export { ProductRepository };
