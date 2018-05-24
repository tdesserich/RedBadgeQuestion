const db = require('../models/index').sequelize;
const storeInventory = db.model('store_inventory');

class StoreInventoryService {

    // constructor(userId) {
    //     this._userId = userId;
    // }

    findAllProducts(query) {
        // console.log(query);
        // console.log(Object.keys(query));
        switch (Object.keys(query)[0]) {
            case 'limit':
                return storeInventory.findAll({ limit: query.limit })
            default:
                return storeInventory.findAll()
        }
    }
}


module.exports = StoreInventoryService;