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
    isEmailSend: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    runBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    suburbsConfig: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    completedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    emailSendAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  { tableName: "job", sequelize, timestamps: false }
);
