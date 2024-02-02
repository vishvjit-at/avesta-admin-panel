import { Model, DataTypes } from "sequelize";
import { ProjectModel } from "./projectModel";
const sequelize = require("../config/config").connection;

export class EnvironmentModel extends Model {}

EnvironmentModel.init(
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
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: ProjectModel,
        key: "id"
      }
    }
  },
  { tableName: "environment", sequelize, timestamps: false, modelName: "EnvironmentModel", underscored: false }
);

ProjectModel.hasMany(EnvironmentModel, {
  foreignKey: "project_id",
  as: "environments"
});

EnvironmentModel.belongsTo(ProjectModel, {
  foreignKey: "project_id",
  as: "project"
});
