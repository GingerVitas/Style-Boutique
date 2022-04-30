const router = require('express').Router();
const { models: { LineItem, User, Order, Guest, ProductSKU } } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const lineItems = await LineItem.findAll();
        res.json(lineItems);
    } catch (err) {
        next(err)
    }
})
router.post('/', async ({ body: { lineitem }}, res, next) => {
    try {
        console.log('***********************POST /api/lineitems ', lineitem )

        const line_item = await LineItem.create(lineitem);
        console.log('***********************POST /api/lineitems', line_item, line_item.total)
        res.json(line_item)
    } catch (err) {
        next(err)
    }
})

router.put('/:lineitem', async({body: { lineitem }}, res, next) => {
    try { 
        // from cart, user added more quantity of the line item.
        // find line item w/ id
        // find sku by productId of lineitem.
        // decrement sku availableStock.
        // add quantity of the line item, return lineitem.
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const item = await LineItem.findByPk(req.params.id);
        await item.destroy();
        res.send(item);
    } catch (ex) {
        next(ex)
    }
})

// router.post('/', async (req, res, next) => {
//     try {
//         const { product, order } = req.body;

//         const listItem = await LineItem.create({
//             orderId: order.id,
//             productId: product.id,
//             quantity: 1,
//             total: product.price * 1
//         })
//         res.json(listItem)
//     } catch (err) {
//         next(err)
//     }
// })