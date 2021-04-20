/* eslint-disable max-len */
const express = require('express');
const app = express();
const porta = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const hoje = new Date();
  const opcoes = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dia = hoje.toLocaleDateString('pt-BR', opcoes);
  res.render('index', {dia: dia});
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
