import { ParkRepository, ParkItemRepository } from "../repositories";


const GetAll = () => ParkItemRepository.GetAll();

const GetAllUniqueTypes = () => ParkItemRepository.GetAllUniqueTypes()
    .then(parkItemTypes => parkItemTypes.reduce((carry, parkItem) => {
        if (carry[parkItem.type] === undefined) {
            carry[parkItem.type] = [];
        }
        carry[parkItem.type].push(parkItem.id);
        return carry;
    }, {}));

const GetForPark = parkID => ParkItemRepository.GetForPark(parkID);
const GetByID = parkItemID => ParkItemRepository.GetByID(parkItemID);


module.exports = {
    GetAll,
    GetAllUniqueTypes,
    GetForPark,
    GetByID
}
