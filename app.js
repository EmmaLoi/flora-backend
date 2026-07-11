import express from "express";
import cors from "cors";
import path from "path";
import { createRequire } from "module";
import swaggerUi from "swagger-ui-express";
import bouquetsRouter from "./routes/bouquetsRoutes.js";
import feedbackRouter from "./routes/feedbackRoutes.js";
import bestsellersRouter from "./routes/bestsellersRoutes.js";
import ordersRouter from "./routes/ordersRoutes.js";

const require = createRequire(import.meta.url);
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/photos", express.static(path.resolve("public", "photos")));

app.get("/", (req, res) => {
  res.json({
    message: "Flora API is working!",
  });
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/bouquets", bouquetsRouter);
app.use("/api/feedback", feedbackRouter);
app.use("/api/bestsellers", bestsellersRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  res.status(status).json({
    message,
  });
});

export default app;