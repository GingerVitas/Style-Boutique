const router = require("express").Router();
const {models: {Address, Order, LineItem}} = require('../db');
const {
  models: { User },
} = require("../db");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.send({ token: await user.generateToken() });
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization)
    res.send(await User.findByPk(user.id, {
      include: [{model: Address},{model: Order, include:{model: LineItem}}],
      order: [['createdAt', 'DESC']]
    }));
  } catch (ex) {
    next(ex);
  }
});

router.put("/me", async (req, res, next) => {
  try {
    console.log(req.body)
    let user = await User.findByToken(req.headers.authorization);
    await user.update(req.body)
    user = await User.findByToken(req.headers.authorization);
    res.status(200).json(user);
  } catch (ex) {
    next(ex);
  }
});
