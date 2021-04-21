function dia() {
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const hoje = new Date();
  return hoje.toLocaleDateString('pt-BR', opcoes);
}

export {dia};