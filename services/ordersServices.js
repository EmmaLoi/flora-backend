import Order from "../models/Order.js";

export const createOrder = (data) => {
  return Order.create(data);
};
