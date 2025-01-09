/*
&&  -> false && true -> false
|| -> true || false -> vai retornar "o valor verdadeiro"
*/

console.log('Maria' && 'Luiz'); // Verifica se há valores Falsos


function falaoi() {
    return 'oi';
}

let execut = 'Joãozinho';
console.log(execut && falaoi());

console.log(0 || null || 'oi' || true);

let corUsuario = 'Vermelho';
let corPadrao = corUsuario || 'preto';
console.log(corPadrao);