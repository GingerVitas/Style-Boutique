const router = require('express').Router()
const { models: { Category } } = require('../db')
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