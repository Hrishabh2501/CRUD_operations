'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastnName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    ph_no: DataTypes.INTEGER,
    role_no: DataTypes.INTEGER,
    projects_id:DataTypes.INTEGER,
    deleteValue:DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here

    // models.role.hasMany(User,{foreignKey:'role_no'})
    // User.belongsTo(models.role,{foreignKey:'role_no'})
  };
  return User;
};