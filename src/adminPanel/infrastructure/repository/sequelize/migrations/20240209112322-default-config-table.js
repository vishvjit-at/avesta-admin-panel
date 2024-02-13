"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("defaultConfig", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    json: {
      type: Sequelize.STRING,
      allowNull: false
    },
    bccEmail:{
      type: Sequelize.STRING,
      allowNull: true
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("defaultConfig");
}

module.exports = { up, down };
