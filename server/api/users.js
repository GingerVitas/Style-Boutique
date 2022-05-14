const router = require('express').Router()
const { models: { User, Address } } = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'username']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
});

router.put('/address/:id', async(req, res, next)=>{
  try{
    const address = await Address.findByPk(req.params.id);
    await address.update(req.body);
    res.sendStatus(200)
  }
  catch(err){
    next(err)
  }
});

router.post('/address', async(req, res, next)=> {
  try{
    const address = await Address.create(req.body);
    res.send(address)
  }
  catch(err){
    next(err)
  }
})

router.delete('/address/:id', async(req, res, next)=>{
  try{
    const address = await Address.findByPk(req.params.id);
    await address.destroy();
    res.sendStatus(204)
  }
  catch(err){
    next(err)
  }
})

