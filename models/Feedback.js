import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Feedback = sequelize.define(
  "Feedback",
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "feedbacks",
  }
);

export default Feedback;