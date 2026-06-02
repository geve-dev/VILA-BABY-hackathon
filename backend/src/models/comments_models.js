const pool = require('../config/db');

const getAllComments = async () => {
    const [rows] = await pool.execute('SELECT * FROM comments');
    return rows;
}

const getCommentsByPost = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM comments WHERE comments_posts_id = ?', [id]);
    return rows;
}

const createComment = async (comment) => {
    const { comments_users_id, comments_posts_id, comments_content } = comment;
    const [result] = await pool.execute(
        'INSERT INTO comments (comments_users_id, comments_posts_id, comments_content) VALUES (?, ?, ?)',
        [comments_users_id, comments_posts_id, comments_content]
    );
    return { id: result.insertId, ...comment };
}   

const deleteComment = async (id) => {
    await pool.execute('DELETE FROM comments WHERE comments_id = ?', [id]);
    return { message: 'Comentário excluído com sucesso' };
}

module.exports = {
    getAllComments,
    getCommentsByPost,
    createComment,
    deleteComment
};