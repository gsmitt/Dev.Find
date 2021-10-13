'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        defaultValue: Sequelize.UUID,
        primaryKey: true,
        type: Sequelize.UUID
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },

      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Invalid e-mail!"
          }
        }
      },
      
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      avatar: {
        type: Sequelize.STRING
      },

      avatar_key:{
        type: Sequelize.STRING
      },

      background: {
        type: Sequelize.STRING
      },

      background_key:{
        type: Sequelize.STRING
      },
  
      role: {
        type: Sequelize.ENUM("dev", "client", "admin"),
        allowNull: false
      },

      location: {
        type: Sequelize.STRING
      },
      
      description: {
        type: Sequelize.STRING
      },
  
      company: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('users');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS enum_users_role;');
  }
};