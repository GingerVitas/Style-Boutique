const router = require('express').Router();
const { models: { Product }} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) => {
    try{
        const products = await Product.findAll();
        res.json(products);
    } catch(err){
        next(err)
    }
})

router.delete('/:productId', async(req, res, next) => {
    try{
        const product = await Product.findByPk(req.params.productId)
        await product.destroy();
        res.sendStatus(204)
    }
    catch(err){
        next(err)
    }
})