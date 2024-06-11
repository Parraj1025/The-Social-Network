require('dotenv').config();
const { Sequelize } = require('sequelize');
 // Load environment variables from .env file

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