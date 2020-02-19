'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const Op = Sequelize.Op
    return queryInterface.bulkDelete('roles', {id: {[Op.in]: [3]}}, {})
  },


  down: (queryInterface, Sequelize) => {

    //return queryInterface.bulkDelete('roles', null, {});
  }
};
