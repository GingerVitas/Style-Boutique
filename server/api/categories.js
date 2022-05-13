const router = require('express').Router()
const { models: { Category, Product } } = require('../db')
module.exports = router

router.get('/', async(req, res, next) => {
  try{
    const categories = await Category.findAll()
    res.json(categories)
  }
  catch(err){
    next(err)
  }
});

router.get('/:categoryId', async(req, res, next) => {
  try{
    const categoryProducts = await Product.findAll({where: {categoryId: req.params.categoryId}});
    res.send(categoryProducts)
  }
  catch(err){
    next(err)
  }
})