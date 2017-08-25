import { Sequelize } from "../database";
import { DataTypes } from "sequelize";
import ParkItem from "./parkItem";


const ParkModel = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
    },
    parkName: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
};

const park = Sequelize.define("park", ParkModel);

park.hasMany(ParkItem);
module.exports = park;
