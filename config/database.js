// const {Sequelize} = require('sequelize')

// //! the .env file does not need to be in the node_modules folder, just in the same Node environment
// //! the config() method provided by `dotenv` is used to load the environment variables
// require(`dotenv`).config() //? Loads environment variables from .env file. 
// console.log(`POSTGRESURL: ${process.env.POSTGRESURL}`)

// const sequelize = new Sequelize(process.env.POSTGRESURL, {dialect: 'postgres'})

// module.exports = sequelize
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

console.log(`POSTGRESURL: ${process.env.POSTGRESURL}`); // Debugging line to ensure POSTGRESURL is loaded

const sequelize = new Sequelize(process.env.POSTGRESURL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Needed for connecting to certain PostgreSQL servers like Render
    }
  }
});

module.exports = sequelize;
