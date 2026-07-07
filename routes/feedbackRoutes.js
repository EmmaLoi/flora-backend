import express from "express";
import { getFeedback } from "../controllers/feedbackController.js";

const feedbackRouter = express.Router();

feedbackRouter.get("/", getFeedback);

export default feedbackRouter;