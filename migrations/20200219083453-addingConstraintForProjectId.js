'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.addConstraint('Users',['projects_id'],{
      type:'foreign key',
      name: 'custom_fkey_to_constraint_name',
      references: { //Required field
        table: 'Projects',
        field: 'id'
      }
    })

  },

  down: (queryInterface, Sequelize) => {
   
  }
};
