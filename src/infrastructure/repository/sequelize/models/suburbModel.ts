const sequelize = require("../config/config").connection;
import {Model,DataTypes} from "sequelize"
export class SuburbModel extends Model{}
SuburbModel.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
      autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
    postcode:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
},{ tableName:"suburb", sequelize,timestamps:false})