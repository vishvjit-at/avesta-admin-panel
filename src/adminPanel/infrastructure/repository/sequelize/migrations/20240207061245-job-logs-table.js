"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("jobLogs", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    jobId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "job",
        key: "id"
      }
    },
    processName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("jobLogs");
}

module.exports = { up, down };
