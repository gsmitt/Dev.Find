'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "user_req", as: "reviewer"})
      this.belongsTo(models.User, {foreignKey: "user_get", as: "reviewed"})
    }
  };
  Review.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },

    description: {
      type: DataTypes.TEXT
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: null
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};