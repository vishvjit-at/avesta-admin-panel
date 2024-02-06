"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("policyPermission", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    permissionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "permission",
        key: "id"
      }
    },
    policyId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "policy",
        key: "id"
      }
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("policyPermission");
}

module.exports = { up, down };
