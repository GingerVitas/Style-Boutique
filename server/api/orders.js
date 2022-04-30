const router = require('express').Router()
const { models: { Order, User, Guest } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);
    } catch (err) {
        next(err)
    }
})
//     order: [['createdAt', 'DESC']]

router.get('/:authId', async (req, res, next) => {
    try {
        const order = await Order.findOne({
            where: {
                final: false,
                // wishList: false,
                userId: req.params.authId
            }
        })
        res.json(order)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let order;
        if(req.body.auth.id) {
            order = await Order.create({ userId: req.body.auth.id });
        } else {
            order = await Order.create();
        }
        res.json(order);
    } catch (err) {
        next(err)
    }
})
