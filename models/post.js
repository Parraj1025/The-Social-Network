// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const User = require('../user'); //import user model
// const { formatDateTo12Hour } = require('../utils');

// const Post = sequelize.define('Post', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//   thoughts: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   }
// }, {
//   timestamps: true, // Adds createdAt 
// });

// //Define the relationships
// Post.belongsTo(User, { foreignKey: 'userId' });
// User.hasMany(Post, { foreignKey: 'userId' });

// module.exports = Post;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Import User model
const { formatDateTo12Hour } = require('../utils');


const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  thoughts: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // Should match table name
      key: 'id'
    }
  }
}, {
  timestamps: true,
});

module.exports = Post;




// // const { Sequelize, DataTypes } = require('sequelize')
// // models/post.js

// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
// const User = require('./user');

// const Post = sequelize.define('Post', {
//   thoughts: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   }
//     //   id: {
// //     type: DataTypes.UUID,
// //     defaultValue: DataTypes.UUIDV4,
// //     allowNull: false,
// //     primaryKey: true,
// //   },
// //   content: {
// //     type: DataTypes.STRING(280),
// //     allowNull: false,
// //   },
// //   userId: {
// //     type: DataTypes.UUID,
// //     allowNull: false,
// //   },
// //   createdAt: {
// //     type: DataTypes.DATE,
// //     allowNull: false,
// //     defaultValue: DataTypes.NOW,
// //   },
// //   updatedAt: {
// //     type: DataTypes.DATE,
// //     allowNull: false,
// //     defaultValue: DataTypes.NOW,
// //   },
// }, {
// //   tableName: 'posts',
//   timestamps: true,
// });

// //Define the relationships
// Post.belongsTo(User, { foreignKey: 'userId' });
// User.hasMany(Post, { foreignKey: 'userId' });

// module.exports = Post;
