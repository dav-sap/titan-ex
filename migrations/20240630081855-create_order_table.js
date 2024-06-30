'use strict';
import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullAddress: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      imageUrls: {
        type: DataTypes.JSON,
        allowNull: false
      },
      frameColor: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Orders');
  }
};
