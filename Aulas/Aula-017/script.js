document.addEventListener('DOMContentLoaded', function () {
    function meuEscopo() {
        const form = document.getElementById('form');
        const resultado = document.getElementById('resultado');
        
        function recebeEventoForm(evento) {
            evento.preventDefault();
            
            const nome = form.querySelector('#nome').value;  
            const sobrenome = form.querySelector('#sobrenome').value;
            const peso = form.querySelector('#peso').value;
            const altura = form.querySelector('#altura').value;
            
            resultado.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p><br>`;
        }

        form.addEventListener('submit', recebeEventoForm);
    }

    meuEscopo();
});
