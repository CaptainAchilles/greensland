import { Park, ParkItem } from "../models";

/**
 * Fetches all Park models from the database
 * @return {Promise<Park[]>} Promise which resolves to an array of Park models
 */
const GetAll = () => ParkItem.findAll({
    attributes: ["id", "name", "type", "description", "easting", "northing", "lat", "lng"]
});


/**
 * Fetches a single Park model from the database which matches the given id
 * @param {string} id The ID of the park to find
 * @return {Promise<Park | undefined>} Promise which resolves to the park which matches the given ID, or undefined if not match was found
 */
const GetForPark = id => Park.findById(id, {
    include: [
        { model: ParkItem }
    ]
}).then(park => park.park_items)

/**
 * Fetches a single Park model from the database which matches the given id
 * @param {string} id The ID of the park to find
 * @return {Promise<Park | undefined>} Promise which resolves to the park which matches the given ID, or undefined if not match was found
 */
const GetByID = id => ParkItem.findById(id);

module.exports = {
    GetAll,
    GetForPark,
    GetByID
}
