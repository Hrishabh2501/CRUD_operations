'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('roles','roles_pkey',{
    })
    // ,queryInterface.removeConstraint('Users','Users_pkey',{});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
  
    // return queryInterface.removeConstraint('roles','id');

  }
};
