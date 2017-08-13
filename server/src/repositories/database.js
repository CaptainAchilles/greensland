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
        sequelizeInstance = new Sequelize(dbSettings.name, dbSettings.username, dbSettings.password, Object.assign({}, dbSettings.other));
        return sequelizeInstance.authenticate();
    } else {
        return Promise.resolve(sequelizeInstance);
    }
}
module.exports = {
    Connect
}