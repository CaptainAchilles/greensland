import { DataTypes } from "sequelize";
import { Sequelize } from "../database";

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

module.exports = parkItem
