"use strict";

async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("userRoles", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "users",
        key: "id"
      }
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: "roles",
        key: "id"
      }
    }
  });
}
async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("userRoles");
}

module.exports = { up, down };