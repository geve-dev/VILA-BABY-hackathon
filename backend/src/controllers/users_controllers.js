const repo = require('../models/users_models');

const FindAllUsers = async (req, res) => {
    try {
        const users = await repo.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }   
};

const FindUserById = async (req, res) => {
    try {
        const user = await repo.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
};

const CreateUser = async (req, res) => {
    try {
        const result = await repo.createUser(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

const UpdateUser = async (req, res) => {
    try {
        const result = await repo.updateUser(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
};

const DeleteUser = async (req, res) => {
    try {
        const result = await repo.deleteUser(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
};      

module.exports = {
    FindAllUsers,
    FindUserById,
    CreateUser,
    UpdateUser,
    DeleteUser
};