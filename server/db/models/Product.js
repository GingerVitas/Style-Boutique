const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  brand: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  imageUrl: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
      notEmpty: true
    }
  }
});

module.exports = Product;
