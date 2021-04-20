import express, {urlencoded} from 'express';
const app = express();
const porta = 80;
const itens = [];

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
  res.render('index', {dia: dia, itens: itens});
});

app.post('/', (req, res) => {
  const item = req.body.item;
  itens.push(item);
  res.redirect('/');
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
