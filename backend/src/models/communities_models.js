const pool = require('../config/db');

const FindAllCommunities = async () => {
    const [rows] = await pool.query('SELECT * FROM communities');
    return rows;
}   

const FindCommunitiesById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM communities WHERE communities_id = ?', [id]);
    return rows[0];
}

const CreateCommunities = async (data) => { 
    const { name, description } = data;
    const [result] = await pool.query('INSERT INTO communities (name, description) VALUES (?, ?)', [name, description]);
    return { id: result.insertId, name, description };
}

const UpdateCommunities = async (id, data) => {
    const { name, description } = data;
    await pool.query('UPDATE communities SET name = ?, description = ? WHERE communities_id = ?', [name, description, id]);
    return { id, name, description };
}

const DeleteCommunities = async (id) => {
    await pool.query('DELETE FROM communities WHERE communities_id = ?', [id]);
    return { message: 'Comunidade excluída com sucesso' };  
}



module.exports = {
    FindAllCommunities,
    FindCommunitiesById,
    CreateCommunities,
    UpdateCommunities,
    DeleteCommunities
}