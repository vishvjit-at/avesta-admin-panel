import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },password:{
      type :DataTypes.STRING ,
      allowNull:false
    }
  },
  { tableName: "logintable", sequelize, timestamps: false }
);
