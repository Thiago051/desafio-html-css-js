const imagens = document.querySelectorAll('.slide');
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

let imagemAtual = 0;

setaAvancar.addEventListener('click', function () {

    if (imagemAtual === imagens.length - 1) {
        return;
    }

    imagemAtual++;

    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;
    
    esconderImagemAberta();
    mostrarImagem();
    mostrarOuEsconderSetas();
});


function esconderImagemAberta() {
    const imagerAberta = document.querySelector('.mostrar');
    imagerAberta.classList.remove('mostrar')
}

function mostrarOuEsconderSetas() {
    const naoEhAprimeiraImagem = imagemAtual !== 0;

    if(naoEhAprimeiraImagem) {
        setaVoltar.classList.remove('opacidade');
    } else {
        setaVoltar.classList.add('opacidade');
    }

    const chegouNaUltimaImagem = imagemAtual === imagens.length -1;

    if (chegouNaUltimaImagem) {
        setaAvancar.classList.add('opacidade');
    } else {
        setaAvancar.classList.remove('opacidade');
    }
}

function mostrarImagem() {
    imagens[imagemAtual].classList.add('mostrar')
}