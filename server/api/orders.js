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
        console.log('helooooooooo', req.params.authId)
        const order = await Order.findAll({
            where : {
                userId: req.params.authId
            }
        })
        console.log('returnnnnnnnnnnnnnn', order)
        res.send(order);
    } catch (err) {

    }
})

router.post('/', async (req, res, next) => {
    try {
        const order = await Order.create();
        order.userId = req.body.auth.id;
        order.save();
        // Order.update(
        //     {userId: req.body.auth.id},
        //     {where: {id: order.id}}
        // )
        res.json(order);
    } catch (err) {
        next(err)
    }
})
