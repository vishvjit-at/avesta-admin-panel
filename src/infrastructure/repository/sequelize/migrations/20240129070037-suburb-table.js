'use strict';

 async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("suburb", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false
    },
   postcode: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    deletedAt: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: null
    }
  });
}
 async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("suburb");

}

module.exports={up,down}