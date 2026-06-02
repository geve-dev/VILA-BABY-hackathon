const repo = require('../models/communities_models');

const FindAllCommunities = async (req, res) => {
    try {
        const communities = await repo.FindAllCommunities();
        res.json(communities);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comunidades' });
    }
};

const FindCommunitiesById = async (req, res) => { 
    try {
        const community = await repo.FindCommunitiesById(req.params.id);
        if (community) {
            res.json(community);
        } else {
            res.status(404).json({ error: 'Comunidade não encontrada' });
        }           
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comunidade' });
    }
};

const CreateCommunities = async (req, res) => {
    try {
        const result = await repo.CreateCommunities(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar comunidade' });
    }
};

const UpdateCommunities = async (req, res) => {
    try {
        const result = await repo.UpdateCommunities(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar comunidade' });
    }
};

const DeleteCommunities = async (req, res) => {
    try {
        const result = await repo.DeleteCommunities(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir comunidade' });
    }
};


module.exports = {
    FindAllCommunities,
    FindCommunitiesById,
    CreateCommunities,
    UpdateCommunities,
    DeleteCommunities
}