const sequelize = require('../config/database');
const User = require('./User');
const Post = require('./Post');

const initModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

// Define the relationships
Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Post,
  initModels
};

