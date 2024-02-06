"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("policy", {
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
  await queryInterface.dropTable("policy");
}

module.exports = { up, down };
