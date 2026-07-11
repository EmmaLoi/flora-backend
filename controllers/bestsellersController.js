import * as bestsellersServices from "../services/bestsellersServices.js";
import HttpError from "../helpers/HttpError.js";

export const getBestsellers = async (req, res, next) => {
  try {
    const bestsellers = await bestsellersServices.getAllBestsellers();
    res.status(200).json(bestsellers);
  } catch (error) {
    next(error);
  }
};

export const getBestseller = async (req, res, next) => {
  try {
    const bestseller = await bestsellersServices.getBestsellerById(
      req.params.id,
    );

    if (!bestseller) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bestseller);
  } catch (error) {
    next(error);
  }
};
