'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
   registrationNo: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
  }, {});
  Car.associate = function(models){
    Car.belongsToMany(models.ParkingSpace, {
      through: 'CarPark',
      foreignKey: 'slotId'
    });
    Car.belongsTo(models.Owner);
  };
  return Car;
};
