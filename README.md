# Tech Challenge Full Stack Development

## Descrição

Uma aplicação de blogging dinâmica para professores da rede pública de educação, permitindo postar, editar e gerenciar conteúdo de forma centralizada.

## Endpoints

### Lista de Posts
- **GET /posts**

### Leitura de Posts
- **GET /posts/:id**

### Criação de Postagens
- **POST /posts**

### Edição de Postagens
- **PUT /posts/:id**

### Exclusão de Postagens
- **DELETE /posts/:id**

### Busca de Posts
- **GET /posts/search**

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB
- Docker
- GitHub Actions

## Como Rodar a Aplicação

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente no arquivo `.env`
4. Inicie o servidor: `npm start`

Para rodar com Docker:
1. Build e start: `docker-compose up --build`

Para rodar testes:
1. Execute: `npm test`
