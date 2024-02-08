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
    probabilityPercentage: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    propertyCountPerSuburb: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { tableName: "agency", sequelize, timestamps: false }
);
