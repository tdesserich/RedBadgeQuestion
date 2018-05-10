'use strict';
const uuid = require('uuid');
const chance = require('chance')()
const db = require('../models/index').sequelize;
const Member = db.model('account_members')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let purchaseArr = [];

    for (let i = 1; i < 4; i++) {
      const purchaseObj = {
        id: i,
        accountMemberUid: '1f2e8a55-a064-42f4-9e49-093373e0caa8',
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
