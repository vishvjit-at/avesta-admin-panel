"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("job", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    isEmailSend: {
      type: Sequelize.TINYINT,
      allowNull: true,
      defaultValue: 0
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
    suburbsConfig: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    completedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    },
    emailSendAt: {
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
