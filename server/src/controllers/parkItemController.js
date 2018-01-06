import { ParkItemService } from "../services";
import { ParkService } from "../services";

/**
 * Attaches all park items to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetAll = (req, res) => ParkItemService.GetAll()
    .then(allParks => res.status(200).json(allParks))
    .catch(err => res.status(500).json(err));

/**
 * Attaches all unique park items for all parks to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetAllUniqueTypes = (req, res) => {
    return ParkItemService.GetAllUniqueTypes()
        .then(parkItemTypes => res.status(200).json(parkItemTypes))
        .catch(err => res.status(500).json(err));
}

/**
 * Attaches the park with an ID matching the id paramter of the given express Request parameter to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetForPark = (req, res) => {
    const id = req.params.id;
    if (id === undefined) {
        return Promise.resolve(res.status(500).json({ error: "Missing ID" }));
    }
    return ParkItemService.GetForPark(id)
        .then(foundParkItems => res.status(200).json({parkItems: foundParkItems }))
        .catch(err => res.status(500).json(err));
}

/**
 * Attaches the park with an ID matching the id paramter of the given express Request parameter to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetByID = (req, res) => {
    const id = req.params.id;
    if (id === undefined) {
        return Promise.resolve(res.status(500).json({ error: "Missing ID" }));
    }
    return ParkItemService.GetByID(id)
        .then(parkItems => res.status(200).json(parkItems))
        .catch(err => res.status(500).json(err));
}

/**
 * Attaches the parkitems for a random park to the express Request parameter to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetForRandomPark = (req, res) => {
    return ParkService.GetRandom()
        .then(park => {
            if (park === undefined) {
                return res.status(200).json({
                    park: "No parks",
                    parkItems: []
                });
            }
        return ParkItemService.GetForPark(park.id)
            .then(parkItems => res.status(200).json({
                park: park,
                parkItems: parkItems
            }))
            .catch(err => res.status(500).json(err));
        });
    
}

module.exports = {
    GetAll,
    GetAllUniqueTypes,
    GetForPark,
    GetForRandomPark,
    GetByID
}
