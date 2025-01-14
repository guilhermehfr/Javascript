const userPontos = 1000;
const userNivel = userPontos >= 1000 ? 'Usuário VIP' : 'Usuário normal';
// condição ? 'Valor para verdadeiro' : 'Valor para falso';

console.log(userNivel);

const userCorEscolha = null;
const userCor =  userCorEscolha || 'Preto'

console.log(userCor);