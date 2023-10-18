import { commentService }  from '../services/commentService.js';

const createComment = async (req, res) => {
  const { postId, email, body } = req.body;
  
  try {
    const comment = await commentService.create(postId, email, body);
    
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create a comment' });
  }
};

const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const comments = await commentService.findByPost(postId);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments by email' });
  }
};

const deleteComment = async(req, res) => {
  const commentId = req.params.id;

  commentService.remove(commentId)
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      res.status(500).json({ error: 'Failed to delete the comment' });
    });
}


export const commentController = {
  createComment,
  getCommentsByPost,
  deleteComment,
};