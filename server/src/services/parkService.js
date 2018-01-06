import { ParkRepository } from "../repositories";

/**
 * Fetches all Park models available
 * @return {Promise<Park[]>} Promise which resolves to an array of Park models
 */
const GetAll = () => ParkRepository.GetAll();

/**
 * Fetches a random park
 * @return {Promise<Park>} Promise which resolves to a random Park models
 */
const GetRandom = () => ParkRepository.GetAll().then(parks => {
    if (parks.length === 0) {
        return undefined;
    }
    return parks[Math.floor(Math.random() * parks.length)];
});

/**
 * Fetches a single Park model which matches the given id
 * @param {string} id The ID of the park to find
 * @return {Promise<Park | undefined>} Promise which resolves to the park which matches the given ID, or undefined if not match was found
 */
const GetByID = id => ParkRepository.GetByID(id);

module.exports = {
    GetAll,
    GetRandom,
    GetByID
}
