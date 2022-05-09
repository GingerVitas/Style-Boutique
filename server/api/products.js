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
})

