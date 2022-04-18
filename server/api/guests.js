const router = require('express').Router()
const { models: { Order, User, Guest } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        const guests = await Guest.findAll();
        res.json(guests);
    } catch (err) {
        next(err)
    }
})

router.get('/:guestId', async(req, res, next) => {
    try {
        const guest = await Guest.findAll({
            where: { id : req.params.guestId }
        });
        res.json(guest[0])
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const guest = await Guest.create();
        res.json(guest)
    } catch (err) {
        next(err)
    }
})
