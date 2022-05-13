const Sequelize = require("sequelize");
const db = require("../db");

const LineItem = db.define("line_item", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  productColor: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  productSize: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  productPrice: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 0.01,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isUrl: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  categoryName: {
    type: Sequelize.STRING
  },
  total: {
    type: Sequelize.VIRTUAL,
    get() {
      return +((this.productPrice * this.quantity).toFixed(2));
    }
  }
});

//instance method
LineItem.prototype.updateQuantity = function(quantity) {
  this.quantity = quantity;
  this.save();
  return this;
}

LineItem.prototype.incrementQuantity = function(guestQuantity) {
  this.quantity += guestQuantity;
  this.save();
  return this;
}

module.exports = LineItem;
