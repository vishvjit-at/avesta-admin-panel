import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/revConfig").connection;
export class RevAgencyModel extends Model {}

RevAgencyModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
   agencyName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { tableName: "agencies", sequelize, timestamps: false, modelName: "ProjectModel", underscored: false }
);