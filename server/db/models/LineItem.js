const Sequelize = require("sequelize");
const db = require("../db");

const LineItem = db.define('lineItem', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.01,
    },
  }
});

module.exports = LineItem;
