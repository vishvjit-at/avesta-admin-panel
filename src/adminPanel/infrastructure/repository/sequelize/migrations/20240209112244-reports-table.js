"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("reports", {
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
    isEmailSent: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    emailSendAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    },
    config: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("reports");
}

module.exports = { up, down };
