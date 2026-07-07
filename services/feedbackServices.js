import Feedback from "../models/Feedback.js";

export const getAllFeedback = () => {
  return Feedback.findAll();
};