"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "People",
      "status-active",
      "status_active",
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      "People",
      "status_active",
      "status-active",
    );
  },
};
