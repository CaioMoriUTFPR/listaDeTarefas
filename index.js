const express = require('express');
const app = express();
const porta = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const hoje = new Date();
  const diaAtual = hoje.getDay();
  // eslint-disable-next-line max-len
  const listaDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dia = listaDias[diaAtual];
  res.render('index', {dia: dia});
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
