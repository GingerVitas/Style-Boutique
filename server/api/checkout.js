const router = require('express').Router()
const { models: { Address } } = require('../db')
module.exports = router

router.get('/:userId', async (req, res, next) => {
    try {
        const address = await Address.findOne({
            where: {
                userId: req.params.userId
            },
            attributes: {
                exclude: ['country']
            }
        })
        res.json(address);
    } catch (err) {
        next(err)
    }
})