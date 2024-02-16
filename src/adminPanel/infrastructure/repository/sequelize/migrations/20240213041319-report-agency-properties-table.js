"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("reportAgencyProperties", {
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
    reportAgencyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "reportAgencies",
        key: "id"
      }
    },
    soldDate: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    },
    agencyName: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    agentName: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    fullAddress: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    avmValue: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    avmHigh: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    avmLow: {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("reportAgencyProperties");
}

module.exports = { up, down };
