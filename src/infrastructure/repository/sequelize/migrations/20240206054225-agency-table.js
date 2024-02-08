"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("agency", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    probabilityPercentage: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    propertyCountPerSuburb: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("agency");
}

module.exports = { up, down };
