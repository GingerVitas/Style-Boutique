const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  final: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  total: {
    type: Sequelize.DECIMAL(10,2),
  }
});

module.exports = Order;
