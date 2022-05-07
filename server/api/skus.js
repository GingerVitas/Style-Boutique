const router = require('express').Router()
const {models:{Product, ProductSKU, ProductColor}} = require('../db/index');
module.exports = router

router.get('/:name', async(req, res, next)=> {
  try{ 
    const name = req.params.name
    const product = await Product.findOne({where: {name}})
    console.log('********SKUS PRODUCT*********', product)
    const productColor = await ProductColor.findOne({where: {productId: product.id}})
    console.log('*******SKUS COLOR**********', productColor)
    const skus = await ProductSKU.findAll({where: {productColorId: productColor.id}})
    res.json(skus)
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
})