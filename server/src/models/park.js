import Sequelize from "Sequelize";

const ParkModel = {
    parkName: Sequelize.STRING,
    parkId: Sequelize.STRING // Comes from Open-Data---AM---datasetparkfacilties.csv
};
// BrisbaneCityCouncilEventsVenueLocations20170530.csv

module.exports = {
    Park: Sequelize.define("park", ParkModel)
}