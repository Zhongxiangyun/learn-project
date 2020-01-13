'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.INTEGER,
    username: {
      type: DataTypes.STRING(255)
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};