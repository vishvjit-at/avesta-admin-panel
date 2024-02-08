"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("feature_flag", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key: {
      type: Sequelize.STRING,
      allowNull: false
    },
    project_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "project",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("feature_flag");
}

module.exports = { up, down };
