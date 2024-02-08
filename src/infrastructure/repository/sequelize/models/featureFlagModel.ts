import { Model, DataTypes } from "sequelize";
import { ProjectModel } from "./projectModel";
const sequelize = require("../config/config").connection;

export class FeatureFlagModel extends Model {}

FeatureFlagModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    key: {
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
  { tableName: "feature_flag", sequelize, timestamps: false, modelName: "FeatureFlagModel", underscored: false }
);

ProjectModel.hasMany(FeatureFlagModel, {
  foreignKey: "project_id",
  as: "featureFlags"
});

FeatureFlagModel.belongsTo(ProjectModel, {
  foreignKey: "project_id",
  as: "project"
});
