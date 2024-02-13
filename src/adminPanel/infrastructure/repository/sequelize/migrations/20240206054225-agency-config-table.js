"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("agencyConfig", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agencyId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    agencyConfig: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("agencyConfig");
}

module.exports = { up, down };
