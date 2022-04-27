const router = require('express').Router()
const {models:{Product, ProductSKU}} = require('../db/index');
module.exports = router

router.get('/:name', async(req, res, next)=> {
  try{ 
    const name = await decodeURIComponent(req.params.name)
    const product = await Product.findOne({where: {name}})
    const skus = await ProductSKU.findAll({where: {productId: product.id}})
    res.json(skus)
  }
  catch(err){
    next(err)
  }
})

//add category to url