import { userService } from '../services/userService.js';

async function getAll(req, res, next) {
  const users = await userService.getAllActive();

  res.send(
    users.map(userService.normalize)
  );
}

async function getUserById(req, res) {
  const { id } = req.params;

  console.log(id);

  try {
    const user = await userService.getById(id);
  
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve user post' });
  }
};

export const userController = { getAll, getUserById };
