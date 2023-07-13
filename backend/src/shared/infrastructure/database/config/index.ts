import { Sequelize } from "sequelize";
import { defineProductModel } from "../models/product.model";
import { defineProductTypeModel } from "../models/productType.model";

const db = new Sequelize({
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  dialect: "postgres",
});

const ProductModel = defineProductModel(db);
const ProductTypeModel = defineProductTypeModel(db);

ProductModel.belongsTo(ProductTypeModel, { foreignKey: "type_id" });

const startDb = async () => {
  await db.authenticate();
  await db.sync();
};

export { ProductModel, ProductTypeModel, startDb };
