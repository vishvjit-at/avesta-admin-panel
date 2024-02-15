import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class AgencyConfigModel extends Model {}

AgencyConfigModel.init(
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
    },
    agencyConfig: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { tableName: "agencyConfig", sequelize, timestamps: false }
);
