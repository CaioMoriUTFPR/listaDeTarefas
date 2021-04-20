const express = require('express');
const app = express();
const porta = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const hoje = new Date();
  const diaAtual = hoje.getDay();
  // eslint-disable-next-line max-len
  const listaDias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  // eslint-disable-next-line max-len
  const listaCores = ['Green', 'Blue', 'Purple', 'Gray', 'Brown', 'Yellow', 'Red'];
  const dia = listaDias[diaAtual];
  const corDia = listaCores[diaAtual];
  res.render('index', {dia: dia, corDia: corDia});
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
