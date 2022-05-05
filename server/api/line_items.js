const router = require('express').Router();
const { models: { LineItem } } = require('../db');
module.exports = router;

router.get('/:orderId', async (req, res, next) => {
    try {
        const line_items = await LineItem.findAll({
            where: {orderId: req.params.orderId},
            order: [['createdAt', 'DESC']]
        });
        res.json(line_items);
    } catch (err) {
        next(err)
    }
});

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

// Merging guest cart to user cart
router.put('/:lineitemId', async ({ body: { lineitem, orderId } }, res, next) => {
    try {
        console.log('***********************POST /api/lineitems ', lineitem, orderId)

        // see if user already have that SKU
            // IF YES: FIND THAT LINE ITEM, ADD QUANTITY, DON'T NEED TO ADD ORDER ID, DELETE THIS LINEITEM.
            // IF NO: UPDATE THE GUEST'S LINE ITEM W ORDER ID.

        const user_existing_line_item = await LineItem.findAll({
            where : {
                productSKUId: lineitem.productSKUId,
                orderId: orderId
            }
        });
        console.log('***********LN53', user_existing_line_item);

        if (user_existing_line_item.length > 0 ) {
            const guest_line_item = await LineItem.findByPk(lineitem.id);
            await guest_line_item.destroy();
            res.json([
                user_existing_line_item[0].incrementQuantity(guest_line_item.quantity),
                guest_line_item
            ])
        } else {
            await LineItem.update({ orderId }, { where: { id: lineitem.id } });
            const line_item = await LineItem.findByPk(lineitem.id);
            console.log('**************ln63:', line_item, 'check quantity...')
            res.json(line_item);
        } 
    } catch (err) {
        next(err)
    }
})

// Updating quantity of a specific lineitem from a specific customer
router.put('/add/:productSKUId', async(req, res, next) => {
    try { 
        if (!req.body.orderId) {
            console.log('ENTERED 75')
            const line_item = await LineItem.findOne({
                where: {
                    productSKUId: req.params.productSKUId,
                    orderId: null
                }
            })
            res.json(line_item.incrementQuantity());
        } else {
            const line_item = await LineItem.findOne({
                where: {
                    productSKUId: req.params.productSKUId,
                    orderId: req.body.orderId
                }
            });
            res.json(line_item.incrementQuantity());
        }
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
