'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Carlos',
          email: 'carlos@rocketseat.com.br'
        },
        {
          name: 'Renata',
          email: 'renata@gmail.com'
        },
        {
          name: 'Fabio',
          email: 'fabio@gmail.com'
        },
        {
          name: 'Jonas',
          email: 'jonas@gmail.com'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
