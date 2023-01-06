'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'addresses',
      [
        {
          user_id: 1,
          zipcode: '32789',
          street: 'Rua Guilherme Gembala',
          number: 2000
        },
        {
          user_id: 2,
          zipcode: '32807',
          street: 'Guilherme Almeida',
          number: 1800
        },
        {
          user_id: 3,
          zipcode: '32811',
          street: 'Guilherme Almeida',
          number: 2500
        },
        {
          user_id: 4,
          zipcode: '32822',
          street: 'Guilherme Almeida',
          number: 1800
        },
        {
          user_id: 1,
          zipcode: '32832',
          street: 'Guilherme Almeida',
          number: 2000
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
