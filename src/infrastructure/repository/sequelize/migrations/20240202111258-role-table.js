"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("roles", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("roles");
}

module.exports = { up, down };