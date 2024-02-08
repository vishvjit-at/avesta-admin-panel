import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class JobModel extends Model {}

JobModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    runType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    runBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    agencyConfig: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  { tableName: "job", sequelize, timestamps: false }
);
