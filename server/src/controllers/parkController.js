import ParkService from "../services/parkService";

/**
 * Attaches all park items to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetAll = (req, res) => ParkService.GetAll()
    .then(allParks => res.status(200).json(allParks))
    .catch(err => res.status(500).json(err));

/**
 * Attaches the park with an ID matching the id paramter of the given express Request parameter to the given express Response parameter body as a stringified json object
 * @return {Promise<Response>} Promise which resolves to the express Response
 */
const GetByID = (req, res) => {
    const id = req.params.id;
    if (id === undefined) {
        return Promise.resolve(res.status(500).json({ error: "Missing ID" }));
    }
    return ParkService.GetByID(id)
        .then(foundPark => res.status(200).json(foundPark))
        .catch(err => res.status(500).json(err));
}

module.exports = {
    GetAll,
    GetByID
}
