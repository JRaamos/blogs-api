'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('categories', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
       },
        name: Sequelize.STRING,
     });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('categories');
     
  }
};
