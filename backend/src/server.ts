import { startDb } from "./shared/infrastructure/database/config";
import { startRoutes } from "./shared/infrastructure/http/config";

const startServer = async () => {
  await startDb();
  startRoutes();
};

startServer().catch((error) => {
  console.error("start server error:", error);
});
