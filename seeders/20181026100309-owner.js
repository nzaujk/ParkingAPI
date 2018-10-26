'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Owners', [{
      firstName: 'Ruth',
      lastName: 'Mary',
      department: 'Technology',
      telephone: '234567',
      createdAt: '2018-05-25 17:39:15.014961-05',
      updatedAt: '2018-05-25 17:39:15.014961-05',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Owners', null, {});

  }
};
