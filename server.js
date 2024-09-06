const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Inicializa a aplicação Express
const app = express();

// Middleware para analisar o corpo das requisições
app.use(bodyParser.json());

// Conecta ao MongoDB usando a URL fornecida na variável de ambiente
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});

// Configura as rotas para a aplicação de posts
app.use('/posts', postRoutes);

// Define a porta do servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
