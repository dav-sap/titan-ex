import { DataTypes, Model } from 'sequelize';
import sequelize from '../db';

class Order extends Model {
  public id!: number;
  public email!: string;
  public fullName: string;
  public fullAddress: string;
  public imageUrls: string[];
  public frameColor: string;
  public user!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrls: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    frameColor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export default Order;
