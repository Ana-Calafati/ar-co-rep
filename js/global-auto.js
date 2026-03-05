//1. Lógia Automática para o menu (Index)
// Buscando todos os inputs do tipo botao dentro da classe .project__button-group
const botoesProjeto = document.querySelectorAll('.project__button-group input [type="button]');
console.loh(botoesProjeto);

if (botoesProjeto.length > 0) {
    botoesProjeto.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            //O index começa em 0, entao somamos 1 para bater com "projeto01", "projeto02"...
            const numeroProjeto = (index + 1). toString().padStart(2, '0');
            window.location.href = './pages/projeto${numeroProjeto}.html';
        });
    })
}