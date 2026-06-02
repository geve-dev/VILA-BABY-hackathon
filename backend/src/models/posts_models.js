const pool = require('../config/db');

const getAllPosts = async () => {
    const [rows] = await pool.execute('SELECT * FROM posts');
    return rows;
};

const getPostById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM posts WHERE posts_id = ?', [id]);
    return rows[0];
};

const createPost = async (post) => {
    const { posts_users_id, posts_communities_id, posts_content, posts_url, posts_title } = post;
    const [result] = await pool.execute(
        'INSERT INTO posts (posts_users_id, posts_communities_id, posts_content, posts_url, posts_title) VALUES (?, ?, ?, ?, ?)',
        [posts_users_id, posts_communities_id, posts_content, posts_url, posts_title]
    );
    return { id: result.insertId, ...post };
};  

const updatePost = async (id, post) => {
    const { posts_users_id, posts_communities_id, posts_content, posts_url, posts_title } = post;
    await pool.execute(
        'UPDATE posts SET posts_users_id = ?, posts_communities_id = ?, posts_content = ?, posts_url = ?, posts_title = ? WHERE posts_id = ?',
        [posts_users_id, posts_communities_id, posts_content, posts_url, posts_title, id]
    );
    return { id, ...post };
};

const deletePost = async (id) => {
    await pool.execute('DELETE FROM posts WHERE posts_id = ?', [id]);
    return { message: 'Post excluído com sucesso' };
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};