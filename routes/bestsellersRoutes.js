import express from "express";
import {
  getBestseller,
  getBestsellers,
} from "../controllers/bestsellersController.js";

const bestsellersRouter = express.Router();

bestsellersRouter.get("/", getBestsellers);
bestsellersRouter.get("/:id", getBestseller);

export default bestsellersRouter;
