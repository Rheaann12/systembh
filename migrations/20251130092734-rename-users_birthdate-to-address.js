'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Rename column Users_Birthdate to Address
    await queryInterface.renameColumn('tenants', 'Users_Birthdate', 'Address');

    // Optional: Change data type if needed
    await queryInterface.changeColumn('tenants', 'Address', {
      type: Sequelize.STRING,
      allowNull: false
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert column name back to Users_Birthdate
    await queryInterface.renameColumn('tenants', 'Address', 'Users_Birthdate');

    await queryInterface.changeColumn('tenants', 'Users_Birthdate', {
      type: Sequelize.DATE,
      allowNull: false
    });
  }
};
