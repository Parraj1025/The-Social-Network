const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Post;
