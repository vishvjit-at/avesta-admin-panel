import { sequelize } from "./sequalizerConnection";
import { Model, DataTypes } from "sequelize";

export class adminSequelizeModel extends Model {}

adminSequelizeModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // role: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  },
  { tableName: "admin", sequelize, timestamps: false }
);
