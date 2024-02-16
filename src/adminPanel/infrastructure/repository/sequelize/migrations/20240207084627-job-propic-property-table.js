"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("jobPropicPredictionData", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    gnafId: {
      type: Sequelize.STRING,
      allowNull: false
    },
    scoredLabels: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    scoredProbabilities: {
      type: Sequelize.DOUBLE(10, 2),
      allowNull: false
    },
    firstPredictedDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    jobId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "job",
        key: "id"
      }
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("jobPropicPredictionData");
}

module.exports = { up, down };
