const router = require('express').Router();
const { models: { LineItem, User, Order, Guest } } = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        const lineItems = await LineItem.findAll();
        res.json(lineItems);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const { product, order } = req.body;

        const listItem = await LineItem.create({
            orderId: order.id,
            productId: product.id,
            quantity: 1,
            total: product.price * 1
        })
        res.json(listItem)
    } catch (err) {
        next(err)
    }
})