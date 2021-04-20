const express = require('express');
const app = express();
const porta = 80;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index', {dia: dia, itens: null});
});

app.post('/', (req, res) => {
  const itens = req.body.item;
  res.render('index', {dia: dia, itens: itens});
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});

const hoje = new Date();
const opcoes = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const dia = hoje.toLocaleDateString('pt-BR', opcoes);
