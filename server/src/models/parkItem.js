import {
    Sequelize,
} from "../database";
import {
    Park
} from "./park";

import {
    DataTypes
} from "sequelize";
const ParkItemModel = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    easting: DataTypes.STRING,
    northing: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
};

const parkItem = Sequelize.define("park_item", ParkItemModel);
parkItem.belongsTo(Park);
module.exports = {
    ParkItem: parkItem
}