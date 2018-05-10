const router = require('express').Router();
const PurchaseService = require('../services/purchaseService');

router.get('/', (req, res) => {
    ps().getAllPurchases().then(
        (purchase) => res.json({purchase})
    )
})

const ps = () => new PurchaseService();

module.exports = router