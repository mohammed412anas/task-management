"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          name: "Suhail",
          email: "suhail@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rafi",
          email: "rafi@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chaitanya",
          email: "chaitanya@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
