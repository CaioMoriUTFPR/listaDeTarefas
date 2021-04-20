const express = require('express');
const app = express();
const porta = 80;
let item = null;

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const hoje = new Date();
  const dia = hoje.toLocaleDateString('pt-BR', opcoes);
  res.render('index', {dia: dia, item: item});
});

app.post('/', (req, res) => {
  item = req.body.item;
  res.redirect('/');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
