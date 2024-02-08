"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("agencyAgents", {
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
    email: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    agencyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "agency",
          key: "id"
        }
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("agencyAgents");
}

module.exports = { up, down };
