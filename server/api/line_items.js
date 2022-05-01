const router = require('express').Router();
const { models: { LineItem } } = require('../db');
module.exports = router;

router.get('/:orderId', async (req, res, next) => {
    try {
        const lineItems = await LineItem.findAll({
            where: {orderId: req.params.orderId},
            order: [['createdAt', 'DESC']]
        });
        res.json(lineItems);
    } catch (err) {
        next(err)
    }
})
router.post('/', async ({ body: { lineitem, orderId }}, res, next) => {
    try {
        console.log('***********************POST /api/lineitems ', lineitem, orderId )

        const line_item = await LineItem.create(lineitem);
        console.log('***********************POST /api/lineitems', line_item, line_item.total)

        if(orderId) {
            line_item.orderId = orderId;
            line_item.save();
        }

        res.json(line_item)
    } catch (err) {
        next(err)
    }
})

router.put('/:lineitem', async({body: { lineitem, orderId }}, res, next) => {
    try { 
        console.log('***********************POST /api/lineitems ', lineitem, orderId)

        await LineItem.update({ orderId }, {where: { id: lineitem.id }});
        const line_item = await LineItem.findByPk(lineitem.id)
        res.json(line_item);
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const item = await LineItem.findByPk(req.params.id);
        await item.destroy();
        res.send(item);
    } catch (ex) {
        next(ex)
    }
})
