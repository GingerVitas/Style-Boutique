const Sequelize = require("sequelize");
const db = require("../db");

const Guest = db.define("guest", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    currentOrder: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Guest;