import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection.js';


export class Movie extends Model {}
Movie.init(
  {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    routename: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    releasedate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.DOUBLE.UNSIGNED,
        allowNull: false,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: 'Movie',
    tableName: 'movies',
    timestamps: false,
  },
);

// export const create_movies = async () => {
//     const avengers = await Movie.create({
//         title: 'AVENGERS',
//         routename: 'avengers',
//         duration: 181,
//         genre: 'Action',
//         imageurl: '/images/avengers.jpg',
//         releasedate: new Date('2019-04-26'),
//         price: 8,
//     })
//     const jurassic_park = await Movie.create({
//         title: 'JURASSIC PARK',
//         routename: 'jurassic_park',
//         duration: 171,
//         genre: 'Action',
//         imageurl: '/images/jurassic_park.jpg',
//         releasedate: new Date('2017-06-16'),
//         price: 7,
//     })
//     const inception = await Movie.create({
//         title: 'INCEPTION',
//         routename: 'inception',
//         duration: 165,
//         genre: 'Thriller',
//         imageurl: '/images/inception.jpg',
//         releasedate: new Date('2021-07-12'),
//         price: 9,
//     })
//     const star_wars = await Movie.create({
//         title: 'STAR WARS',
//         routename: 'star_wars',
//         duration: 193,
//         genre: 'Action',
//         imageurl: '/images/star_wars.jpg',
//         releasedate: new Date('2013-12-16'),
//         price: 5,
//     })
// }
