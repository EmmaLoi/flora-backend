import express from "express";
import { addOrder } from "../controllers/ordersController.js";
import validateBody from "../middlewares/validateBody.js";
import { createOrderSchema } from "../schemas/ordersSchemas.js";

const ordersRouter = express.Router();

ordersRouter.post("/", validateBody(createOrderSchema), addOrder);

export default ordersRouter;
