import { Post } from '../models/Post.js';

const create = async (userId, title, body) => {
  return Post.create({ userId, title, body });
};

const getAll = () => {
  return Post.findAll({
    order: ['id'],
  });
};

export const postService = {
  create,
  getAll,
};