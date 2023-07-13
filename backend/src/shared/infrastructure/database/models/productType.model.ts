import { STRING, Sequelize } from "sequelize";

const defineProductTypeModel = (db: Sequelize) =>
  db.define("productType", {
    id: { type: STRING, primaryKey: true },
    name: STRING,
  });

export { defineProductTypeModel };
