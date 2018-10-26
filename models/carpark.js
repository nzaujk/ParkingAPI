'use strict';
module.exports = (sequelize, DataTypes) => {
  const CarPark = sequelize.define('CarPark', {
    slotNo: DataTypes.INTEGER,
    carNo: DataTypes.INTEGER,
  }, {});
  CarPark.associate = function(models) {
  };
  return CarPark;
};
