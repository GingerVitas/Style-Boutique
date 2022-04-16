//this is the access point for all things database related!
const db = require("./db");
const Address = require("./models/Address");
const LineItem = require("./models/LineItem");
const Order = require("./models/Order");
const Product = require("./models/Product");
const Tag = require("./models/Tag");
const User = require("./models/User");

Product.hasMany(Tag, { through: "ProductTag" });
Tag.belongsToMany(Product, { through: "ProductTag" });

// ProductTag = join/pivot table

Address.belongsTo(User);
User.hasMany(Address);

Order.belongsTo(User);
User.hasMany(Order);

Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);

module.exports = {
  db,
  models: {
    Address,
    LineItem,
    Order,
    Product,
    Tag,
    User,
  },
};
