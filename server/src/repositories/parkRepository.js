import { Park } from "../models";

const GetAll = () => Park.findAll({
    attributes: ["id", "parkName"]
})
const GetByID = id => Park.findById(id);

module.exports = {
    GetAll,
    GetByID
}
