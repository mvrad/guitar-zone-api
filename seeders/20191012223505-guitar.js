'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guitars', [{
      type: "Electric Guitar",
      model: "Modern Plus",
      brand: "Suhr",
      price: 3299.00,
      necktype: "Roasted Maple",
      bodytype: "Flame maple on basswood",
      fretboard: "Pau Ferro or roasted maple",
      fretcount: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
