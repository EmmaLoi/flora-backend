import dotenv from "dotenv";
import sequelize from "../config/db.js";
import Bouquet from "../models/Bouquet.js";

dotenv.config();

const bouquets = [
  {
    title: "Peach Meadow",
    description:
      "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring. Whether you’re celebrating a birthday, sending love, or simply brightening someone’s day, this arrangement is sure to bring warm smiles and lasting impressions.",
    price: 55,
    favorite: false,
    photoURL: "/photos/peach-meadow.webp",
  },
  {
    title: "Blush Romance",
    description:
      "A delightful blend of soft pinks and whites that embodies the essence of romance and elegance. Perfect for expressing your affection and creating a memorable moment.",
    price: 34,
    favorite: false,
    photoURL: "/photos/blush-romance.webp",
  },
  {
    title: "Pastel Garden",
    description:
      "A serene collection of pastel hues that capture the beauty of a tranquil garden. Ideal for those who appreciate subtle sophistication and natural charm.",
    price: 40,
    favorite: false,
    photoURL: "/photos/pastel-garden.webp",
  },
  {
    title: "Tulip Charm",
    description:
      "A vibrant arrangement of tulips that exude charm and elegance. Perfect for adding a pop of color to any space.",
    price: 61,
    favorite: false,
    photoURL: "/photos/tulip-charm.webp",
  },
  {
    title: "Berry Bloom",
    description:
      "A delightful mix of berry-themed flowers that bring a touch of whimsy and joy to any occasion.",
    price: 32,
    favorite: false,
    photoURL: "/photos/berry-bloom.webp",
  },
  {
    title: "Sweet Whisper",
    description:
      "A gentle and romantic arrangement that conveys heartfelt sentiments and creates a memorable moment.",
    price: 40,
    favorite: false,
    photoURL: "/photos/sweet-whisper.webp",
  },
  {
    title: "Field Joy",
    description:
      "A cheerful and vibrant arrangement that brings joy and positivity to any space.",
    price: 49,
    favorite: false,
    photoURL: "/photos/field-joy.webp",
  },
  {
    title: "Soft Bloom",
    description:
      "A gentle and soothing arrangement that brings a sense of calm and tranquility to any space.",
    price: 37,
    favorite: false,
    photoURL: "/photos/soft-bloom.webp",
  },
];

const seedBouquets = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Bouquet.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
    });

    await Bouquet.bulkCreate(bouquets);

    console.log("Bouquets seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedBouquets();