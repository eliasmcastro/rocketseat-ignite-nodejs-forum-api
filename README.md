<div align="center">
  <img alt="Node.js" src=".github/node.js.png" width="200px" />
</div>

<h3 align="center">
  Fórum Q&A API
</h3>

<p align="center">API de um fórum de perguntas e respostas, similar ao Stack Overflow. Usuários podem se registrar, criar perguntas, respondê-las, comentar em perguntas e respostas. Construído com NestJS e seguindo os princípios de Clean Architecture</p>

<p align="center">
  <a href="#como-executar-o-projeto">Como executar o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#anotações">Anotações</a>
</p>

<p align="center">Back-end</p>

<p align="center">
  <img alt="Back-end" src=".github/backend.png" width="90%">
</p>

## Como executar o projeto

### Clonar este repositório

```bash
git clone https://github.com/eliasmcastro/rocketseat-ignite-nodejs-forum-api.git
```

### Requisitos

- [Node.js](https://nodejs.org) na versão 24.18.1 com `npm` na versão 11.16.0
- [Docker](https://www.docker.com/get-started) para o banco de dados

#### Opcional

- [Insomnia](https://insomnia.rest)

### Passos para a execução

- Instalar as dependências do projeto

  ```bash
  npm i
  ```

- Configurar as variáveis de ambiente no arquivo `.env`, utilizando o `.env.example` como referência

- Iniciar o banco de dados com Docker

  ```bash
  docker-compose up -d
  ```

- Execute as migrações do Prisma

  ```bash
  npm prisma migrate dev
  ```

- Executar a aplicação (modo de desenvolvimento)

  ```bash
  npm run start:dev
  ```

  A aplicação começará a ser executada em http://localhost:3333

  _Dica: utilizar o Insomnia para testar as rotas_

  - Abrir o Insomnia -> Application -> Preferences -> Data -> Import Data -> From File -> Selecionar o arquivo insomnia.json

- Executar a aplicação (modo de produção)

  ```bash
  # Gerar o build
  npm run build

  # Iniciar a aplicação em modo de produção
  npm run start:prod
  ```

- Executar testes

  ```bash
  # Testes unitários (unit)
  npm run test

  # Testes de integração (E2E)
  npm run test:e2e
  ```

## Sobre

### Tecnologias

- **Framework:** [NestJS](https://nestjs.com/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/) (utilizado com Prisma)
- **Autenticação:** [JWT](https://jwt.io/) (JSON Web Tokens)
- **Testes:** [Vitest](https://vitest.dev/)
- **Cache:** [Redis](https://redis.io/)
- **Upload de Arquivos:** Suporte para upload de arquivos (ex: R2 Storage)
- **Linting:** [ESLint](https://eslint.org/)
- **Validação:** [Zod](https://zod.dev/)

###  Arquitetura

O projeto segue os princípios da **Clean Architecture**, separando o código em quatro camadas principais:

- `src/core`: Contém a lógica de negócio mais genérica e os blocos de construção do domínio (Entidades, Value Objects, Use Cases, etc.).
- `src/domain`: Contém a lógica de negócio específica da aplicação, dividida por contextos (ex: `forum`, `notification`).
- `src/infra`: Contém os detalhes de implementação, como controladores HTTP, módulos do NestJS, acesso ao banco de dados, etc.
- `test`: Contém os testes da aplicação, incluindo testes unitários e end-to-end.

### Rotas da API (Endpoints)

A seguir, a lista de rotas disponíveis na API:

#### Autenticação

- `POST /sessions`: Autentica um usuário e retorna um `access_token`.
- `POST /accounts`: Cria uma nova conta de usuário.

#### Perguntas

- `POST /questions`: Cria uma nova pergunta.
- `GET /questions`: Lista as perguntas mais recentes.
- `GET /questions/:slug`: Busca uma pergunta pelo seu slug.
- `PUT /questions/:id`: Edita uma pergunta.
- `DELETE /questions/:id`: Deleta uma pergunta.

#### Respostas

- `POST /questions/:questionId/answers`: Adiciona uma resposta a uma pergunta.
- `GET /questions/:questionId/answers`: Lista as respostas de uma pergunta.
- `PUT /answers/:id`: Edita uma resposta.
- `DELETE /answers/:id`: Deleta uma resposta.
- `PATCH /answers/:answerId/choose-as-best`: Marca uma resposta como a melhor.

#### Comentários

- `POST /questions/:questionId/comments`: Adiciona um comentário a uma pergunta.
- `GET /questions/:questionId/comments`: Lista os comentários de uma pergunta.
- `DELETE /questions/comments/:id`: Deleta um comentário de uma pergunta.
- `POST /answers/:answerId/comments`: Adiciona um comentário a uma resposta.
- `GET /answers/:answerId/comments`: Lista os comentários de uma resposta.
- `DELETE /answers/comments/:id`: Deleta um comentário de uma resposta.

#### Anexos

- `POST /attachments`: Faz o upload de um anexo.

#### Notificações

- `PATCH /notifications/:notificationId/read`: Marca uma notificação como lida.

## Anotações

### Criando um projeto

- `npm i -g @nestjs/cli` instala a interface de linha de comando (CLI) do NestJS globalmente no seu computador
- `nest new project-name` cria um novo projeto NestJS