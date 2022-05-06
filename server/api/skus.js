const router = require('express').Router()
const {models:{Product, ProductSKU, ProductColor}} = require('../db/index');
module.exports = router

router.get('/:name', async(req, res, next)=> {
  try{ 
    const name = await decodeURIComponent(req.params.name)
    const product = await Product.findOne({where: {name}})
    const productColor = await ProductColor.findOne({where: {productId: product.id}})
    const skus = await ProductSKU.findAll({where: {productColorId: productColor.id}})
    res.json(skus)
  }
  catch(err){
    next(err)
  }
});
