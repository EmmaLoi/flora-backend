import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import * as bouquetsServices from "../services/bouquetsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getBouquets = async (req, res, next) => {
  try {
    const bouquets = await bouquetsServices.getAllBouquets();
    res.status(200).json(bouquets);
  } catch (error) {
    next(error);
  }
};

export const getBouquet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await bouquetsServices.getBouquetById(id);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const addBouquet = async (req, res, next) => {
  try {
    const bouquet = await bouquetsServices.createBouquet(req.body);
    res.status(201).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const updateBouquet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await bouquetsServices.updateBouquetById(id, req.body);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const deleteBouquet = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await bouquetsServices.deleteBouquetById(id);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json({
      message: "Bouquet deleted",
    });
  } catch (error) {
    next(error);
  }
};

export const updateFavorite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bouquet = await bouquetsServices.updateBouquetById(id, req.body);

    if (!bouquet) {
      throw HttpError(404, "Not found");
    }

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};

export const updatePhoto = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!req.file) {
      throw HttpError(400, "Photo is required");
    }

    const bouquetExists = await bouquetsServices.getBouquetById(id);

    if (!bouquetExists) {
      await fs.unlink(req.file.path);
      throw HttpError(404, "Not found");
    }

    const { path: tempPath, originalname } = req.file;
    const extension = path.extname(originalname);
    const uniqueName = `${randomUUID()}${extension}`;
    const photosDir = path.resolve("public", "photos");
    const finalPath = path.join(photosDir, uniqueName);

    await fs.mkdir(photosDir, { recursive: true });
    await fs.rename(tempPath, finalPath);

    const photoURL = `/photos/${uniqueName}`;
    const bouquet = await bouquetsServices.updateBouquetPhoto(id, photoURL);

    res.status(200).json(bouquet);
  } catch (error) {
    next(error);
  }
};