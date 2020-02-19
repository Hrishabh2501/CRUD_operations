'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectName: DataTypes.STRING,
    id:{type:DataTypes.INTEGER,
      primaryKey:true}
  }, {});
  Project.associate = function(models) {
    // associations can be defined here

    Project.hasMany(models.User,{foreignKey:'projects_id'})
    models.User.belongsTo(Project,{foreignKey:'projects_id'})

  };
  return Project;
};