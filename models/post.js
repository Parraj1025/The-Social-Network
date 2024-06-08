const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); //import user model

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  thoughts: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

//Define the relationships
Post.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Post, { foreignKey: 'userId' });

module.exports = Post;
