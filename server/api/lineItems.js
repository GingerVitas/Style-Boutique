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

const addListItem = async(product, user) => {
    let listItem;
    if (user.currentOrder === false) {
        const order = await Order.create({
            userId: user.id
        });
        listItem = await LineItem.create({
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
        listItem = await LineItem.create({
            orderId: order.id,
            productId: product.id,
            quantity: 1,
            total: product.price
        })
    }
    return listItem;
}

router.post('/', async (req, res, next) => {
    try {
        const { product, auth} = req.body;

        let user;
        if (auth.id) {
            user = await User.findByPk(auth.id);
            res.json(addListItem(product, user))
        } else {
            user = await Guest.create();
            res.json(addListItem(product, user))

        }
    } catch (err) {
        next(err)
    }
})