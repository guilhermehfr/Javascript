let nom1 = 10;
let nom2 = 5.6912121212121212;
nom1 = nom1.toString(nom1);

// Descobrir o tipo das variáveis
console.log(typeof(nom1), typeof(nom2));

// Limitar quantas casas decimáis terá o número
console.log(nom2.toFixed(2));

// verificar se um número é inteiro
console.log(Number.isInteger(nom2));

// Soma inválida
let temp = nom1 + 'ola';

// Retorna o valor true se não for um número, e valor false se for.
console.log(Number.isNaN(temp));
