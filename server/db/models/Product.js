const Sequelize = require("sequelize");
const db = require("./db");
const { faker } = require("@faker-js/faker");

const categories = [
  "Shirt",
  "Skirt",
  "Dress",
  "Jeans",
  "Leggings",
  "Pants",
  "Sweater",
  "Shoes",
  "Belts",
  "Accessories",
];

const colors = ["white", "black", "red", "blue", "gray", "orange", "green"];
const sizes = ["XS", "Small", "Medium", "Large", "XL"];
const brands = Array(10)
  .fill()
  .map((brand) => faker.company.companyName());

const Product = db.define("product", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  category: {
    type: Sequelize.ENUM(categories),
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "placeholderImage.jpg",
    validate: {
      notEmpty: true,
      isUrl: true,
    },
  },
  brand: {
    type: Sequelize.ENUM(brands),
  },
  color: {
    type: Sequelize.ENUM(colors),
    allowNull: false,
  },
  size: {
    type: Sequelize.ENUM(sizes),
    allowNull: false,
  },
  availableStock: {
    type: Sequelize.INTEGER,
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
});

module.exports = Product;
