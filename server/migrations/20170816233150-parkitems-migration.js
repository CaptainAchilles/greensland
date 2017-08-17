'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn("park_items", "name", Sequelize.STRING),
      queryInterface.addColumn("park_items", "parkId", Sequelize.STRING)
    ])

  },

  down: function (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("park_items", "name"),
      queryInterface.removeColumn("park_items", "parkId")
    ]);
  }
};