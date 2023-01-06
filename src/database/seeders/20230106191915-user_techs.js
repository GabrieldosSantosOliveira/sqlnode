'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'user_techs',
      [
        {
          user_id: 1,
          tech_id: 1
        },
        {
          user_id: 2,
          tech_id: 1
        },
        {
          user_id: 1,
          tech_id: 2
        },
        {
          user_id: 3,
          tech_id: 4
        },
        {
          user_id: 4,
          tech_id: 2
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_techs', null, {});
  }
};
