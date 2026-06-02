const Like = require('../models/likes_Models');
const pool = require('../config/db');

const ToggleLike = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const { userId, postId } = req.body;

    if (!userId || !postId) {
      return res.status(400).json({
        error: "userId ou postId não chegaram"
      });
    }

    const postExists = await pool.query(
      'SELECT posts_id FROM posts WHERE posts_id = ?',
      [postId]
    );

    if (postExists[0].length === 0) {
      return res.status(404).json({
        error: "Post não existe no banco"
      });
    }

    const alreadyLiked = await Like.findLikeByUserAndPost(userId, postId);

    if (alreadyLiked.length > 0) {
      await Like.deleteLike(userId, postId);
      return res.json({ message: 'unliked' });
    }

    await Like.createLike(userId, postId);
    return res.json({ message: 'liked' });

  } catch (error) {
    console.log("ERRO REAL:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  ToggleLike
};