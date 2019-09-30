'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    address_id: DataTypes.NUMBER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

