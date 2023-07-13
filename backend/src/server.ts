import db from "./shared/infrastructure/database/config/database";
import { startRoutes } from "./shared/infrastructure/http";

const startServer = async () => {
  await db.authenticate();

  startRoutes();
};

startServer().catch((error) => {
  console.error("start server error:", error);
});
