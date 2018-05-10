const db = require('../models/index').sequelize;
const MemberPurchase = db.model('member_purchase');
const Member = db.model('account_members');
const Product = db.model('store_inventory')

class PurchaseService {
    getAllPurchases() {
        return MemberPurchase.findAll({include: [Member, Product]})
    }
}

module.exports = PurchaseService;