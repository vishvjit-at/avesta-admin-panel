"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("feature_flag_status", {
    environment_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: "environment",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    feature_flag_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: "feature_flag",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    is_enabled: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("feature_flag_status");
}

module.exports = { up, down };
