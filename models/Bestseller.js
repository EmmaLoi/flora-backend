import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Bestseller = sequelize.define(
  "Bestseller",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "bestsellers",
  },
);

export default Bestseller;
