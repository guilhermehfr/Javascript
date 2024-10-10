/*
    Luiz Otávio Miranda tem 30 anos, possui 80kg
    e 1.80m de altura, seu imc corporal é:
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 80;
const altura = 1.80;
let imc; 
let anoNasci;
imc = peso / (altura * altura);
anoNasci = 2024 - idade;
// imc = peso / (altura * altura)

console.log(nome, sobrenome, 'possui', peso, 'kg e', altura, 'de altura,', 'seu imc corporal é =', imc)
console.log(nome, sobrenome, 'nasceu em', anoNasci)