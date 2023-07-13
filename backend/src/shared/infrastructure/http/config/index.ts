import express from "express";
import "dotenv/config";
import productRoute from "../routes/product.route";

const PORT = process.env.PORT || 4001;

const startRoutes = () => {
  const app = express();

  app.use(express.json())
  app.use(productRoute);
  app.listen(PORT, () => console.log("Port server:", PORT));
};

export { startRoutes };
