import ParkService from "../services/parkService";

const GetAll = (req, res) => ParkService.GetAll()
    .then(allParks => res.status(200).json(allParks))
    .catch(err => res.status(500).json(err));

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
