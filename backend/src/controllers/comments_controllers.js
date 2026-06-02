const repo = require('../models/comments_models');

const FindAllComments = async (req, res) => {
    try {
        const comments = await repo.getAllComments();   
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comentários' });
    }
};

const FindCommentByPostId = async (req, res) => {
    try {
        const comments = await repo.getCommentsByPostId(req.params.postId);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comentários' });
    }
};

const CreateComment = async (req, res) => {
    try {
        const result = await repo.createComment(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar comentário' });
    }
};

const DeleteComment = async (req, res) => {
    try {
        await repo.deleteComment(req.params.id);
        res.json({ message: 'Comentário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir comentário' });
    }
};

module.exports = {
    FindAllComments,
    FindCommentByPostId,
    CreateComment,
    DeleteComment
}