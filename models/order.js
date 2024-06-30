'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    fullAddress: DataTypes.STRING,
    imageUrls: DataTypes.JSON,
    frameColor: DataTypes.STRING,
    user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};