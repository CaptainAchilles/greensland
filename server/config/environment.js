const config = require("config");

const dbSettings = config.get("db");

module.exports = Object.assign({
    database: dbSettings.database,
    username: dbSettings.username,
    password: dbSettings.password,
}, dbSettings.other);