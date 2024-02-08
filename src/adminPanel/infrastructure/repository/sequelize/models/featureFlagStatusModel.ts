import { Model, DataTypes } from "sequelize";
import { EnvironmentModel } from "./environmentModel";
import { FeatureFlagModel } from "./featureFlagModel";
const sequelize = require("../config/config").connection;

export class FeatureFlagStatusModel extends Model {}

FeatureFlagStatusModel.init(
  {
    feature_flag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: FeatureFlagModel,
        key: "id"
      }
    },
    environment_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: EnvironmentModel,
        key: "id"
      }
    },
    is_enabled: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    tableName: "feature_flag_status",
    sequelize,
    timestamps: false,
    modelName: "FeatureFlagStatusModel",
    underscored: false
  }
);

FeatureFlagModel.hasMany(FeatureFlagStatusModel, {
  foreignKey: "feature_flag_id",
  as: "featureFlagsStatus"
});

FeatureFlagStatusModel.belongsTo(FeatureFlagModel, {
  foreignKey: "feature_flag_id",
  as: "featureFlag"
});

EnvironmentModel.hasMany(FeatureFlagStatusModel, {
  foreignKey: "environment_id",
  as: "featureFlagsStatus"
});

FeatureFlagStatusModel.belongsTo(EnvironmentModel, {
  foreignKey: "environment_id",
  as: "environment"
});
