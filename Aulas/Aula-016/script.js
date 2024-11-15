/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function
*/

// Primitivos :
let a = 'A'; // Original
let b = a;   // Cópia do valor
console.log(a, b);

a = 'outra coisa';
console.log (a, b);

// Referência :
let c = [1, 2, 3]; // Original
let d = c;         // Aponta para o mesmo valor que A
// let d = [...c]     Copia o valor de C, e se torna independente não sofrendo alterações caso C seja alterado ou vice-versa.
console.log (c, d);

c.push(4);
console.log(c, d); // 1, 2, 3, 4

d.pop();
console.log(c, d); // 1, 2, 3