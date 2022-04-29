//this is the access point for all things database related!
const db = require("./db");
const Address = require("./models/Address");
const LineItem = require("./models/LineItem");
const Order = require("./models/Order");
const Product = require("./models/Product");
const Tag = require("./models/Tag");
const User = require("./models/User");
const Guest = require("./models/Guest");
const ProductSKU = require('./models/ProductSKU');
const Category = require('./models/Category');

// Product.hasMany(Tag, { through: "ProductTag" });
// Tag.belongsToMany(Product, { through: "ProductTag" });

// ProductTag = join/pivot table

Address.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Address, {foreignKey: 'userId'});

Order.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Order, { foreignKey: 'userId' });

Order.belongsTo(Guest, {foreignKey: 'guestId'});
Guest.hasMany(Order, { foreignKey: 'guestId'})

LineItem.belongsTo(Order, { foreignKey: 'orderId' });
Order.hasMany(LineItem, { foreignKey: 'orderId' } );

// LineItem.belongsTo(Product, { foreignKey: 'productId' });
// Product.hasMany(LineItem, { foreignKey: 'productId' });

LineItem.belongsTo(ProductSKU, { foreignKey: 'productSkuId'});
ProductSKU.hasMany(LineItem, { foreignKey: 'productSkuId'});

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(ProductSKU);
ProductSKU.belongsTo(Product);




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
    Category
  },
};
