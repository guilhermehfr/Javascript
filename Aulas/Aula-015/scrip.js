const usuario = {
    nome: 'Jose',
    sobrenome: 'Miranda',
    idade: 25,
    cidade: 'São Paulo'
};

console.log(usuario.idade);
console.log(usuario['idade']);


function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
};

const pessoa1 = criaPessoa('João', 'Henrique', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 19);

console.log(pessoa1.nome, pessoa2.nome);

const pessoa3 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',  
  idade: 25,

  fala() {
    console.log(`A minha idade atual é ${this.idade}`);
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala();