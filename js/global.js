//1. Logica do menu principal (index, obter os elementos)
const buttonP1 = document.querySelector('#inputP1');
const buttonP2 = document.querySelector('#inputP2');
const buttonP3 = document.querySelector('#inputP3');
const buttonP4 = document.querySelector('#inputP4');

//2. metodo addEventListener com uma função anonima 

buttonP1.addEventListener('click', function(){
    window.location.href='./pages/projeto01.html'
});
buttonP2.addEventListener('click', function(){
    window.location.href='./pages/projeto02.html'
});
buttonP3.addEventListener('click', function(){
    window.location.href='./pages/projeto03.html'
});

buttonP3.addEventListener('click', function(){
    window.location.href='./pages/projeto04.hmtl'
});

function criarBotaoVoltar (){
    //1. criar o elemento botao
    const botaovoltar = document.createElement('button');

    //2. definir o estilo do botao 
    botaovoltar.innerText ='voltar';
    botaovoltar.style.marginTop = '20px'
    function navegar(){
        window.location.href = '../index.html'
    }

    botaovoltar.addEventListener('click', navegar)

    // //3. lógica o click 
    // botaovoltar.addEventListener('click', function(){
    //     window.location.href = "../index.html"
    // })

    //4. adicionar o botao no final do body (appendchild, adiionar o filho (elemento, ou seja, o corpo do botao))
    document.body.appendChild(botaovoltar)
;}

window.onload = criarBotaoVoltar();
