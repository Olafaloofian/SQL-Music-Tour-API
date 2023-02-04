'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'band',
      'recommendation',
      { type: Sequelize.STRING }
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'band',
      'recommendation'
    )
  }
};
