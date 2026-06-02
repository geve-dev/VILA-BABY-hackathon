const pool = require('../config/db');

const getAllEmployees = async () => {
    const [rows] = await pool.execute('SELECT * FROM employees');
    return rows;
};

const getEmployeeById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM employees WHERE employees_id = ?', [id]);
    return rows[0];
};

const createEmployee = async (employee) => {
    const { employees_name, employees_email, employees_password, employees_desc, employees_url } = employee;
    const [result] = await pool.execute(
        'INSERT INTO employees (employees_name, employees_email, employees_password, employees_desc, employees_url) VALUES (?, ?, ?, ?, ?)',
        [employees_name, employees_email, employees_password, employees_desc, employees_url]
    );
    return { id: result.insertId, ...employee };
};  

const updateEmployee = async (id, employee) => {
    const { employees_name, employees_email, employees_password, employees_desc, employees_url } = employee;
    await pool.execute(
        'UPDATE employees SET employees_name = ?, employees_email = ?, employees_password = ?, employees_desc = ?, employees_url = ? WHERE employees_id = ?',
        [employees_name, employees_email, employees_password, employees_desc, employees_url, id]
    );
    return { id, ...employee };
};

const deleteEmployee = async (id) => {
    await pool.execute('DELETE FROM employees WHERE employees_id = ?', [id]);
    return { message: 'Funcionário excluído com sucesso' };
};  

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
};