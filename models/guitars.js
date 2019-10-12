'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guitars = sequelize.define('Guitars', {
    type: DataTypes.TEXT,
    model: DataTypes.TEXT,
    brand: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    necktype: DataTypes.TEXT,
    bodytype: DataTypes.TEXT,
    fretboard: DataTypes.TEXT,
    fretcount: DataTypes.INTEGER
  }, {});
  Guitars.associate = function(models) {
    // Associations can be defined here
  };
  return Guitars;
};