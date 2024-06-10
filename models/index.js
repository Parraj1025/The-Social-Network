const sequelize = require('../config/database');
const User = require('./user');
const Post = require('./post');
const { formatDateTo12Hour } = require('../utils');
 
const initModels = async () => {
  try {
    await sequelize.sync({ force: false }); // Set to true to recreate tables on every restart, false to retain data
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

module.exports = {
  sequelize,
  User,
  Post,
  initModels
};
