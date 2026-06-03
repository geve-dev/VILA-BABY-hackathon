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
        console.error(error);
        res.status(500).json({ erro: error.message });
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

const LoginUser = async (req, res) => {
    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
    }

    try {
        const user = await repo.getUserByEmail(user_email);
        if (!user || user.user_password !== user_password) {
            return res.status(401).json({ error: 'Email ou senha inválidos' });
        }

        const { user_password: _, ...userWithoutPassword } = user;
        res.json({ message: 'Login realizado com sucesso', user: userWithoutPassword });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
};      

module.exports = {
    FindAllUsers,
    FindUserById,
    CreateUser,
    UpdateUser,
    DeleteUser,
    LoginUser
};