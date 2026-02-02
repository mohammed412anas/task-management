"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("People", "createdAt");
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("People", "createdAt", {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date(),
    });
  },
};
