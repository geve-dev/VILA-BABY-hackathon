const repo = require('../models/posts_models');

const FindAllPosts = async (req, res) => {
  try {
    const posts = await repo.getAllPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar posts' });
  }
};

const FindPostById = async (req, res) => {
  try {
    const post = await repo.getPostById(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: 'Post não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar post' });
  }
};

const CreatePost = async (req, res) => {
  try {
    const result = await repo.createPost(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar post' });
  }
};

const UpdatePost = async (req, res) => {
  try {
    const result = await repo.updatePost(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar post' });
  }
};

const DeletePost = async (req, res) => {
  try {
    await repo.deletePost(req.params.id);
    res.json({ message: 'Post excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir post' });
  }
};

module.exports = {
  FindAllPosts,
  FindPostById,
  CreatePost,
  UpdatePost,
  DeletePost,
};