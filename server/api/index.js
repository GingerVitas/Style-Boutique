const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/lineitems', require('./line_items'));
router.use('/orders', require('./orders'));
router.use('/guests', require('./guests'));
router.use('/skus', require('./skus'));

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
