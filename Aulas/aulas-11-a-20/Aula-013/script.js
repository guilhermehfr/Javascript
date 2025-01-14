
//                  indices do array  
//                0       1       2
let alunos = ['José', 'Maria', 'Ana'];
let notas = [0, 5, 7, 10];
console.log(alunos[2]); // chamando o valor string = 'Ana'
console.log(alunos[1]); // chamando o valor string = 'Maria'
console.log(alunos);

alunos[0] = 'Eduardo'; // Mudando o valor string de 'José' para 'Eduardo'
alunos[2] = 'Luiza';   // Adicionando como terceiro valor o nome 'Luiza'

alunos.push('Fábio');  // Adiciona no final
alunos.unshift('Fabiana'); // Adiciona no começo
console.log(alunos);

alunos.pop(); // remove o ultimo item do array
console.log(alunos);
alunos.shift(); // remove o primeiro item do array
console.log(alunos);
console.log(alunos instanceof Array); // Perguntando se a variável alunos é um array com instanceof