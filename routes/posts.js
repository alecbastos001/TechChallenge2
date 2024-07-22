const express = require('express');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPosts
} = require('../controllers/postController');

const router = express.Router();

// Rota para listar todas as postagens
router.get('/', getAllPosts);

// Rota para ler uma postagem específica
router.get('/:id', getPostById);

// Rota para criar uma nova postagem
router.post('/', createPost);

// Rota para editar uma postagem existente
router.put('/:id', updatePost);

// Rota para listar todas as postagens (visão administrativa)
router.get('/admin', getAllPosts);

// Rota para excluir uma postagem
router.delete('/:id', deletePost);

// Rota para buscar postagens por palavra-chave
router.get('/search', searchPosts);

module.exports = router;
