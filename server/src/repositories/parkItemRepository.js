import { Sequelize } from "../database";
import { Park, ParkItem } from "../models";

/**
 * Fetches all Park models from the database
 * @return {Promise<ParkItem[]>} Promise which resolves to an array of Park models
 */
const GetAll = () => ParkItem.findAll({
    attributes: ["id", "type", "description", "easting", "northing", "lat", "lng"]
});

/**
 * Fetches all unique Park Item types from the database and associates them with a parkId.
 * Raw SQL is run for because I couldn't work out how to do aggregates with sequelize
 * @return {Promise<{ type: string, parkId: string>} Promise which resolves to an array of park item type associated with a park
 */
const GetAllUniqueTypes = () => Sequelize.query(`SELECT id, C.type as type FROM 'parks' A
INNER JOIN (
    SELECT parkId, type from 'park_items'
) C on C.parkId = A.id
GROUP BY A.id, C.type`, { type: Sequelize.QueryTypes.SELECT});

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
 * @return {Promise<ParkItem | undefined>} Promise which resolves to the park item which matches the given ID, or undefined if not match was found
 */
const GetByID = id => ParkItem.findById(id);

module.exports = {
    GetAll,
    GetAllUniqueTypes,
    GetForPark,
    GetByID
}
