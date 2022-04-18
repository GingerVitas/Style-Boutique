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

router.get('/:authId', async (req, res, next) => {
    try {
        let order;
        if(req.body.auth) {
            order = await Order.findAll({
                where: {
                    final: false,
                    userId: req.body.auth.id
                }
            })
        } else {
            order = await Order.findAll({
                where: {
                    final: false,
                    guestId: req.params.authId
                }
            })
        }
        res.send(order[0]);
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let order;
        if(req.body.guest) {
            order = await Order.create({ guestId: req.body.guest.id });
        } else {
            order = await Order.create({ userId: req.body.auth.id });
        }
        res.json(order);
    } catch (err) {
        next(err)
    }
})
