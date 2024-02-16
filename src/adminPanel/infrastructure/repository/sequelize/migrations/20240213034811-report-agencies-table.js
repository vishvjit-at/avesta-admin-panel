"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("reportAgencies", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reportId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "reports",
        key: "id"
      }
    },
    agencyConfigId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "agencyConfig",
        key: "id"
      }
    },
    agencyConfig: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("reportAgencies");
}

module.exports = { up, down };
