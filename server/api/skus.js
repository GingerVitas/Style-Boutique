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

router.get('/delete/:id', async(req, res, next)=> {
  try{ 
    const skus = await ProductSKU.findAll({where: {productColorId: req.params.id}})
    res.json(skus)
  }
  catch(err){
    next(err)
  }
})

router.put('/:skuId', async ({ body: { lineitem } }, res, next) => {
  try {
    console.log('lineitem in skus api:', lineitem)
    const sku = await ProductSKU.findByPk(lineitem.productSKUId);
    sku.availableStock = sku.availableStock - lineitem.quantity;
    sku.save();
    res.json(sku)
  } catch (err) {
    next(err)
  }
});

//add category to url