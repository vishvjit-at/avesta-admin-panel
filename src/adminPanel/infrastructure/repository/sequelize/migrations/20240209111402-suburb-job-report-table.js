"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("jobPropicPredictionData", {
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
    suburbName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
    postcode: {
      type: Sequelize.STRING,
      allowNull: false
    },
    jsonData: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("jobPropicPredictionData");
}

module.exports = { up, down };
