module.exports = (app) => {
    app.use('/api/auth', require('./accoutUser'));
    app.use('/api/purchase', require('./memberPurchase'));
    app.use('/api/products', require('./storeInventory'));
}   