const router = require('express').Router();
const { models: { Product, ProductColor, ProductSKU, Category }} = require('../db');
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
});

router.get('/shop/:category', async(req, res, next) => {
    try{
        const category = await Category.findOne({where: {categoryName:req.params.category}});

        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);

        let page = 1;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
            page = pageAsNumber
        };

        let size = 16;
        if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber <=32){
            size = sizeAsNumber
        };

        const products = await Product.findAndCountAll({
            where: {
                categoryId: category.id
            },
            limit: size,
            offset: (page-1)*size
        });

        if(page*size > products.count) {
            page = Math.ceil(products.count/size)
            const resetProducts = await Product.findAndCountAll({
                where: {
                    categoryId: category.id
                },
                limit: size,
                offset: (page-1)*size
            });
            res.send({
                content: resetProducts.rows,
                totalPages: Math.ceil(products.count/size)
            })
        } else {
            res.send({
                content: products.rows,
                totalPages: Math.ceil(products.count/size)
            })
        }
    }
    catch(err){
        next(err)
    }
})

