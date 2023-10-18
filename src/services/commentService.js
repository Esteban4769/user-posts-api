import { Comment } from '../models/Comment.js';

const create = async (postId, email, body) => {
  return await Comment.create({ postId, email, body });
};

const findByPost = (postId) => {
  return Comment.findAll({
    where: { postId },
  });
};

const remove = (commentId) => {
  return Comment.destroy({
    where: {
       id: commentId,
    }
  })
};


export const commentService = {
  create,
  findByPost,
  remove
};