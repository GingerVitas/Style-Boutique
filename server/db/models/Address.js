const Sequelize = require("sequelize");
const db = require("../db");

const countries = ["USA", "Canada", "Mexico"];

const Address = db.define("address", {
  firstName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  addressLine1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  addressLine2: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  country: {
    type: Sequelize.ENUM(countries),
    allowNull: false,
    defaultValue: "USA",
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Address;
