const router = require('express').Router()
const {models:{Product, ProductColor, ProductSKU}} = require('../db/index');
module.exports = router

router.get('/:name', async(req, res, next)=> {
  try{ 
    let name;
    if(req.params.name.includes('%')) {
      name = decodeURIComponent(req.params.name)
    }
    else {
      name = req.params.name;
    } 
    const product = await Product.findOne({where: {name}})
    const productColors = await ProductColor.findAll({where: {productId: product.id}, include: [{model: ProductSKU}]})
    res.json(productColors)
  }
  catch(err){
    next(err)
  }
});

router.get('/delete/:id', async(req, res, next)=> {
  try{ 
    const productColors = await ProductColor.findAll({where: {productId: req.params.id}})
    res.json(productColors)
  }
  catch(err){
    next(err)
  }
})

router.get('/singleColor/:id', async(req, res, next) => {
  try{
    const color = await ProductColor.findByPk(req.params.id)
    res.send(color)
  }
  catch(err){
    next(err)
  }
})
