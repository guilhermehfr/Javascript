// função saudacao, retornando "Bom dia (parametro)"
function saudacao(nome) {
    return `Bom dia ${nome}`;
}

// Criando constante com parametro de 'luiz' para a função saudacao
const variavel = saudacao('Luiz');
console.log(variavel);

// Função soma, com valores pré-definidos
function soma(x = 1, y = 1) { 
    const resultado = x + y;
    return resultado;
}

console.log(soma(5));   // Definindo apenas o valor de X
console.log(soma(5, 1));// Definindo valor de X e Y

// Maneira atualizada de criar uma função dentro de variáveis
const raiz = n => n ** 0.5; 

/*
Maneira antiga:

const raiz = function (n) {
    return n ** 0.5;
    };  
    
*/
console.log(raiz(9));