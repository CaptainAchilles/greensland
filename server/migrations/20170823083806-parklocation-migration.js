'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("parks", "lat", Sequelize.FLOAT)
      .then(() => queryInterface.addColumn("parks", "lng", Sequelize.FLOAT))
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("parks", "lat")
      .then(() => queryInterface.addColumn("parks", "lng"))
  }
};
