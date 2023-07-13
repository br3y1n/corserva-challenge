import { Sequelize } from "sequelize";

const db = new Sequelize({
  database: process.env.PG_DB,
  username: process.env.PG_USER,
  password: process.env.PG_PASS,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT!),
  dialect: "postgres",
});

export default db;
