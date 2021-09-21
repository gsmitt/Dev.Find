'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Post, { foreignKey: "user_id" })
      this.hasMany(models.Review, { foreignKey: "user_req" })
      this.hasMany(models.Review, { foreignKey: "user_get" })
      this.hasOne(models.RefreshToken, { foreignKey: "user_id" })
    }
    isPasswordValid(password) {
      return bcrypt.compareSync(password, this.password);
    }
  };

  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Invalid e-mail!"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(password) {
        this.setDataValue("password", bcrypt.hashSync(password, 10));
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: [["dev", "client", "admin"]]
      }
    }    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};