const pool = require('../config/db');

const getAllUsers = async () => {
    const [rows] = await pool.execute('SELECT * FROM users');
    return rows;
};

const getUserById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE user_id = ?', [id]);
    return rows[0];
};

const getUserByEmail = async (email) => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE user_email = ?', [email]);
    return rows[0];
};

const createUser = async (userData) => {
    const { user_name, user_email, user_password, user_url, user_desc } = userData;
    const [result] = await pool.execute(
        'INSERT INTO users (user_name, user_email, user_password, user_url, user_desc) VALUES (?, ?, ?, ?, ?)',
        [user_name, user_email, user_password, user_url, user_desc]
    );
    return result;
};

const updateUser = async (id, userData) => {
    const { user_name, user_email, user_password, user_url, user_desc } = userData;
    const [result] = await pool.execute(
        'UPDATE users SET user_name = ?, user_email = ?, user_password = ?, user_url = ?, user_desc = ? WHERE user_id = ?',
        [user_name, user_email, user_password, user_url, user_desc, id]
    );
    return result;
};

const deleteUser = async (id) => {
    const [result] = await pool.execute('DELETE FROM users WHERE user_id = ?', [id]);
    return result;
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};