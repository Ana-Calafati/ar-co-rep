//1. Lógica Automática para o menu (Index)
// Buscando todos os inputs do tipo botao dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            //O index começa em 0, entao somamos 1 para bater com "projeto01", "projeto02"...
            const numeroProjeto = (index + 1).toString().padStart(2, '0');
            window.location.href = `pages/projeto${numeroProjeto}.html`;
        });
    });
}

//2. Lógica das páginas de Projeto (Botão Voltar)
const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');
    btnVoltar.innerText = 'Voltar';

    //herdará o estilo button do css
    btnVoltar.className = 'btn-navegacao';
    btnVoltar.addEventListener('click', () => {
        window.location.href='../index.html';

    });
    document.body.appendChild(btnVoltar);
}

if (botoesProjeto.length === 0){
    // Adicionando um evento de escuta no navegador (objeto window).
    // após o carregamento da página a função será invocada()
    window.addEventListener('load', () => {
        criarBotaoVoltar();
    })
}