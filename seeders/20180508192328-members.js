'use strict';
const uuid = require('uuid');
const chance = require('chance')()

module.exports = {
  up: (queryInterface, Sequelize) => {
    let userArr = [];

    for (let i = 0; i < 100; i++) {

      if (i === 0) {
        const userObj = {
          uid: '1f2e8a55-a064-42f4-9e49-093373e0caa8',
          first_name: `John${i}`,
          last_name: `Doe${i}`,
          email: chance.email({ domain: "example.com" }),
          password: `test${i}`,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        };
        userArr.push(userObj);
      } else {
        const userObj = {
          uid: uuid(),
          first_name: `John${i}`,
          last_name: `Doe${i}`,
          email: chance.email({ domain: "example.com" }),
          password: `test${i}`,
          createdAt: new Date(Date.now()),
          updatedAt: new Date(Date.now())
        };
        userArr.push(userObj);
      }

    }
    return queryInterface.bulkInsert('account_members', userArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('account_members', null, {});
  }
};
