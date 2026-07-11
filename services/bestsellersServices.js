import Bestseller from "../models/Bestseller.js";

export const getAllBestsellers = () => {
  return Bestseller.findAll({
    order: [["id", "ASC"]],
  });
};

export const getBestsellerById = (id) => {
  return Bestseller.findByPk(id);
};
