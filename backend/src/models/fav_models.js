const pool = require('../config/db');

const getAllFavs = async () => {
    const [rows] = await pool.execute('SELECT * FROM favorites');
    return rows;
}

const getFavByUser = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM favorites WHERE favorites_users_id = ?', [id]);
    return rows;
}

const createFav = async (fav) => {
    const { favorites_users_id, favorites_posts_id } = fav;
    const [result] = await pool.execute(
        'INSERT INTO favorites (favorites_users_id, favorites_posts_id) VALUES (?, ?)',
        [favorites_users_id, favorites_posts_id]
    );
    return result;
}

const deleteFav = async (userId, postId) => {
    const [result] = await pool.execute(
        'DELETE FROM favorites WHERE favorites_users_id = ? AND favorites_posts_id = ?',
        [userId, postId]
    );
    return result;
}

module.exports = {
    getAllFavs,
    getFavByUser,
    createFav,
    deleteFav
};