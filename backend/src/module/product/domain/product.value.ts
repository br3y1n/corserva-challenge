import { v4 as uuid } from "uuid";
import { ProductEntity } from "./product.entity";

class ProductValue implements ProductEntity {
  id: string = uuid();
  image: string =
    "https://www.comedera.com/wp-content/uploads/2021/12/empanadas-colombianas1.jpg";
  name: string;
  price: number;
  stock: number;
  type: string;

  constructor({
    name,
    price,
    stock,
    type,
  }: {
    name: string;
    price: number;
    stock: number;
    type: string;
  }) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.type = type;
  }
}

export default ProductValue;
