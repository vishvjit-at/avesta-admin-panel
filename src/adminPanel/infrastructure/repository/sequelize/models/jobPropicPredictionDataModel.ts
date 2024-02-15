import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class JobPropicPredictionDataModel extends Model {}

JobPropicPredictionDataModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    suburbName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gnafId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scoredLabels: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    scoredProbabilities: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstPredictedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  { tableName: "jobPropicPredictionData", sequelize, timestamps: false }
);
