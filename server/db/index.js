//this is the access point for all things database related!
const db = require("./db");
const Sequelize = require('sequelize');
const Address = require("./models/Address");
const LineItem = require("./models/LineItem");
const Order = require("./models/Order");
const Product = require("./models/Product");
const Tag = require("./models/Tag");
const User = require("./models/User");
const Guest = require("./models/Guest");
const ProductSKU = require('./models/ProductSKU');
const Category = require('./models/Category');
const ProductColor = require('./models/ProductColor');

// Product.hasMany(Tag, { through: "ProductTag" });
// Tag.belongsToMany(Product, { through: "ProductTag" });

// ProductTag = join/pivot table

Address.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Address, {foreignKey: 'userId'});

Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

// Order.belongsTo(Guest, {foreignKey: 'guestId'});
// Guest.hasMany(Order, { foreignKey: 'guestId'})

LineItem.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(LineItem, { foreignKey: 'orderId' } );

// LineItem.belongsTo(Product, { foreignKey: 'productId' });
// Product.hasMany(LineItem, { foreignKey: 'productId' });

LineItem.belongsTo(ProductSKU);
ProductSKU.hasMany(LineItem);

// LineItem.belongsTo(ProductSKU);
// ProductSKU.hasMany(LineItem);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(ProductColor);
ProductColor.belongsTo(Product);

ProductColor.hasMany(ProductSKU);
ProductSKU.belongsTo(ProductColor);

module.exports = {
  db,
  models: {
    Address,
    LineItem,
    Order,
    Product,
    Tag,
    User,
    Guest,
    ProductSKU,
    Category,
    ProductColor
  },
};
