import express from "express";
import {
  getBouquets,
  getBouquet,
  addBouquet,
  updateBouquet,
  deleteBouquet,
  updateFavorite,
  updatePhoto,
} from "../controllers/bouquetsController.js";
import validateBody from "../middlewares/validateBody.js";
import {
  createBouquetSchema,
  updateBouquetSchema,
  updateFavoriteSchema,
} from "../schemas/bouquetsSchemas.js";
import upload from "../middlewares/upload.js";

const bouquetsRouter = express.Router();

bouquetsRouter.get("/", getBouquets);
bouquetsRouter.get("/:id", getBouquet);
bouquetsRouter.post("/", validateBody(createBouquetSchema), addBouquet);
bouquetsRouter.put("/:id", validateBody(updateBouquetSchema), updateBouquet);
bouquetsRouter.delete("/:id", deleteBouquet);
bouquetsRouter.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  updateFavorite,
);

bouquetsRouter.patch("/:id/photo", upload.single("photo"), updatePhoto);
export default bouquetsRouter;
