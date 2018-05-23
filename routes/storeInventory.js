const router = require('express').Router();
const StoreInventoryService = require('../services/storeInventoryService');

const sis = new StoreInventoryService();

router.get('/', (req, res) => {
    const limit = req.query
    sis.findAllProducts(limit)
    .catch(
        err => res.status(500).json({error: err + ''})
    )
    .then(
        users => {
            res.status(200).json(users)
        }
    )
})


module.exports = router;