const mongoose = require('mongoose');

// Define o esquema para as postagens
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Exporta o modelo de Postagem
module.exports = mongoose.model('Post', postSchema);
