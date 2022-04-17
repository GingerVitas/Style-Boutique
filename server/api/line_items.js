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

const addListItem = async (product, user) => {
    if (user.currentOrder === false) {
        const order = await Order.create({
            userId: user.id
        });
        return listItem = await LineItem.create({
            orderId: order.id,
            productId: product.id,
            quantity: 1,
            total: product.price
        })
    } else {
        const order = await Order.findAll({
            where: {
                userId: user.id
            }
        })
        return listItem = await LineItem.create({
            orderId: order.id,
            productId: product.id,
            quantity: 1,
            total: product.price
        })
    }
}

router.post('/', async (req, res, next) => {
    try {
        const { product, auth } = req.body;
        // let user;
        // if (auth.id) {
        //     user = await User.findByPk(auth.id);
        //     res.json(await addListItem(product, user))
        // } else {
        //     user = await Guest.create();
        //     res.json(await addListItem(product, user))
        // }

        const order = await Order.create({
            userId: auth.id
        });

        const listItem = await LineItem.create({
            orderId: order.id,
            productId: product.id,
            quantity: 1,
            price: product.price
        })
        res.json(listItem)
    } catch (err) {
        next(err)
    }
})