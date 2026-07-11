import * as ordersServices from "../services/ordersServices.js";

export const addOrder = async (req, res, next) => {
  try {
    const order = await ordersServices.createOrder(req.body);

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
