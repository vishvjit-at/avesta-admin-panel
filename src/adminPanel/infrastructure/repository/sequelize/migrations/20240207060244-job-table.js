"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("job", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    runType: {
      type: Sequelize.STRING,
      allowNull: false
    },
    runBy: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "users",
        key: "id"
      }
    },
    agencyConfig: {
      type: Sequelize.STRING,
      allowNull: false
    },
    startAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    endAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("job");
}

module.exports = { up, down };
