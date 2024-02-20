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
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    agencyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    agencyConfig: {
      type: DataTypes.STRING,
      allowNull: false,
      
    }
  },
  { tableName: "agencyConfig", sequelize, timestamps: false }
);
