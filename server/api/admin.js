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
      include: [{model: Order, include: {model: LineItem}}, {model: Address}]
    });
    res.send(users);
  }
  catch(err){
    next(err)
  }
});

router.delete('/users/:id', isAdmin, async(req, res, next) => {
  try{
    const user = await User.findByPk(req.params.id);
    if(!user.isAdmin) {
      await user.destroy();
      res.sendStatus(204)
    }
    else {
      const error = Error('Unable to delete administrators')
      error.status = 401;
      throw error
    }

  }
  catch(err){
    next(err)
  }
});

router.put('/users/:id', isAdmin, async(req, res, next)=> {
  try{
    const user = await User.findByPk(req.params.id);
    await user.update(req.body);
    const updatedUser = await User.findByPk(user.id, {
      attributes: {
        exclude: ['password']
      },
      include: [{model: Order, include: {model: LineItem}}, {model: Address}]
    })
    res.send(updatedUser)
  }
  catch(err){
    next(err)
  }
})

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

router.get('/productSKUs/all', isAdmin, async(req, res, next) => {
  try{
    const productSKUs = await ProductSKU.findAll();
    res.send(productSKUs)
  }
  catch(err){
    next(err)
  }
})

router.delete('/productSKU/:id', async(req, res, next)=> {
  try{
    const sku = await ProductSKU.findByPk(req.params.id);
    await sku.destroy();
    res.sendStatus(204);
  }
  catch(err){
    next(err)
  }
})

router.delete(`/productColor/:id`, async(req, res, next)=>{
  try{
    const color = await ProductColor.findByPk(req.params.id);
    await color.destroy();
    res.sendStatus(204);
  }
  catch(err){
    next(err)
  }
})

router.delete('/products/:id', async(req, res, next) => {
  try{
      const product = await Product.findByPk(req.params.id)
      await product.destroy();
      res.sendStatus(204)
  }
  catch(err){
      next(err)
  }
})

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

router.get('/orders/:id', isAdmin, async(req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id, {
      include: [{model: LineItem}, {model: User}]
    });
    res.send(order);
  }
  catch(err){
    next(err)
  }
})

router.delete('/orders/:id', isAdmin, async(req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id);
    await order.destroy();
    res.sendStatus(204)
  }
  catch(err){
    next(err)
  }
});

router.delete('/orders/lineItems/delete/:id', isAdmin, async(req, res, next) => {
  try{
    const lineItem = await LineItem.findByPk(req.params.id);
    await lineItem.destroy();
    res.sendStatus(204);
  }
  catch(err){
    next(err)
  }
})

router.put('/orders/:id', isAdmin, async(req, res, next) => {
  try{
    const order = await Order.findByPk(req.params.id);
    await order.update(req.body)
    const updatedOrder = await Order.findByPk(order.id, {
      include: [{model: LineItem}, {model: User}]
    });
    res.send(updatedOrder)
  }
  catch(err){
    next(err)
  }
});

router.put('/orders/lineItems/update/:id', isAdmin, async(req, res, next) => {
  try{
    const lineItem = await LineItem.findByPk(req.params.id)
    await lineItem.update(req.body);
    res.sendStatus(204);
  }
  catch(err){
    next(err)
  }
});

router.post('/orders/lineItem', isAdmin, async(req, res, next) => {
  try{
    await LineItem.create(req.body);
    res.sendStatus(201)
  }
  catch(err){
    next(err)
  }
})