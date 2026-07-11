import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./config/db.js";
import sequelize from "./config/db.js";
import "./models/Bouquet.js";
import "./models/Feedback.js";
import "./models/Bestseller.js";
import "./models/Order.js";

dotenv.config();

const { PORT = 3000 } = process.env;

const bootstrap = async () => {
  await connectDB();

  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`Server is running. Use our API on port: ${PORT}`);
  });
};

bootstrap();