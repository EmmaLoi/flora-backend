import * as feedbackServices from "../services/feedbackServices.js";

export const getFeedback = async (req, res, next) => {
  try {
    const feedback = await feedbackServices.getAllFeedback();

    res.status(200).json(feedback);
  } catch (error) {
    next(error);
  }
};