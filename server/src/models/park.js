import {
    Sequelize
} from "../database";
import {
    DataTypes
} from "sequelize";

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

module.exports = {
    Park: Sequelize.define("park", ParkModel)
}
