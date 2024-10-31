const num = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('num-titulo');
const divText = document.getElementById('texto'); 

numeroTitulo.innerHTML = num;
divText.innerHTML += (`<p>Raiz quadrada: ${num ** 0.5}</p>`);
divText.innerHTML += (`<p>${num} é inteiro: ${Number.isInteger(num)}</p>`);
divText.innerHTML += (`<p>É NaN: ${Number.isNaN(num)}</p>`);
divText.innerHTML += (`<p>Arredondado para baixo: ${Math.floor(num)}</p>`);
divText.innerHTML += (`<p>Arredondado para cima: ${Math.ceil(num)}</p>`);
divText.innerHTML += (`<p>Com duas casas decimais: ${num.toFixed(2)}</p>`);