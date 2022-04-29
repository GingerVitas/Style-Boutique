const router = require('express').Router()
const {models:{Product, ProductColor, ProductSKU}} = require('../db/index');
module.exports = router

router.get('/:name', async(req, res, next)=> {
  try{ 
    const name = await decodeURIComponent(req.params.name)
    const product = await Product.findOne({where: {name}})
    const productColors = await ProductColor.findAll({where: {productId: product.id}, include: [{model: ProductSKU}]})
    res.json(productColors)
  }
  catch(err){
    next(err)
  }
})
