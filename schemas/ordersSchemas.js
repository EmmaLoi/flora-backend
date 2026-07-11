import Joi from "joi";

export const createOrderSchema = Joi.object({
  name: Joi.string().trim().required(),
  phone: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  message: Joi.string().trim().allow("").optional(),
});
