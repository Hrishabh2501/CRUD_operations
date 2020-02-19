'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addConstraint('Users',['role_no'],{
      type:'foreign key',
      name: 'custom_fkey_constraint_name',
      references: { //Required field
        table: 'roles',
        field: 'roll_id'
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
