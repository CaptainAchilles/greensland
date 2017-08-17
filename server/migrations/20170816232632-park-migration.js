'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("parks", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false
      },
      parkName: Sequelize.DataTypes.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("parks");
  }
};