'use strict';
const User=require('./user')
const db=require('./index')
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    role_name: DataTypes.STRING,
    id: {type:DataTypes.INTEGER,
    primaryKey:true}
  }, {});
  role.associate = function(models) {
    // associations can be defined here
   role.hasOne(models.User,{foreignKey:'role_no'})
   models.User.belongsTo(role,{foreignKey:'role_no'})
    

  };
  return role;
};