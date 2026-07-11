import dotenv from "dotenv";
import sequelize from "../config/db.js";
import Bestseller from "../models/Bestseller.js";

dotenv.config();

const bestsellers = [
  {
    title: "Spring Elegance",
    price: 35,
    photoURL: "/photos/spring-elegance.webp",
    description:
      "Each stem is carefully selected to create a bouquet that radiates freshness, elegance, and the gentle charm of spring. Whether you’re celebrating a birthday, sending love, or simply brightening someone’s day, this arrangement is sure to bring warm smiles and lasting impressions.",
  },
  {
    title: "Berry Chic",
    price: 40,
    photoURL: "/photos/berry-chic.webp",
    description:
      "A stylish bouquet with rich berry tones, fresh flowers, and a bold seasonal mood for special moments.",
  },
  {
    title: "Lavender Dream",
    price: 55,
    photoURL: "/photos/lavender-dream.webp",
    description:
      "A delicate lavender-inspired arrangement created for calm, elegant, and memorable floral gifts.",
  },
];

const seedBestsellers = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Bestseller.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
    });

    await Bestseller.bulkCreate(bestsellers);

    console.log("Bestsellers seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Bestsellers seeding failed:", error.message);
    process.exit(1);
  }
};

seedBestsellers();
