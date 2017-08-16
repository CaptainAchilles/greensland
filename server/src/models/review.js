import Sequelize from "Sequelize";

const ReviewModel = {
    parkId: Sequelize.STRING,
    positive: Sequelize.BOOLEAN
};

module.exports = {
    Review: Sequelize.define("review", ReviewModel)
}