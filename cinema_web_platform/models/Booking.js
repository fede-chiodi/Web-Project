import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection.js';


export class Booking extends Model {}
Booking.init(
  {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    movie_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE.UNSIGNED,
        allowNull: false,
    },
    seat: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: 'Booking',
    tableName: 'bookings',
    timestamps: false,
  },
);