const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');


console.log(btnP1, btnP2, btnP3);

function teste (x,y){

    return x + y
}

const sesi = teste;

btnP1.addEventListener('click', function(){
    window.location.href='./pages/projeto01.html'
});
// escute o evento clique e retorne a pagina
btnP2.addEventListener('click', function(){
    window.location.href='./pages/projeto02.html'
});

btnP3.addEventListener('click', function(){
    window.location.href='./pages/projeto03.html'
});

function cacho (x,y){
    return x+y
};

const banana = cacho


function uva(){
    return ('Sou uma uva')
};


// Arrow Function
// const uva = () =>'Sou uma fruta';
// const é uma estrutura 