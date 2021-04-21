import express, {urlencoded} from 'express';
const app = express();
const porta = 80;
const itensPadrao = [];
const itensTrabalho = [];

app.set('view engine', 'ejs');
app.use(urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const hoje = new Date();
  const dia = hoje.toLocaleDateString('pt-BR', opcoes);
  res.render('lista', {
    titulo: dia, 
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
