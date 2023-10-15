import express from 'express';
import { postController } from '../controllers/postController.js';

export const postRouter = new express.Router();

postRouter.post('/post', postController.createPost);

postRouter.get('/post/all', postController.getAllPosts);