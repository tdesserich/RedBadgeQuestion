'use strict';
const uuid = require('uuid');
const chance = require('chance')()

module.exports = {
  up: (queryInterface, Sequelize) => {
    let purchaseArr = [];

    for (let i = 1; i < 4; i++) {
      const purchaseObj = {
        id: i,
        accountMemberUid: '317a01ff-f77e-4a45-a9db-41939dc9364f',
        storeInventoryId: 1,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      };
      purchaseArr.push(purchaseObj);
    }
    return queryInterface.bulkInsert('member_purchases', purchaseArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('member_purchases', null, {});
  }
};
