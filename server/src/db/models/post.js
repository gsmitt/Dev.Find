'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "user_id", as: "user"})
    }
  };
  Post.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: null
    },

    image:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};