'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("park_items", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false
      },
      type: Sequelize.STRING,
      description: Sequelize.STRING,
      easting: Sequelize.STRING,
      northing: Sequelize.STRING,
      lat: Sequelize.FLOAT,
      lng: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable("park_items");
  }
};