'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    department: DataTypes.STRING,
    telephone: DataTypes.INTEGER,
    carNo: DataTypes.INTEGER,
  }, {});
  Owner.associate = function(models) {
    Owner.hasOne(models.Car, {
      foreignKey: 'carNo'
    })
  };
  return Owner;
};
