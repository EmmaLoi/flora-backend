import dotenv from "dotenv";
import sequelize from "../config/db.js";
import Feedback from "../models/Feedback.js";

dotenv.config();

const feedback = [
  {
    text: "\"Flora made my anniversary unforgettable with their beautiful arrangement!\"",
    author: "Emma T.",
  },
  {
    text: "Absolutely stunning bouquet! It looked even better than the photo and arrived right on time.",
    author: "Daniel R.",
  },
  {
    text: "The service was exceptional, and the flowers were fresh!",
    author: "Olivia M.",
  },
];

const seedFeedback = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    await Feedback.destroy({
      where: {},
      truncate: true,
      restartIdentity: true,
    });

    await Feedback.bulkCreate(feedback);

    console.log("Feedback seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Feedback seeding failed:", error.message);
    process.exit(1);
  }
};

seedFeedback();