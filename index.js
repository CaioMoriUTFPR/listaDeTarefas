import express, {urlencoded} from 'express';
import {dia} from './data.js';

const dias = dia();
const app = express();
const porta = 80;
const itensPadrao = [];
const itensTrabalho = [];

app.set('view engine', 'ejs');
app.use(urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('lista', {
    titulo: dias, 
    itens: itensPadrao
  });
});

app.get('/trabalho', (req, res) => {
  res.render('trabalho', {
    titulo: 'Lista de trabalho',
    itens: itensTrabalho
  });
});

app.post('/', (req, res) => {
  const item = req.body.item;
  itensPadrao.push(item);
  res.redirect('/');
});

app.post('/trabalho', (req, res) => {
  const item = req.body.item;
  itensTrabalho.push(item);
  res.redirect('/trabalho')
});

app.get('/sobre', (req, res) => {
  res.render('sobre');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
