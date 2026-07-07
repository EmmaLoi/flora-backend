import Joi from "joi";

export const createBouquetSchema = Joi.object({
  title: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  price: Joi.number().positive().required(),
  favorite: Joi.boolean(),
});

export const updateBouquetSchema = Joi.object({
  title: Joi.string().trim(),
  description: Joi.string().trim(),
  price: Joi.number().positive(),
  favorite: Joi.boolean(),
}).min(1);

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});