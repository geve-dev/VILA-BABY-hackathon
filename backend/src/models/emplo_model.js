const pool = require('../config/db');

const getAllEmployees = async () => {
    const [rows] = await pool.execute('SELECT * FROM employees');
    return rows;
};