// Criação de um objeto chamado usuario
const usuario = {
    nome: 'Jose',               // Propriedade - nome
    sobrenome: 'Miranda',       // Propriedade - sobrenome
    idade: 25,                  // Propriedade - idade
    cidade: 'São Paulo'         // Propriedade - cidade
};

console.log(usuario.idade);     // Chamando propriedade de um objeto em notação de ponto
console.log(usuario['idade']);  // Chamando propriedade de um objeto entre colchetes


// Criando uma função que possui um objeto e retorna suas propriedades

function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
};

const pessoa1 = criaPessoa('João', 'Henrique', 25);  // Argumentos para os parâmetros para pessoa1

const pessoa2 = criaPessoa('Maria', 'Oliveira', 19);  // Argumentos para os parâmetros para pessoa2

console.log(pessoa1.nome, pessoa2.nome); // chamando propriedade por variável > contendo valores de uma função > que contem o objeto > e suas propriedades.


// criação de um OBJETO que comporta uma FUNÇÃO
const pessoa3 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',  
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`); // "this" neste contexto, se relaciona a pessoa3
  },

  incrementaIdade() {
    this.idade++;  // adiciona +1 ao número da propriedade idade
  },
};

// Chamando os valores das propriedades
pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();