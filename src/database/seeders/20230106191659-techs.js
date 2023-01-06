'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'techs',
      [
        {
          name: 'React.JS'
        },
        {
          name: 'React Native'
        },
        {
          name: 'Node.js'
        },
        {
          name: 'Java'
        },
        {
          name: 'Flutter'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('techs', null, {});
  }
};
