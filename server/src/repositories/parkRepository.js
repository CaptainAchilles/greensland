import { Park } from "../models";

/**
 * Fetches all Park models from the database
 * @return {Promise<Park[]>} Promise which resolves to an array of Park models
 */
const GetAll = () => Park.findAll({
    attributes: ["id", "parkName"]
});

/**
 * Fetches a single Park model from the database which matches the given id
 * @param {string} id The ID of the park to find
 * @return {Promise<Park | undefined>} Promise which resolves to the park which matches the given ID, or undefined if not match was found
 */
const GetByID = id => Park.findById(id);

module.exports = {
    GetAll,
    GetByID
}
