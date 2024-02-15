import { Model, DataTypes } from "sequelize";
const sequelize = require("../config/config").connection;

export class DefaultConfigModel extends Model {}

DefaultConfigModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    json: {
      type: DataTypes.STRING,
      allowNull: false,
       get: function() {
        return JSON.parse(this.getDataValue("json"));
      },
      set: function(value) {
        return this.setDataValue("json", JSON.stringify(value));
      }
    },
    bccEmail:{
      type:DataTypes.STRING,
      allowNull:false
    }
  },
  { tableName: "defaultConfig", sequelize, timestamps: false }
);
