import 'dotenv/config';
import { User } from './models/User.js';
import { Token } from './models/Token.js';
import { Comment } from './models/Comment.js';
import { Post } from './models/Post.js';


await User.sync({ force: true });
await Token.sync({ force: true });
await Post.sync({ force: true });
await Comment.sync({ force: true });
