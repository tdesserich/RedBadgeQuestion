module.exports = (sequelize, DataTypes) => {
    const MemberPurchase = sequelize.define('member_purchase', {
        accountMemberUid: {
            type: DataTypes.UUID,
            allow_null: false
        },
        storeInventoryId: {
            type: DataTypes.INTEGER,
            allow_null: false
        }
    });
    return MemberPurchase;

}