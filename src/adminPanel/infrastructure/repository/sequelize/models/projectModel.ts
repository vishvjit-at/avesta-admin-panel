import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class ProjectModel extends Model {}

ProjectModel.init(
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
    }
  },
  { tableName: "project", sequelize, timestamps: false, modelName: "ProjectModel", underscored: false }
);
