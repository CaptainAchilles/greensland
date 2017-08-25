import { ParkItemRepository } from "../repositories";

const GetAll = () => ParkItemRepository.GetAll();

const GetForPark = parkID => ParkItemRepository.GetForPark(parkID);

const GetByID = parkItemID => ParkItemRepository.GetByID(parkItemID);

module.exports = {
    GetAll,
    GetForPark,
    GetByID
}
