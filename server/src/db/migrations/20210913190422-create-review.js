'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      description: {
        type: Sequelize.TEXT
      },
      
      user_req: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "Users",
          key: "id"
        },        
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      user_get: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "Users",
          key: "id"
        },        
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      score: {
        type: Sequelize.INTEGER,
        allowNull: null
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reviews');
  }
};