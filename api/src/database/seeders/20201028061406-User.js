"use strict";

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Jane Doe",
          email: "janedoe@example.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Jon Doe",
          email: "jondoe@example.com",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Users", null, {}),
};
