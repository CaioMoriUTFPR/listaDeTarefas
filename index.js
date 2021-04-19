const express = require('express');
const app = express();
const porta = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const hoje = new Date();
  const diaAtual = hoje.getDay();
  let dia = '';

  switch (diaAtual) {
    case 0:
      dia = 'Domingo';
      break;
    case 1:
      dia = 'Segunda';
      break;
    case 2:
      dia = 'Terça';
      break;
    case 3:
      dia = 'Quarta';
      break;
    case 4:
      dia = 'Quinta';
      break;
    case 5:
      dia = 'Sexta';
      break;
    case 6:
      dia = 'Sábado';
      break;
    default:
      break;
  };

  res.render('index', {dia: dia});
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
