const Sequelize = require("sequelize");
const db = require("./db");

const LineItem = db.define({
  id: {
    type: Sequelize.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
});

module.exports = LineItem;
