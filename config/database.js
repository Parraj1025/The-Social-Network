const {Sequelize} = require('sequelize')

//! the .env file does not need to be in the node_modules folder, just in the same Node environment
//! the config() method provided by `dotenv` is used to load the environment variables
require(`dotenv`).config() //? Loads environment variables from .env file. 
console.log(`POSTGRESURL: ${process.env.POSTGRESURL}`)

const sequelize = new Sequelize(process.env.POSTGRESURL, {dialect: 'postgres'})

module.exports = sequelize

