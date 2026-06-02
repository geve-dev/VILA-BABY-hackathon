const pool = require('../config/db');

async function findLikeByUserAndPost(userId, postId) {
  const [rows] = await pool.query(
    `SELECT * FROM likes
     WHERE likes_users_id = ? AND likes_posts_id = ?`,
    [userId, postId]
  );
  return rows;
}

async function createLike(userId, postId) {
  return pool.query(
    `INSERT INTO likes (likes_users_id, likes_posts_id)
     VALUES (?, ?)`,
    [userId, postId]
  );
}

async function deleteLike(userId, postId) {
  return pool.query(
    `DELETE FROM likes
     WHERE likes_users_id = ? AND likes_posts_id = ?`,
    [userId, postId]
  );
}

module.exports = {
  findLikeByUserAndPost,
  createLike,
  deleteLike
};