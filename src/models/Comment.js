import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db.js';
import { Post } from './Post.js';

export const Comment = sequelize.define('comment', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

Comment.belongsTo(Post);
Post.hasMany(Comment);