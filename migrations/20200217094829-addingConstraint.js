'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addConstraint('roles',['roll_id'],{
        type:'primary key',
        name: 'custom_primary_constraint_name'
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
