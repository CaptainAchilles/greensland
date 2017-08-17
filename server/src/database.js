import config from "config";
import Sequelize from "sequelize";

const dbSettings = config.get("db");

let sequelizeInstance = undefined;

/**
 * 
 * @return Promise<Sequelize> A Sequelize database instance
 */
const Connect = () => {
    if (sequelizeInstance === undefined) {
        sequelizeInstance = new Sequelize(dbSettings.database, dbSettings.username, dbSettings.password, Object.assign({}, dbSettings.other));
    }
    return sequelizeInstance;
}

module.exports = {
    Sequelize: Connect()
}