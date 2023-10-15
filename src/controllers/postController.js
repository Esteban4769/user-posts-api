import { postService } from '../services/postService.js';

const createPost = async (req, res) => {
  const { userId, title, body } = req.body;


  try {
    const post = await postService.create(userId, title, body);

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
};


const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAll();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const postController = {
  createPost,
  getAllPosts,
};