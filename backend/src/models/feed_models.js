const pool = require('../config/db');

async function getFeed() {
    const [rows] = await pool.query(`
        SELECT
            p.posts_id,
            p.posts_title,
            p.posts_content,
            u.user_name,
            c.communities_name,
            COUNT(DISTINCT l.likes_users_id) AS likes,
            COUNT(DISTINCT cm.comments_id) AS comments
        FROM posts p
        JOIN users u
            ON p.posts_users_id = u.user_id
        JOIN communities c
            ON p.posts_communities_id = c.communities_id
        LEFT JOIN likes l
            ON p.posts_id = l.likes_posts_id
        LEFT JOIN comments cm
            ON p.posts_id = cm.comments_posts_id
        GROUP BY p.posts_id
    `);

    return rows;
}

module.exports = {
    getFeed
};