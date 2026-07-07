import gravatar from "gravatar";
import Bouquet from "../models/Bouquet.js";

export const getAllBouquets = () => {
  return Bouquet.findAll();
};

export const getBouquetById = (id) => {
  return Bouquet.findByPk(id);
};

export const createBouquet = (data) => {
  const photoURL = gravatar.url(data.title, {
    protocol: "https",
    s: "250",
    d: "identicon",
  });

  return Bouquet.create({
    ...data,
    photoURL,
  });
};

export const updateBouquetById = async (id, data) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  return bouquet.update(data);
};

export const deleteBouquetById = async (id) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  await bouquet.destroy();
  return bouquet;
};

export const updateBouquetPhoto = async (id, photoURL) => {
  const bouquet = await Bouquet.findByPk(id);

  if (!bouquet) {
    return null;
  }

  return bouquet.update({ photoURL });
};