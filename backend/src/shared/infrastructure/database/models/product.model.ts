import { FLOAT, INTEGER, Model, STRING, Sequelize } from "sequelize";

const defineProductModel = (db: Sequelize) =>
  db.define<
    Model<{
      id: string;
      name: string;
      image: string;
      price: number;
      stock: number;
      type_id: string;
    }>
  >("products", {
    id: { type: STRING, primaryKey: true },
    name: STRING,
    image: STRING,
    price: FLOAT,
    stock: INTEGER,
    type_id: STRING,
  });

export { defineProductModel };
