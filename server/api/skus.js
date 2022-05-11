const router = require('express').Router()
const {models:{Product, ProductSKU, ProductColor}} = require('../db/index');
module.exports = router

router.get('/:name', async(req, res, next)=> {
  try{
    const name = req.params.name
    const product = await Product.findOne({where: {name}})
    const productColor = await ProductColor.findOne({where: {productId: product.id}})
    const skus = await ProductSKU.findAll({where: {productColorId: productColor.id}})
    res.json(skus)
  }
  catch(err){
    next(err)
  }
});

router.get('/findOne/:id', async(req, res, next)=> {
  try{
    const sku = await ProductSKU.findByPk(req.params.id);
    res.send(sku)
  }
  catch(err){
    next(err)
  }
});

router.get('/findAll/:id',  async(req, res, next) => {
  try{
    const skus = await ProductSKU.findAll({where: {productColorId: req.params.id}})
    res.send(skus)
  }
  catch(err){
    next(err)
  } 
});

router.get('/delete/:id', async(req, res, next)=> {
  try{
    const skus = await ProductSKU.findAll({where: {productColorId: req.params.id}})
    res.json(skus);
  }
  catch(err){
    next(err)
  }
});