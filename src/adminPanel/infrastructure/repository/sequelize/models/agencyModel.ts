import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class AgencyModel extends Model {}

AgencyModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { tableName: "agency", sequelize, timestamps: false }
);
