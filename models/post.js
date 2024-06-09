const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); //import user model

const Post = sequelize.define('Post', {
  thoughts: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  timestamps: true, // Adds createdAt 
  updatedAt: true,
});

//Define the relationships
Post.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Post, { foreignKey: 'userId' });

module.exports = Post;
