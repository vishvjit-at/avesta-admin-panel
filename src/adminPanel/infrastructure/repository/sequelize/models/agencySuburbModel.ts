import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class AgencySuburbModel extends Model {}

AgencySuburbModel.init(
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
    postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { tableName: "agencySuburbs", sequelize, timestamps: false }
);
