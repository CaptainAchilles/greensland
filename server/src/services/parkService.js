import ParkRepository from "../repositories/parkRepository";

const GetAll = () => ParkRepository.GetAll()
const GetByID = id => ParkRepository.GetByID(id);

module.exports = {
    GetAll,
    GetByID
}
