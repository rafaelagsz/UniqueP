// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();
const cors = require('cors');

const usersRouter = require('../src/routes/usersRouter');

// Instanciar o express na variável app
const app = express();
// Setar a porta do servidor, a parir do arquivo .env ou assumir 3005
app.set('port', process.env.PORT || 3005);

app.use(express.json());
app.use(cors());

app.use('/api', usersRouter);

module.exports = app;

