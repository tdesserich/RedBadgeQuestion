module.exports = (db) => {
    const Member = db.model('account_members')
    const MemberPurchase = db.model('member_purchase')
    const Product = db.model('store_inventory')

    MemberPurchase.belongsTo(Member)
    MemberPurchase.belongsTo(Product)
}
