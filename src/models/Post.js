import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { User } from './User.js';

export const Post = sequelize.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Post.belongsTo(User);
User.hasMany(Post);