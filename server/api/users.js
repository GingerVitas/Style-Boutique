const router = require('express').Router()
const { models: { User, Order, LineItem } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username'],
      include: [{ model: Order, include: { model: LineItem } }]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

