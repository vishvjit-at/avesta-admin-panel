"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("agencySuburbs", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agencyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "agency",
        key: "id"
      }
    },
    suburbId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "suburb",
        key: "id"
      }
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("agencySuburbs");
}

module.exports = { up, down };
