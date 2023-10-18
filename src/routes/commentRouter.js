import express from 'express';
import { commentController } from '../controllers/commentController.js';

export const commentRouter = express.Router();

commentRouter.post('/comment', commentController.createComment);

commentRouter.delete('/comment/:id', commentController.deleteComment);

commentRouter.get('/comment/post/:postId', commentController.getCommentsByPost);


