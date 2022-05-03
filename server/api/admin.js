const router = require('express').Router()
module.exports = router
const {models: {User, Order, Address, Product, ProductColor, ProductSKU, LineItem}} = require('../db/');

const isAdmin = async(req, res, next) => {
  try{
    req.user = await User.isAdmin(req.headers.authorization);
    next();
  }
  catch(err){
    next(err)
  }
};

//Managing Users
router.get('/users', isAdmin, async(req, res, next) => {
  try{
    const users = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      include: [{model: Order}, {model: Address}]
    });
    res.send(users);
  }
  catch(err){
    next(err)
  }
});

//Managing Products
router.get('/products', isAdmin, async(req, res, next)=> {
  try{
    const products = await Product.findAll({
      include: [{model: ProductColor, include: {model: ProductSKU}}]
    });
    res.send(products)
  }
  catch(err){
    next(err)
  }
});

//Managing Orders
router.get('/orders', isAdmin, async(req, res, next) => {
  try{
    const orders = await Order.findAll({
      include: [{model: LineItem}, {model: User}]
    });
    res.send(orders)
  }
  catch(err){
    next(err)
  }
});