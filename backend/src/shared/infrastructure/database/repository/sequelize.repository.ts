import { ProductRepository } from "../../../../module/product/domain/product.repository";
import { ProductModel, ProductTypeModel } from "../config";

class SequelizeRepository implements ProductRepository {
  //   createProduct = async () => {
  //     const product = await ProductModel.create();

  //     product.return;
  //   };

  getProduct = async (id: string) => {
    const product = await ProductModel.findByPk(id, {
      include: [ProductTypeModel],
    });

    if (product === undefined || product === null) return null;

    const values = product!.dataValues as any;

    return {
      id: values.id,
      image: values.image,
      name: values.name,
      price: values.price,
      stock: values.stock,
      type: values.productType.name,
    };
  };
}

export default SequelizeRepository;
