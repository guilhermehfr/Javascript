function calc() {
    let result = document.getElementById('result');
    let peso = parseFloat(document.getElementById('pesos').value);
    let altura = parseFloat(document.getElementById('alturas').value);
    let resultado;

    // Validação de peso e altura
    if (!peso || peso <= 0) {
        result.innerHTML = `Peso inválido`;
        result.style.background = "Red";
        result.style.color = "White";
    } else if (!altura || altura <= 0) {
        result.innerHTML = `Altura inválida`;
        result.style.background = "Red";
        result.style.color = "White";
    } else {
        // Calculando o IMC
        resultado = (peso / (altura * altura));
        resultado = resultado.toFixed(1); // Limita a uma casa decimal

        // Exibindo o IMC
        result.innerHTML = `Seu IMC é ${resultado}`;

        // Classificando o IMC
        let classificacao = classificarIMC(parseFloat(resultado));
        result.innerHTML += `<br>Classificação: ${classificacao}`;
    }
}

// Função para classificar o IMC
function classificarIMC(imc) {
    const classes = new Map(); 
    /* cria um objeto com o metodo MAP utilizado para armazenar chaves-valores conectados */

    classes.set("Abaixo do peso", [0, 18.4]);  
    // Cria uma chave um valor
    classes.set("Peso normal", [18.5, 24.9]);
    // Cria uma chave um valor
    classes.set("Sobrepeso", [25, 29.9]);
    // Cria uma chave um valor
    classes.set("Obesidade grau 1", [30, 34.9]);

    classes.set("Obesidade grau 2", [35, 39.9]);
    
    classes.set("Obesidade grau 3", [40, Infinity]);
    
    /*
    Procura por meio das palavras classificacao, intervalo 
    (palavras podendo ser aleatorias, mas que tem que estar nas posições certas [chave, valor])
    dentre o objeto classes "of classes" 
    */
    for (let [classificacao, intervalo] of classes) {
        if (imc >= intervalo[0] && imc <= intervalo[1]) {
            return classificacao;
        }
        // 0 é a classificado mais baixa e 1 a mais alta na lista do map
    }
    return "IMC fora das faixas"; // Caso o IMC não se encaixe em nenhuma faixa após a procura do for, a função retorna isso.
}
