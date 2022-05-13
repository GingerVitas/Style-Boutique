const Sequelize = require("sequelize");
const db = require("../db");


const ProductSKU = db.define("productSKU", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  size: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    }
  },
  availableStock: {
    type: Sequelize.INTEGER,
    defaultValue: 5,
    validate: {
      min: 0,
    },
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.01,
    },
  },
  seedId: {
    type: Sequelize.INTEGER
  }
});

module.exports = ProductSKU;