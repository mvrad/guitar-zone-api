'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Guitars', [{
      type: "Electric Bass Guitar",
      model: "American Elite Jazz Bass V",
      brand: "Fender",
      price: 1899.99,
      necktype: "34\"-scale maple",
      bodytype: "Solid alder or ash",
      fretboard: "Maple or rosewood",
      fretcount: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
