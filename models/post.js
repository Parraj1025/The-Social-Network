const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
const sequelize = new Sequelize(process.env.CONNECT)

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.UUID, //! Using Sequelize UUID for unique identification
        defaultValue: DataTypes.UUIDV4, //! Automatically generate a UUID
        allowNull: false,
        primaryKey: true,
    },
    content: {
        type: DataTypes.STRING(280), //! Limit content to 280 characters
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID, 
        allowNull: false,
        references: {
        model: 'Users', // Name of the user table
        key: 'id', // Key in the user table
        },
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
    }, {
    tableName: 'posts',
    timestamps: true, //! Automatically adds createdAt and updatedAt fields
    });

    module.exports = Post;