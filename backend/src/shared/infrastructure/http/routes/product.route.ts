import { Router } from "express";
import { ProductController } from "../../../../module/product/repository/product.controller";
import SequelizeRepository from "../../database/repository/sequelize.repository";
import ProductUseCase from "../../../../module/product/application/productUseCase";

const ROUTE = "/product";
const productRoute = Router();
const productRepository = new SequelizeRepository();
const productUseCase = new ProductUseCase(productRepository);
const productCtrl = new ProductController(productUseCase);

productRoute.get(ROUTE, productCtrl.getProduct);
// productRoute.get(`${ROUTE}s`, productCtrl.getProducts);
// productRoute.post(ROUTE, productCtrl.createProduct);

export default productRoute;
