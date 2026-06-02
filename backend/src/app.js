require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const app     = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('API rodando');
});

const communitiesRoutes = require('./routes/communities_routes');
const userRoutes = require('./routes/user_routes');
const emploRoutes = require('./routes/emplo_routes');
const feedRoutes = require('./routes/feed_routes');
const commentsRoutes = require('./routes/comments_routes');
const likesRoutes = require('./routes/likes_routes');
const postsRoutes = require('./routes/posts_routes');

app.use('/communities', communitiesRoutes);
app.use('/user', userRoutes);
app.use('/employees', emploRoutes);
app.use('/feed', feedRoutes);
app.use('/comments', commentsRoutes);
app.use('/likes', likesRoutes);
app.use('/posts', postsRoutes);

module.exports = app;