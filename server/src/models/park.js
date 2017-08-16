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
    parkName: DataTypes.STRING
};

module.exports = {
    Park: Sequelize.define("park", ParkModel)
}