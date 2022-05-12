const router = require('express').Router();
const { models: { Product, ProductColor, ProductSKU }} = require('../db');
module.exports = router;

router.get('/', async(req, res, next) => {
    try{
        const products = await Product.findAll({
            include: [
                { model: ProductColor,
                    include: {
                        model: ProductSKU
                    }
                }
            ]
        });
        res.json(products);
    } catch(err){
        next(err)
    }
});

router.get('/:id', async(req, res, next)=> {
    try{
        const product = await Product.findByPk(req.params.id, {
            include: [{model: ProductColor, include: {model: ProductSKU}}]
        });
        res.send(product)
    }
    catch(err){
        next(err)
    }
})

