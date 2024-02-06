import { DataTypes, Model } from "sequelize";

const sequelize = require("../config/config").connection;

export class SuburbModel extends Model {}

SuburbModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    suburbName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  },
  { tableName: "suburb", sequelize, timestamps: false }
);