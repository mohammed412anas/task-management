"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("People", "updatedAt");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("People", "updatedAt", {
      allowNull: false,
      type: Sequelize.DATE,
    });
  },
};
