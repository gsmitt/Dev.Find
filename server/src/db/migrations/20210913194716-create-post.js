'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,        
        references: {
          model: "users",
          key: "id"
        },        
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      title: {
        type: Sequelize.TEXT,
        allowNull: false
      },

      image: {
        type: Sequelize.STRING
      },

      description: {
        type: Sequelize.TEXT,
        allowNull: null
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};