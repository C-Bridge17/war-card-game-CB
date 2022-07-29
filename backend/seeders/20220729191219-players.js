'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Players', [{
      name: 'Player One',
      wins: 0,
      loses: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Player Two',
      wins: 0,
      loses: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Players', null, {});

  }
};
