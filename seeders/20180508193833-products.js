

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let productArr = [];

    for (let i = 1; i < 101; i++) {
      const productObj = {
        id: i,
        product_name: `Osprey${i}`,
        product_description: `Osprey Atmos AG 65 Pack ${i}`,
        product_price: 0.00,
        product_size: `S`,
        product_type: 'Backpack',
        product_images: ['image1', 'image2','image3'],
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now())
      };
      productArr.push(productObj);
    }
    return queryInterface.bulkInsert('store_inventories', productArr, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('store_inventories', null, {});
  }
};

