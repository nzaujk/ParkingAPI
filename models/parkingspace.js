'use strict';
module.exports = (sequelize, DataTypes) => {
  const ParkingSpace = sequelize.define('ParkingSpace', {
  }, {});
  ParkingSpace.associate = function(models) {
      ParkingSpace.belongsToMany(models.Car, {
        through: 'CarPark',
        foreignKey: 'slotId'
      })
  };
  return ParkingSpace;
};
